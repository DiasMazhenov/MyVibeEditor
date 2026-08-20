#!/bin/sh
set -eu

if [ -z "${MYVIBEHTML_E2E_URL:-}" ] || [ -z "${MYVIBEHTML_E2E_COOKIE:-}" ]; then
    echo "authenticated-e2e: SKIP (set MYVIBEHTML_E2E_URL and MYVIBEHTML_E2E_COOKIE)"
    exit 0
fi

body_file="$(mktemp "${TMPDIR:-/tmp}/myvibe-e2e.XXXXXX")"
trap 'rm -f "$body_file"' EXIT INT TERM
status="$(curl -sS -o "$body_file" -w '%{http_code}' -H "Cookie: ${MYVIBEHTML_E2E_COOKIE}" "$MYVIBEHTML_E2E_URL")"
[ "$status" -ge 200 ] && [ "$status" -lt 300 ] || {
    echo "authenticated-e2e: expected 2xx, got $status" >&2
    exit 1
}
rg -q 'MyVibeHTML|myvibehtml\.js|myvibehtml-source-map\.js' "$body_file"
if rg -q 'DOCUMENT_ROOT|textolite\.ru|ERR_TOO_MANY_REDIRECTS' "$body_file"; then
    echo "authenticated-e2e: unsafe/error response detected" >&2
    exit 1
fi
echo "authenticated-e2e: PASS ($MYVIBEHTML_E2E_URL)"
