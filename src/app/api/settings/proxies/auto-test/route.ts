import { z } from "zod";
import { deleteProxyById, extractRelayAuth, listProxies, updateProxy } from "@/lib/db/proxies";
import { createErrorResponseFromUnknown } from "@/lib/api/errorResponse";
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";
import {
  createProxyDispatcher,
  isRelayType,
  proxyConfigToUrl,
} from "@omniroute/open-sse/utils/proxyDispatcher";
import { fetch as undiciFetch } from "undici";
import { classifyProbeStatus } from "@/lib/proxyHealth/decision";
import { resolveHealthCheckStatusWrite } from "@/lib/proxyHealth/statusPolicy";
import {
  resolveProbeConcurrency,
  resolveProbeStaggerMs,
  resolveProbeTarget,
  waitForProbeSlot,
} from "@/lib/proxyHealth/probeTarget";
import { resolveProviderProbeTarget } from "@/lib/proxyHealth/providerProbeTarget";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";
import { createErrorResponse } from "@/lib/api/errorResponse";

const TEST_TIMEOUT_MS = 5000;
// Shared with the background sweep — see src/lib/proxyHealth/probeTarget.ts.
const TEST_URL = resolveProbeTarget();
const CONCURRENCY = resolveProbeConcurrency();
const STAGGER_MS = resolveProbeStaggerMs();

const autoTestSchema = z.object({
  ids: z.array(z.string()).optional(),
  autoRemove: z.boolean().optional().default(false),
});

interface TestResult {
  proxyId: string;
  host: string;
  port: number;
  alive: boolean;
  /**
   * The proxy relayed, but the target refused this egress IP (401/403/429).
   * Reported alongside `alive` rather than inside it: a refused IP is still a
   * reachable proxy, so folding it into `alive` would change what the opt-in
   * status write (`PROXY_HEALTH_AUTO_DEACTIVATE`) deactivates.
   */
  blockedByTarget?: boolean;
  latencyMs: number | null;
  error?: string;
  publicIp?: string | null;
  ipv4?: string | null;
  ipv6?: string | null;
}

const RELAY_EGRESS_TARGETS = [
  // Keep these targets identical to scripts/ad-hoc/test_cloudflare_relay.py.
  { family: "ipv4" as const, url: "https://api.ipify.org" },
  { family: "ipv6" as const, url: "https://api6.ipify.org" },
];

function parseProbeIp(body: string): string | null {
  try {
    const parsed: unknown = JSON.parse(body);
    if (parsed && typeof parsed === "object" && "ip" in parsed) {
      const ip = (parsed as { ip?: unknown }).ip;
      return typeof ip === "string" && ip.trim() ? ip.trim() : null;
    }
    return typeof parsed === "string" && parsed.trim() ? parsed.trim() : null;
  } catch {
    const ip = body.trim();
    return ip || null;
  }
}

