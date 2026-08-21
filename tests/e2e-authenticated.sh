#!/bin/sh
set -eu

if [ -z "${MYVIBEHTML_E2E_URL:-}" ] || [ -z "${MYVIBEHTML_E2E_COOKIE:-}" ]; then
    if [ "${MYVIBEHTML_E2E_REQUIRE:-0}" = '1' ]; then
        echo "authenticated-e2e: missing MYVIBEHTML_E2E_URL or MYVIBEHTML_E2E_COOKIE" >&2
        exit 1
    fi
    echo "authenticated-e2e: SKIP (set MYVIBEHTML_E2E_URL and MYVIBEHTML_E2E_COOKIE)"
    exit 0
fi

body_file="$(mktemp "${TMPDIR:-/tmp}/myvibe-e2e.XXXXXX")"
save_body_file="$(mktemp "${TMPDIR:-/tmp}/myvibe-e2e-save.XXXXXX")"
trap 'rm -f "$body_file" "$save_body_file"' EXIT INT TERM
version="${MYVIBEHTML_E2E_VERSION:-0.69}"
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
if [ -n "${MYVIBEHTML_E2E_SAVE_CONTENT_B64:-}" ] && [ -n "${MYVIBEHTML_E2E_SAVE_EXPECT:-}" ]; then
    save_token="$(openssl rand -hex 32)"
    save_payload="$(printf '%s' "$MYVIBEHTML_E2E_SAVE_CONTENT_B64" | tr '+/' '-_' | tr -d '=')"
    save_status="$(curl -sS -o "$save_body_file" -w '%{http_code}' -X POST -H 'AJAX: 1' -H "Cookie: ${MYVIBEHTML_E2E_COOKIE}; myvibehtml_token=${save_token}" --data "save=${save_payload}&token=${save_token}" "$MYVIBEHTML_E2E_URL")"
    [ "$save_status" -ge 200 ] && [ "$save_status" -lt 300 ] || {
        echo "authenticated-e2e: save expected 2xx, got $save_status" >&2
        exit 1
    }
    reload_status="$(curl -sS -o "$body_file" -w '%{http_code}' -H "Cookie: ${MYVIBEHTML_E2E_COOKIE}" "$MYVIBEHTML_E2E_URL")"
    [ "$reload_status" -ge 200 ] && [ "$reload_status" -lt 300 ] || {
        echo "authenticated-e2e: reload expected 2xx, got $reload_status" >&2
        exit 1
    }
    rg -Fq "$MYVIBEHTML_E2E_SAVE_EXPECT" "$body_file" || {
        echo "authenticated-e2e: saved marker missing after reload" >&2
        exit 1
    }
    echo "authenticated-e2e: save/reload PASS"
fi
echo "authenticated-e2e: PASS ($MYVIBEHTML_E2E_URL, v${version})"
