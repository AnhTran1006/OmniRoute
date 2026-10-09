import { request as undiciRequest } from "undici";
import {
  createProxyDispatcher,
  isRelayType,
  isSocks5ProxyEnabled,
  proxyConfigToUrl,
  proxyUrlForLogs,
} from "@omniroute/open-sse/utils/proxyDispatcher.ts";
import { testProxySchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";
import { createErrorResponse, createErrorResponseFromUnknown } from "@/lib/api/errorResponse";

import { extractRelayAuth, getProxyById } from "@/lib/db/proxies";
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";
import { sanitizeErrorMessage } from "@omniroute/open-sse/utils/error";
import { buildRelayTestResult, parseEchoIp } from "./relayTestResult";
import { recordRelayProbe } from "@/lib/db/relayProbeStats";

const BASE_SUPPORTED_PROXY_TYPES = new Set(["http", "https"]);
const EGRESS_IP_TARGETS = [
  // Keep these targets identical to scripts/ad-hoc/test_cloudflare_relay.py.
  // The relay, not this OmniRoute host, must make the outbound connection.
  { family: "ipv4" as const, url: "https://api.ipify.org" },
  { family: "ipv6" as const, url: "https://api6.ipify.org" },
];
type RelayProbeResult = {
  family: "ipv4" | "ipv6";
  statusCode: number;
  ip: string | null;
  headers: Record<string, string | string[] | undefined>;
};
type ProxyProbeResult = Omit<RelayProbeResult, "headers">;

function getErrorMessage(error: unknown, fallbackMessage: string): string {
  return sanitizeErrorMessage(error) || fallbackMessage;
}

function getSupportedProxyTypes() {
  if (isSocks5ProxyEnabled()) {
    return new Set([...BASE_SUPPORTED_PROXY_TYPES, "socks5"]);
  }
  return BASE_SUPPORTED_PROXY_TYPES;
}

function supportedTypesMessage() {
  return isSocks5ProxyEnabled() ? "http, https, or socks5" : "http or https";
}

/**
 * POST /api/settings/proxy/test — test proxy connectivity
 * Body: { proxy: { type, host, port, username?, password? } }
 * Returns: { success, publicIp?, ipv4?, ipv6?, latencyMs?, error? }
 */
export async function POST(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return createErrorResponse({
      status: 400,
      message: "Invalid JSON body",
      type: "invalid_request",
    });
  }

  try {
    const validation = validateBody(testProxySchema, rawBody);
    if (isValidationFailure(validation)) {
      return createErrorResponse({
        status: 400,
        message: validation.error.message,
        details: validation.error.details,
        type: "invalid_request",
      });
    }
    let { proxy } = validation.data;

    // If a proxyId is provided, look up the real (non-redacted) credentials from DB.
    // The frontend sends redacted credentials (***) from listProxies(), so we need
    // the actual secrets for testing.
    const body = rawBody as Record<string, unknown>;
    const proxyId = typeof body.proxyId === "string" ? body.proxyId.trim() : null;
    let dbProxyNotes: string | null = null;
    if (proxyId) {
      const dbProxy = await getProxyById(proxyId, { includeSecrets: true });
      if (dbProxy) {
        proxy = {
          ...proxy,
          host: proxy.host || dbProxy.host,
          port: proxy.port || String(dbProxy.port),
          type: proxy.type || dbProxy.type,
          username: dbProxy.username,
          password: dbProxy.password,
        };
        dbProxyNotes = dbProxy.notes ?? null;
      }
    }

    const proxyType = String(proxy.type || "http").toLowerCase();

    // Relay proxies (Vercel / Deno / Cloudflare): test by hitting ipify via the
    // relay headers. All three share the same x-relay-* header contract; the
    // only difference is the deployed edge target (#5128 — Deno/Cloudflare were
    // previously rejected here as unsupported proxy types).
    if (isRelayType(proxyType)) {
      const relayHost = proxy.host;
      // relayAuth lives in notes JSON, written by the deploy routes as either a
      // plaintext { relayAuth } or, on installs with STORAGE_ENCRYPTION_KEY, an
      // encrypted { relayAuthEnc }. extractRelayAuth handles both (#5128 — the
      // encrypted form was previously ignored, leaving relayAuth empty → 401).
      let relayAuth = extractRelayAuth(dbProxyNotes) ?? "";
      // Fallback: ad-hoc callers may pass relayAuth in the password field
      if (!relayAuth) relayAuth = proxy.password ?? "";
      const relayUrl = `https://${relayHost}`;
      const start = Date.now();
      const controller2 = new AbortController();
      const timeout2 = setTimeout(() => controller2.abort(), 10000);
      try {
        const results = await Promise.allSettled(
          EGRESS_IP_TARGETS.map(async ({ family, url }) => {
            const res = await undiciRequest(`${relayUrl}/`, {
              method: "GET",
              signal: controller2.signal,
              headersTimeout: 10000,
              bodyTimeout: 10000,
              headers: {
                "x-relay-target": url,
                "x-relay-path": "/",
                "x-relay-auth": relayAuth,
                "cache-control": "no-cache",
              },
            });
            const text = await res.body.text();
            return {
              family,
              statusCode: res.statusCode,
              ip: res.statusCode === 200 ? parseEchoIp(text) : null,
              headers: res.headers,
            };
          })
        );
        const successful = results
          .filter(
            (result): result is PromiseFulfilledResult<RelayProbeResult> =>
              result.status === "fulfilled" && result.value.statusCode === 200
          )
          .map((result) => result.value);
        const ipv4 = successful.find((result) => result.family === "ipv4")?.ip ?? null;
        const ipv6 = successful.find((result) => result.family === "ipv6")?.ip ?? null;
        const firstResponse = results.find(
          (result): result is PromiseFulfilledResult<RelayProbeResult> =>
            result.status === "fulfilled"
        );
        const statusCode = successful.length > 0 ? 200 : (firstResponse?.value.statusCode ?? 502);
        const responseHeaders = successful[0]?.headers;
        const relayResult = buildRelayTestResult({
          statusCode,
          publicIp: ipv6 || ipv4,
          ipv4,
          ipv6,
          latencyMs: Date.now() - start,
          relayUrl,
          relayAuthPresent: relayAuth.length > 0,
          relayResponseHeaders: responseHeaders
            ? {
                get: (name: string) => {
                  const value = responseHeaders[name.toLowerCase()];
                  return value === undefined ? null : String(value);
                },
              }
            : undefined,
        });
        // #5890: track relay probe outcomes so the dashboard can surface a
        // relayTested / relayAlive pulse and flag an unhealthy sidecar backend.
        recordRelayProbe(relayResult.success);
        // #5716: a relay that *responds* non-200 (e.g. 401 auth mismatch) used to
        // return `success:false` with no reason and no log — a silent failure.
        if (!relayResult.success) {
          console.warn(`[ProxyTest] relay ${relayHost}: ${relayResult.error}`);
        }
        return Response.json(relayResult);
      } catch (relayErr) {
        const message =
          relayErr instanceof Error && relayErr.name === "AbortError"
            ? "Connection timeout (10s)"
            : getErrorMessage(relayErr, "Relay test failed");
        console.warn(`[ProxyTest] relay ${relayHost} request failed: ${message}`);
        return Response.json({
          success: false,
          publicIp: null,
          ipv4: null,
          ipv6: null,
          error: message,
          latencyMs: Date.now() - start,
          proxyUrl: relayUrl,
        });
      } finally {
        clearTimeout(timeout2);
      }
    }

    if (proxyType === "socks5" && !isSocks5ProxyEnabled()) {
      return createErrorResponse({
        status: 400,
        message: "SOCKS5 proxy is disabled (set ENABLE_SOCKS5_PROXY=true to enable)",
        type: "invalid_request",
      });
    }
    if (proxyType.startsWith("socks") && proxyType !== "socks5") {
      return createErrorResponse({
        status: 400,
        message: `proxy.type must be ${supportedTypesMessage()}`,
        type: "invalid_request",
      });
    }
    if (!getSupportedProxyTypes().has(proxyType)) {
      return createErrorResponse({
        status: 400,
        message: `proxy.type must be ${supportedTypesMessage()}`,
        type: "invalid_request",
      });
    }

    let proxyUrl: string;
    try {
      const normalizedProxyUrl = proxyConfigToUrl(
        {
          type: proxyType,
          host: proxy.host,
          port: proxy.port,
          username: proxy.username || "",
          password: proxy.password || "",
        },
        { allowSocks5: isSocks5ProxyEnabled() }
      );
      if (!normalizedProxyUrl) {
        return createErrorResponse({
          status: 400,
          message: "Invalid proxy configuration",
          type: "invalid_request",
        });
      }
      proxyUrl = normalizedProxyUrl;
    } catch (proxyError) {
      return createErrorResponse({
        status: 400,
        message: getErrorMessage(proxyError, "Invalid proxy configuration"),
        type: "invalid_request",
      });
    }

    const publicProxyUrl = proxyUrlForLogs(proxyUrl);

    const startTime = Date.now();
    const dispatcher = createProxyDispatcher(proxyUrl);

    try {
      // Probe both address families in parallel so the result shows every
      // egress family available through the proxy without doubling latency.
      const results = await Promise.allSettled(
        EGRESS_IP_TARGETS.map(async ({ family, url }) => {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 10000);
          try {
            const result = await undiciRequest(url, {
              method: "GET",
              dispatcher,
              signal: controller.signal,
              headersTimeout: 10000,
              bodyTimeout: 10000,
            });
            return {
              family,
              statusCode: result.statusCode,
              ip: result.statusCode === 200 ? parseEchoIp(await result.body.text()) : null,
            };
          } finally {
            clearTimeout(timeout);
          }
        })
      );
      const successful = results.filter(
        (result): result is PromiseFulfilledResult<ProxyProbeResult> =>
          result.status === "fulfilled" && result.value.statusCode === 200
      );
      if (successful.length === 0) {
        throw new Error("Both IPv4 and IPv6 egress probes failed");
      }
      const ipv4 = successful.find((result) => result.value.family === "ipv4")?.value.ip ?? null;
      const ipv6 = successful.find((result) => result.value.family === "ipv6")?.value.ip ?? null;

      return Response.json({
        success: true,
        publicIp: ipv6 || ipv4,
        ipv4,
        ipv6,
        latencyMs: Date.now() - startTime,
        proxyUrl: publicProxyUrl,
      });
    } catch (fetchError) {
      const message =
        fetchError instanceof Error && fetchError.name === "AbortError"
          ? "Connection timeout (10s)"
          : getErrorMessage(fetchError, "Connection failed");
      // #5716: surface the reason in server logs — a failing proxy test was silent.
      console.warn(`[ProxyTest] ${proxyType} proxy ${publicProxyUrl} failed: ${message}`);
      return Response.json({
        success: false,
        publicIp: null,
        ipv4: null,
        ipv6: null,
        error: message,
        latencyMs: Date.now() - startTime,
        proxyUrl: publicProxyUrl,
      });
    }
  } catch (error) {
    return createErrorResponseFromUnknown(error, "Unexpected server error");
  }
}
