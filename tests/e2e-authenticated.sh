#!/bin/sh
set -eu

if [ -z "${MYVIBEHTML_E2E_URL:-}" ] || [ -z "${MYVIBEHTML_E2E_COOKIE:-}" ]; then
    echo "authenticated-e2e: SKIP (set MYVIBEHTML_E2E_URL and MYVIBEHTML_E2E_COOKIE)"
    exit 0
fi

body_file="$(mktemp "${TMPDIR:-/tmp}/myvibe-e2e.XXXXXX")"
trap 'rm -f "$body_file"' EXIT INT TERM
version="${MYVIBEHTML_E2E_VERSION:-0.66}"
status="$(curl -sS -o "$body_file" -w '%{http_code}' -H "Cookie: ${MYVIBEHTML_E2E_COOKIE}" "$MYVIBEHTML_E2E_URL")"
[ "$status" -ge 200 ] && [ "$status" -lt 300 ] || {
    echo "authenticated-e2e: expected 2xx, got $status" >&2
    exit 1
}
rg -q "MyVibeHTML|myvibehtml\\.js\\?v=${version}|myvibehtml-source-map\\.js\\?v=${version}|myvibehtml-ui-contracts\\.js\\?v=${version}|myvibehtml-transport\\.js\\?v=${version}|myvibehtml-shell-controls\\.js\\?v=${version}" "$body_file"
rg -q 'data-context-add-child|data-preview-controls|data-page-validate|data-command-palette|myvibehtml-mobile-menu-toggle|myvibehtml-mobile-menu' "$body_file"
if rg -q 'myvibehtml-auth\.js|DOCUMENT_ROOT|textolite\.ru|ERR_TOO_MANY_REDIRECTS' "$body_file"; then
    echo "authenticated-e2e: auth-only or unsafe/error marker found in editor response" >&2
    exit 1
fi
echo "authenticated-e2e: PASS ($MYVIBEHTML_E2E_URL, v${version})"
