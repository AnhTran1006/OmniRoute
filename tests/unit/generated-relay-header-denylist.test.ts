import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { __buildRelayWorkerForTest } from "../../src/app/api/settings/proxy/deno-deploy/route";
import { __buildRelayFunctionForTest } from "../../src/app/api/settings/proxy/vercel-deploy/route";
import { buildCloudflareWorkerScript } from "../../src/lib/proxyRelay/cloudflareWorkerScript";
import { sanitizeRelayForwardHeaders } from "../../src/lib/proxyRelay/relayForwardHeaders";

const relays = {
  Cloudflare: buildCloudflareWorkerScript("relay-secret"),
  Vercel: __buildRelayFunctionForTest("relay-secret"),
  Deno: __buildRelayWorkerForTest("relay-secret"),
};

// Hop-by-hop / framing headers that belong to the client connection only.
const HOP_BY_HOP_HEADERS = [
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
];

// OmniRoute relay control headers.
const RELAY_CONTROL_HEADERS = ["x-relay-target", "x-relay-path", "x-relay-auth"];

// Client-identity headers the edge platform injects on the inbound request.
// Forwarding any of these leaks the caller's origin IP (or Vercel's internal
// OIDC token) to the upstream provider.
const CLIENT_IDENTITY_HEADERS = [
  "forwarded",
  "x-forwarded-for",
  "x-forwarded-host",
  "x-forwarded-proto",
  "x-forwarded-port",
  "x-forwarded-server",
  "x-real-ip",
  "true-client-ip",
  "client-ip",
  "via",
  "cf-connecting-ip",
  "cf-connecting-ipv6",
  "cf-ipcountry",
  "x-vercel-proxied-for",
  "x-vercel-ip-city",
  "x-vercel-ip-country",
  "x-vercel-oidc-token",
  "x-vercel-deployment-url",
  "x-vercel-id",
  "x-vercel-edge-region",
  "x-vercel-ja4-digest",
  "x-invocation-id",
  "logs-url",
  "x-middleware-subrequest",
];

const MUST_STRIP = [...HOP_BY_HOP_HEADERS, ...RELAY_CONTROL_HEADERS, ...CLIENT_IDENTITY_HEADERS];
const MUST_KEEP = ["authorization", "content-type", "accept", "x-api-key"];

describe("relay forwarded-header sanitization", () => {
  it("strips client-identity, relay-control and hop-by-hop headers, keeps provider headers", () => {
    const headers = new Headers();
    for (const name of MUST_STRIP) headers.set(name, "leak");
    for (const name of MUST_KEEP) headers.set(name, "keep");

    sanitizeRelayForwardHeaders(headers);

    for (const name of MUST_STRIP) {
      assert.equal(headers.get(name), null, `${name} must be stripped before forwarding`);
    }
    for (const name of MUST_KEEP) {
      assert.equal(headers.get(name), "keep", `${name} must survive sanitization`);
    }
  });

  for (const [runtime, source] of Object.entries(relays)) {
    it(`${runtime} generated relay inlines the shared sanitizer and calls it`, () => {
      assert.ok(
        source.includes("const sanitizeRelayForwardHeaders ="),
        `${runtime} must bind the inlined sanitizer to a literal const name`
      );
      assert.ok(
        source.includes("sanitizeRelayForwardHeaders(headers)"),
        `${runtime} must call sanitizeRelayForwardHeaders(headers)`
      );
      // The inlined copy must be the audited shared function, byte-for-byte.
      assert.ok(
        source.includes(sanitizeRelayForwardHeaders.toString()),
        `${runtime} inlined sanitizer must match the shared source`
      );
      // The pre-fix inline array denylist must be gone.
      assert.ok(
        !/\]\.forEach\(\(?h\)?\s*=>\s*headers\.delete\(h\)\)/.test(source),
        `${runtime} must not keep the old inline header denylist`
      );
    });
  }
});
