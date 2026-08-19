#!/bin/sh
set -eu

cd "$(dirname "$0")/.."

BASE_URL="${MYVIBEHTML_BASE_URL:-http://127.0.0.1:8080}"
TMP_DIR="$(mktemp -d "${TMPDIR:-/tmp}/myvibe-regression.XXXXXX")"
trap 'rm -rf "$TMP_DIR"' EXIT INT TERM

expect_status() {
    expected="$1"
    url="$2"
    actual="$(curl -sS -o "$TMP_DIR/body" -w '%{http_code}' "$url")"
    [ "$actual" = "$expected" ] || {
        echo "regression: expected HTTP $expected, got $actual for $url" >&2
        return 1
    }
}

rg -q "MyVibeHTML v0\.21" myvibehtml.php myvibehtml.js myvibehtml.css myvibehtml-fallback.css
rg -q "const VERSION = '0\.21'" myvibehtml.php
rg -q "myvibehtml-style-inspector" myvibehtml.js myvibehtml-theme.css myvibehtml-fallback.css
rg -q "isValidStyleValue|syncStyleSource" myvibehtml.js
rg -q "documentObject\.body\[appendChildMethod\]\(styleInspector\)" myvibehtml.js
rg -q "initializeVisualEditorValue45 - 1" myvibehtml.js
rg -q "REQUEST_DOCUMENT_ROOT => 'filterDocumentRoot'" myvibehtml.php
if rg -n 'callbackValue(9|165|236)\[innerHTMLProperty\]' myvibehtml.js; then
    echo "regression: unsafe status sink found" >&2
    exit 1
fi

php -l myvibehtml.php >/dev/null
php -l textolite.php >/dev/null
php -l dev-router.php >/dev/null
node --check myvibehtml.js
sh security-smoke.sh >/dev/null

curl -fsS "$BASE_URL/myvibehtml.js?v=0.21" >/dev/null
curl -fsS "$BASE_URL/myvibehtml.css?v=0.21" >/dev/null
curl -fsS "$BASE_URL/test-page.html" >/dev/null
expect_status 200 "$BASE_URL/test-page.html"
expect_status 403 "$BASE_URL/myvibehtml.php"
expect_status 403 "$BASE_URL/?q=test-page.html&rev=0.21"
if rg -q 'DOCUMENT_ROOT' "$TMP_DIR/body"; then
    echo "regression: unauthenticated response leaks DOCUMENT_ROOT" >&2
    exit 1
fi

echo "regression: PASS ($BASE_URL)"