async function testSingleProxy(proxy: {
  id: string;
  type: string;
  host: string;
  port: number;
  username?: string;
  password?: string;
  family?: string;
  notes?: string | null;
}): Promise<TestResult> {
  if (isRelayType(proxy.type)) {
    const start = Date.now();
    const relayAuth = extractRelayAuth(proxy.notes ?? null) ?? proxy.password ?? "";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TEST_TIMEOUT_MS);
    try {
      const results = await Promise.allSettled(
        RELAY_EGRESS_TARGETS.map(async ({ family, url }) => {
          const response = await undiciFetch(`https://${proxy.host}/`, {
            method: "GET",
            signal: controller.signal,
            headersTimeout: TEST_TIMEOUT_MS,
            bodyTimeout: TEST_TIMEOUT_MS,
            headers: {
              "x-relay-auth": relayAuth,
              "x-relay-target": url,
              "x-relay-path": "/",
              "cache-control": "no-cache",
            },
          });
          const body = await response.body.text();
          return {
            family,
            status: response.status,
            ip: response.status === 200 ? parseProbeIp(body) : null,
          };
        })
      );
      const successful = results.filter(
        (
          result
        ): result is PromiseFulfilledResult<{
          family: "ipv4" | "ipv6";
          status: number;
          ip: string | null;
        }> => result.status === "fulfilled" && result.value.status === 200
      );
      const alive = successful.length > 0;
      const statusWrite = resolveHealthCheckStatusWrite(alive);
      if (statusWrite) await updateProxy(proxy.id, { status: statusWrite }).catch(() => {});
      return {
        proxyId: proxy.id,
        host: proxy.host,
        port: proxy.port,
        alive,
        latencyMs: Date.now() - start,
        ipv4: successful.find((result) => result.value.family === "ipv4")?.value.ip ?? null,
        ipv6: successful.find((result) => result.value.family === "ipv6")?.value.ip ?? null,
        ...(!alive ? { error: "Relay did not return a successful IPv4 or IPv6 probe" } : {}),
      };
    } catch (error) {
      const statusWrite = resolveHealthCheckStatusWrite(false);
      if (statusWrite) await updateProxy(proxy.id, { status: statusWrite }).catch(() => {});
      return {
        proxyId: proxy.id,
        host: proxy.host,
        port: proxy.port,
        alive: false,
        latencyMs: Date.now() - start,
        error: error instanceof Error ? error.message : "Relay connection failed",
      };
    } finally {
      clearTimeout(timeout);
    }
  }

  let proxyUrl: string | null;
  try {
    proxyUrl = proxyConfigToUrl(proxy);
  } catch {
    proxyUrl = null;
  }
  if (!proxyUrl) {
    return {
      proxyId: proxy.id,
      host: proxy.host,
      port: proxy.port,
      alive: false,
      latencyMs: null,
      error: "Invalid proxy config (check type, host, port)",
    };
  }
  const start = Date.now();
  // Same rationale as the background sweep: a real provider's models endpoint is GET-only,
  // unlike httpbin.org/ip. The generic target keeps its existing HEAD.
  const providerTarget = await resolveProviderProbeTarget(proxy.id);
  const target = providerTarget ?? TEST_URL;
  const method = providerTarget ? "GET" : "HEAD";
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TEST_TIMEOUT_MS);

  try {
    const dispatcher = createProxyDispatcher(proxyUrl);
    const resp = await undiciFetch(target, {
      method,
      signal: controller.signal,
      dispatcher,
      headers: { "User-Agent": "OmniRoute/1.0" },
    });
    const latencyMs = Date.now() - start;
    const outcome = classifyProbeStatus(resp.status);
    const body = method === "GET" ? await resp.text() : "";
    // Same shared classifier the sweep uses. `alive` keeps its exact prior meaning
    // (any status under 500): "blocked" covers 401/403/429, which were — and stay —
    // alive here, so no proxy changes state because of this field.
    const alive = outcome === "ok" || outcome === "blocked";
    // #6246: "Test All" is a test, not test-and-set. By default an automated probe
    // never mutates a proxy's status (only the operator does). Opt back into the
    // legacy write with PROXY_HEALTH_AUTO_DEACTIVATE=true.
    const statusWrite = resolveHealthCheckStatusWrite(alive);
    if (statusWrite) await updateProxy(proxy.id, { status: statusWrite }).catch(() => {});
    return {
      proxyId: proxy.id,
      host: proxy.host,
      port: proxy.port,
      alive,
      ...(outcome === "blocked" ? { blockedByTarget: true } : {}),
      latencyMs,
      ...(body ? { publicIp: parseProbeIp(body) } : {}),
    };
  } catch (err) {
    const latencyMs = Date.now() - start;
    const statusWrite = resolveHealthCheckStatusWrite(false);
    if (statusWrite) await updateProxy(proxy.id, { status: statusWrite }).catch(() => {});
    return {
      proxyId: proxy.id,
      host: proxy.host,
      port: proxy.port,
      alive: false,
      latencyMs,
      error: err instanceof Error ? err.message : "Connection failed",
    };
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * POST /api/settings/proxies/auto-test
 * Tests proxy reachability. If autoRemove is true, removes dead proxies.
 */
export async function POST(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    rawBody = {};
  }

  const validation = validateBody(autoTestSchema, rawBody);
  if (isValidationFailure(validation)) {
    return createErrorResponse({
      status: 400,
      message: validation.error.message,
      type: "invalid_request",
    });
  }

  const { ids: specificIds, autoRemove } = validation.data;

  try {
    const result = await listProxies({ includeSecrets: true });
    const allProxies = result.items;
    const proxiesToTest = specificIds
      ? allProxies.filter((p) => specificIds.includes(p.id))
      : allProxies;

    if (proxiesToTest.length === 0) {
      return Response.json({ results: [], removed: [] });
    }

    const results: TestResult[] = [];
    for (let i = 0; i < proxiesToTest.length; i += CONCURRENCY) {
      const batch = proxiesToTest.slice(i, i + CONCURRENCY);
      const batchResults = await Promise.allSettled(
        batch.map(async (proxy, indexInBatch) => {
          // Same intra-batch spacing as the background sweep: "Test All" fires the whole
          // batch at once too, so it is just as capable of tripping a rate-limited target.
          await waitForProbeSlot(indexInBatch, STAGGER_MS);
          return testSingleProxy(proxy);
        })
      );
      for (const result of batchResults) {
        if (result.status === "fulfilled") results.push(result.value);
      }
    }

    const removed: string[] = [];
    if (autoRemove) {
      for (const r of results) {
        if (!r.alive) {
          try {
            if (await deleteProxyById(r.proxyId, { force: true })) removed.push(r.proxyId);
          } catch {
            /* skip */
          }
        }
      }
    }

    return Response.json({
      tested: results.length,
      alive: results.filter((r) => r.alive).length,
      dead: results.filter((r) => !r.alive).length,
      removed: removed.length,
      results,
    });
  } catch (error) {
    return createErrorResponseFromUnknown(error, "Failed to auto-test proxies");
  }
}
