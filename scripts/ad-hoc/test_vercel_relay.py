"""Test an OmniRoute Vercel Relay and print its observed egress IP (IPv4, IPv6, true egress).

Usage:
  py scripts/ad-hoc/test_vercel_relay.py --relay relay-1.example.vercel.app --auth "$RELAY_AUTH"

The relay auth can also be provided through the RELAY_AUTH environment variable.
The script never prints the auth value. A browser-like User-Agent is sent by
default so Vercel's edge / bot rules do not reject Python's default urllib agent.

Probes:
  * https://api.ipify.org            -> what the relay's upstream *thinks* the
                                        client IP is (mirrors the dashboard test
                                        EGRESS_IP_TARGETS in
                                        src/app/api/settings/proxy/test/route.ts).
  * https://api6.ipify.org           -> same, IPv6.
  * https://www.cloudflare.com/cdn-cgi/trace
                                     -> the relay's ACTUAL TCP egress IP. This
                                        endpoint reports the connecting peer
                                        (CF-Connecting-IP) and does NOT read
                                        X-Forwarded-For, so it is the ground truth.

Why this matters: OmniRoute's generated relays (Vercel / Deno / Cloudflare) forward
every request header except a small denylist. Vercel injects the real client IP into
the incoming request as `Forwarded: for=<client ip>` and `X-Vercel-Proxied-For:
<client ip>`, and those are NOT in the denylist — so they reach the upstream. ipify
trusts a forwarded client IP and echoes it, which is why the ipify probe shows *your*
IP rather than the relay's. The cloudflare trace probe bypasses that and shows the
relay's true egress.

Note: Vercel Edge Functions typically have no outbound IPv6 path, so the IPv6 probe
may fail with Vercel's own 500 error envelope. That is reported, not treated as a
relay failure as long as another probe succeeds.
"""

from __future__ import annotations

import argparse
import ipaddress
import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request


IPV4_TARGET = "https://api.ipify.org"
IPV6_TARGET = "https://api6.ipify.org"
TRACE_TARGET = "https://www.cloudflare.com/cdn-cgi/trace"

PROBE_LABELS = {
    IPV4_TARGET: "upstream-viewed IPv4 (ipify)",
    IPV6_TARGET: "upstream-viewed IPv6 (api6.ipify)",
    TRACE_TARGET: "true TCP egress (cloudflare trace)",
}


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Test an OmniRoute Vercel Relay and show its public IPv4/IPv6 egress IP."
    )
    parser.add_argument(
        "--relay",
        default=os.environ.get("VERCEL_RELAY_HOST"),
        help="Relay hostname or URL, for example relay-1.example.vercel.app",
    )
    parser.add_argument(
        "--auth",
        default=os.environ.get("RELAY_AUTH"),
        help="Relay auth token (x-relay-auth). Prefer the RELAY_AUTH environment variable.",
    )
    parser.add_argument(
        "--target",
        default=None,
        help="Test one custom echo endpoint instead of running the built-in probes",
    )
    parser.add_argument(
        "--timeout",
        type=float,
        default=20.0,
        help="Request timeout in seconds (default: 20)",
    )
    parser.add_argument(
        "--user-agent",
        default=(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/131.0.0.0 Safari/537.36"
        ),
        help="HTTP User-Agent sent to the relay",
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Emit a machine-readable JSON report instead of human text",
    )
    return parser


def normalize_relay_url(value: str) -> str:
    relay = value.strip()
    if not relay:
        raise ValueError("relay hostname must not be empty")
    if "://" not in relay:
        relay = f"https://{relay}"
    parsed = urllib.parse.urlparse(relay)
    if parsed.scheme != "https" or not parsed.netloc:
        raise ValueError("relay must be an HTTPS hostname or URL")
    return f"{parsed.scheme}://{parsed.netloc}/"


def validate_target(value: str) -> tuple[str, str]:
    parsed = urllib.parse.urlparse(value)
    if parsed.scheme not in {"https", "http"} or not parsed.netloc:
        raise ValueError("target must be an HTTP(S) URL")
    path = parsed.path or "/"
    if parsed.query:
        path = f"{path}?{parsed.query}"
    return value, path


def extract_ip(body: str, target: str) -> str | None:
    """Pull the echoed address out of an echo response.

    ipify returns the bare address; cloudflare's /cdn-cgi/trace returns
    newline-separated `key=value` lines where `ip=` is the TCP peer.
    """
    text = body.strip()
    if not text:
        return None
    if target == TRACE_TARGET:
        match = re.search(r"(?m)^ip=(.+)$", text)
        return match.group(1).strip() if match else None
    # ipify plain text, or JSON {"ip": "..."} for ?format=json targets.
    if text.startswith("{"):
        try:
            parsed = json.loads(text)
            if isinstance(parsed, dict) and isinstance(parsed.get("ip"), str):
                return parsed["ip"].strip()
        except ValueError:
            pass
    return text.splitlines()[0].strip()


