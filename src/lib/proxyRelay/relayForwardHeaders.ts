/**
 * Forwarded-header sanitization shared by the three generated edge relays
 * (Vercel Edge / Deno Deploy / Cloudflare Workers).
 *
 * The relays forward every inbound request header upstream except the ones
 * deleted here. That default is unsafe: the edge platform injects the real
 * client identity into the inbound request — Vercel as `Forwarded: for=<ip>`,
 * `X-Vercel-Proxied-For`, all `X-Vercel-Ip-*` geo headers and
 * `X-Vercel-Oidc-Token`; Cloudflare as `CF-Connecting-IP` / `X-Forwarded-For`.
 * Forwarding them leaks the client's origin IP (and Vercel's internal OIDC
 * token) to every upstream provider, and defeats the relay's purpose of making
 * upstream traffic appear to originate from the relay.
 *
 * This mirrors the canonical client-IP denylist in
 * `src/shared/constants/upstreamHeaders.ts` (the custom-upstream-header
 * sanitizer) so both paths scrub the same identity set.
 *
 * Kept SELF-CONTAINED — no module-level references — so each emitter can inline
 * it into the edge worker via `Function#toString()`: the edge runtime cannot
 * import Node-side helpers. Bind the inlined copy to a LITERAL const name at the
 * call site so it survives SWC minification (#6149).
 */
export function sanitizeRelayForwardHeaders(headers: Headers): void {
  const forbidden = [
    // Hop-by-hop / framing (RFC 7230 §6.1) and body length.
    "host",
    "connection",
    "content-length",
    "keep-alive",
    "proxy-connection",
    "proxy-authenticate",
    "proxy-authorization",
    "transfer-encoding",
    "te",
    "trailer",
    "upgrade",
    // Relay control headers — omniRoute-internal, never for the upstream.
    "x-relay-target",
    "x-relay-path",
    "x-relay-auth",
    // Client-origin IP disclosure (single-name forms).
    "forwarded",
    "x-real-ip",
    "true-client-ip",
    "client-ip",
    "via",
    // Platform internals that carry deployment identity / tokens.
    "x-invocation-id",
    "logs-url",
    "x-middleware-subrequest",
  ];
  // Whole families that carry client identity and must never reach the target:
  // `x-forwarded-*`, every `x-vercel-*` (client IP, geo, deployment id, OIDC
  // token), and Cloudflare's `cf-connecting-*` / `cf-ip*` geo headers.
  const forbiddenPrefixes = ["x-forwarded-", "x-vercel-", "cf-connecting-", "cf-ip"];
  for (const name of forbidden) headers.delete(name);
  for (const name of Array.from(headers.keys())) {
    if (forbiddenPrefixes.some((prefix) => name.startsWith(prefix))) headers.delete(name);
  }
}
