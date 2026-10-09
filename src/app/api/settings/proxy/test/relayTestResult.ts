// #5716 — shape the relay proxy-test response. Pure (no DB / network / Next
// imports) so it is unit-testable in isolation. When the relay *responds* with a
// non-200 (e.g. 401 from an auth-token mismatch), the old inline response set
// `success: false` but carried no `error` field, so the dashboard rendered a bare
// "failed" with no diagnostic and nothing was logged server-side.

export interface RelayTestResult {
  success: boolean;
  publicIp: string | null;
  ipv4: string | null;
  ipv6: string | null;
  latencyMs: number;
  proxyUrl: string;
  error?: string;
  relay?: RelayAwareness;
}

export function parseEchoIp(body: string): string | null {
  const trimmed = body.trim();
  if (!trimmed) return null;
  try {
    const parsed: unknown = JSON.parse(trimmed);
    if (parsed && typeof parsed === "object" && "ip" in parsed) {
      const ip = (parsed as { ip?: unknown }).ip;
      return typeof ip === "string" && ip.trim() ? ip.trim() : null;
    }
    return typeof parsed === "string" && parsed.trim() ? parsed.trim() : null;
  } catch {
    return trimmed;
  }
}

// Echoed from the relay response headers so the dashboard can show which
// backend actually answered, how many hops it tried, and whether it fell back.
export interface RelayAwareness {
  url: string | null;
  mode: string | null;
  attempts: number | null;
  fallback: boolean | null;
}

// Minimal header accessor so both the DOM `Headers` type and undici's
// `IncomingHttpHeaders` (which only exposes `.get(name)`) can be passed in.
type HeaderAccessor = { get(name: string): string | null };

export function buildRelayTestResult(input: {
  statusCode: number;
  publicIp: string | null;
  ipv4?: string | null;
  ipv6?: string | null;
  latencyMs: number;
  relayUrl: string;
  relayAuthPresent: boolean;
  relayResponseHeaders?: HeaderAccessor;
}): RelayTestResult {
  const { statusCode, publicIp, latencyMs, relayUrl, relayAuthPresent } = input;
  const success = statusCode === 200;
  const result: RelayTestResult = {
    success,
    publicIp,
    ipv4: input.ipv4 ?? null,
    ipv6: input.ipv6 ?? null,
    latencyMs,
    proxyUrl: relayUrl,
  };
  if (!success) {
    let error = `Relay returned HTTP ${statusCode}`;
    if (statusCode === 401 || statusCode === 403) {
      error += relayAuthPresent
        ? " — the relay rejected the auth token; redeploy the relay so its token matches, or check STORAGE_ENCRYPTION_KEY"
        : " — no relay auth token was found; redeploy the relay, or check for a STORAGE_ENCRYPTION_KEY rotation";
    }
    result.error = error;
  } else if (input.relayResponseHeaders) {
    result.relay = parseRelayAwareness(input.relayResponseHeaders);
  }
  return result;
}

function parseRelayAwareness(headers: HeaderAccessor): RelayAwareness {
  const read = (name: string): string | null => {
    const value = headers.get(name);
    return value === null ? null : value;
  };
  const attemptsRaw = read("x-relay-attempts");
  const fallbackRaw = read("x-relay-fallback");
  return {
    url: read("x-relay-url"),
    mode: read("x-relay-mode"),
    attempts: attemptsRaw === null ? null : Number(attemptsRaw) || null,
    fallback: fallbackRaw === null ? null : fallbackRaw === "true",
  };
}