def classify_ip(value: str | None) -> str:
    """Return "ipv4", "ipv6", "private" or "unknown" for an echoed address."""
    if not value:
        return "unknown"
    try:
        address = ipaddress.ip_address(value.strip())
    except ValueError:
        return "unknown"
    if not address.is_global:
        return "private"
    return "ipv4" if address.version == 4 else "ipv6"


def build_relay_request(
    relay_url: str,
    target_url: str,
    target_path: str,
    auth: str,
    user_agent: str,
) -> urllib.request.Request:
    return urllib.request.Request(
        relay_url,
        method="GET",
        headers={
            "User-Agent": user_agent,
            "Accept": "text/plain, application/json",
            "x-relay-auth": auth,
            "x-relay-target": target_url,
            "x-relay-path": target_path,
            "cache-control": "no-cache",
        },
    )


def probe(
    relay_url: str,
    target_url: str,
    target_path: str,
    auth: str,
    user_agent: str,
    timeout: float,
) -> dict[str, object]:
    request = build_relay_request(relay_url, target_url, target_path, auth, user_agent)
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            body = response.read().decode("utf-8", errors="replace")
            ip = extract_ip(body, target_url)
            return {
                "target": target_url,
                "status": response.status,
                "ip": ip,
                "family": classify_ip(ip),
            }
    except urllib.error.HTTPError as error:
        detail = error.read().decode("utf-8", errors="replace").strip()
        return {
            "target": target_url,
            "status": error.code,
            "ip": None,
            "family": "unknown",
            "error": f"HTTP {error.code} {error.reason}: {detail[:200]}",
        }
    except (urllib.error.URLError, TimeoutError, OSError) as error:
        return {
            "target": target_url,
            "status": None,
            "ip": None,
            "family": "unknown",
            "error": str(error),
        }


def find(results: list[dict[str, object]], target: str) -> dict[str, object] | None:
    return next((result for result in results if result["target"] == target), None)


def report_text(results: list[dict[str, object]]) -> int:
    for result in results:
        label = PROBE_LABELS.get(str(result["target"]), str(result["target"]))
        if result.get("ip"):
            print(f"[ok]   {label} -> {result['ip']} ({result['family']})")
        else:
            print(f"[fail] {label} -> {result.get('error') or 'no address returned'}")

    print()
    ipv4 = find(results, IPV4_TARGET)
    ipv6 = find(results, IPV6_TARGET)
    trace = find(results, TRACE_TARGET)

    if ipv4 and ipv4.get("family") == "ipv4":
        print(f"upstream-viewed IPv4 : {ipv4['ip']}")
    if ipv6 and ipv6.get("family") == "ipv6":
        print(f"upstream-viewed IPv6 : {ipv6['ip']}")
    else:
        print("upstream-viewed IPv6 : unavailable (Vercel Edge has no outbound IPv6)")
    if trace and trace.get("family") in {"ipv4", "ipv6"}:
        print(f"TRUE relay egress IP : {trace['ip']}")
        if ipv4 and ipv4.get("ip") and ipv4["ip"] != trace["ip"]:
            print(
                "  note: ipify returned a different address than the true egress - "
                "the relay is leaking your client IP via Forwarded/X-Forwarded-For."
            )

    return 0 if any(result.get("family") in {"ipv4", "ipv6"} for result in results) else 1


def main() -> int:
    args = build_parser().parse_args()
    if not args.relay:
        print("Missing relay host. Use --relay or set VERCEL_RELAY_HOST.", file=sys.stderr)
        return 2
    if not args.auth:
        print("Missing relay auth. Use --auth or set RELAY_AUTH.", file=sys.stderr)
        return 2

    try:
        relay_url = normalize_relay_url(args.relay)
        targets = (
            [validate_target(args.target)]
            if args.target
            else [
                validate_target(IPV4_TARGET),
                validate_target(IPV6_TARGET),
                validate_target(TRACE_TARGET),
            ]
        )
    except ValueError as error:
        print(f"Invalid argument: {error}", file=sys.stderr)
        return 2

    results = [
        probe(relay_url, target_url, target_path, args.auth, args.user_agent, args.timeout)
        for target_url, target_path in targets
    ]

    if args.json:
        print(json.dumps({"relay": relay_url, "results": results}, indent=2))
        return 0 if any(r.get("family") in {"ipv4", "ipv6"} for r in results) else 1

    print(f"Relay URL: {relay_url}")
    print()
    return report_text(results)


if __name__ == "__main__":
    raise SystemExit(main())
