import test from "node:test";
import assert from "node:assert/strict";
import { buildRelayTestResult, parseEchoIp } from "@/app/api/settings/proxy/test/relayTestResult";

test("parses JSON and plain-text echo responses", () => {
  assert.equal(parseEchoIp('{"ip":"14.254.218.186"}'), "14.254.218.186");
  assert.equal(parseEchoIp('{"ip":"2a06:98c0:3600::103"}'), "2a06:98c0:3600::103");
  assert.equal(parseEchoIp("203.0.113.10\n"), "203.0.113.10");
  assert.equal(parseEchoIp(""), null);
});

test("keeps both observed address families in a successful relay result", () => {
  const result = buildRelayTestResult({
    statusCode: 200,
    publicIp: "2a06:98c0:3600::103",
    ipv4: null,
    ipv6: "2a06:98c0:3600::103",
    latencyMs: 369,
    relayUrl: "https://relay.example",
    relayAuthPresent: true,
  });

  assert.deepEqual(
    {
      publicIp: result.publicIp,
      ipv4: result.ipv4,
      ipv6: result.ipv6,
    },
    {
      publicIp: "2a06:98c0:3600::103",
      ipv4: null,
      ipv6: "2a06:98c0:3600::103",
    }
  );
});
