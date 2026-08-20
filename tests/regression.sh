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

rg -q "MyVibeHTML v0\.36" myvibehtml.php myvibehtml.js myvibehtml-fallback.css
rg -q "const VERSION = '0\.36'" myvibehtml.php
rg -q "data-file-action=\"new-file\"|data-file-action=\"new-folder\"" myvibehtml.php
rg -q "renderFileSearchResults|normalizeManagerName" myvibehtml.php
rg -q "fileManagerCreate|searchProject|renameFile" myvibehtml.js
rg -q "data-source-action=\"redo\"" myvibehtml.php
rg -q "myvibehtml:draft" myvibehtml.js
rg -q "sourceHistoryUndo" myvibehtml.js
rg -q "version_compare\(PHP_VERSION, '7\.4'" myvibehtml.php
rg -q "myvibehtml-runtime\.php" myvibehtml.php
rg -q 'MyVibeHTMLSourceMap|restoreBackupDirectory' myvibehtml.php myvibehtml.js myvibehtml-source-map.js
rg -q 'password_hash|password_verify|random_bytes|hash_equals' myvibehtml.php
rg -q 'function commit|encodeIniValue|config-state.lock|restoreBackupDirectory' myvibehtml.php
if rg -n 'hashPassword|hashSettingsPassword|sha1\(time\(\)|mt_rand\(\)' myvibehtml.php myvibehtml.js; then
    echo "regression: legacy password/session generation is still active" >&2
    exit 1
fi
rg -q 'data-encoding="base64"' myvibehtml.php myvibehtml.js
if rg -n 'str_replace\(SCRIPT_TAG|str_replace\(CLOSING_SCRIPT_TAG' myvibehtml.php; then
    echo "regression: raw script-tag placeholder escaping is still active" >&2
    exit 1
fi
rg -Fq "return \$this->state['f'] ? \$this->state['f'] . 'backup/' : false" myvibehtml.php
rg -q "location ~\* /backup" nginx.conf.example
rg -q "myvibehtml-style-inspector" myvibehtml.js myvibehtml-theme.css myvibehtml-fallback.css
rg -q "data-myvibehtml-markup-property|syncMarkupSource|HTML / ARIA" myvibehtml.js myvibehtml.php
rg -q "data-preview-controls|data-preview-size|myvibehtml-preview-size" myvibehtml.php myvibehtml.js myvibehtml-theme.css myvibehtml-fallback.css
rg -q "data-block-library|saveBlockPreset|insertBlockPreset|data-file-action=\"media\"|fileManagerMediaMode" myvibehtml.php myvibehtml.js
rg -q "data-page-validate|validationDialogOpen|validation-clean" myvibehtml.php myvibehtml.js
rg -q "isValidStyleValue|syncStyleSource|getMediaTarget|sanitizeInlineSvg" myvibehtml.js
if rg -n 'checkForUpdates|handleUpdateResult|installUpdate|checkInstallation|SETTING_UPDATE|textolite' myvibehtml.php myvibehtml.js; then
    echo "regression: removed update/legacy alias code is still present" >&2
    exit 1
fi
rg -q "position:fixed;right:0;bottom:0;left:0" myvibehtml-theme.css myvibehtml-fallback.css
rg -q "documentObject\.body\[appendChildMethod\]\(styleInspector\)" myvibehtml.js
rg -q "visualEditorValue45 - 1" myvibehtml.js
rg -q "REQUEST_DOCUMENT_ROOT => 'filterDocumentRoot'" myvibehtml.php
if rg -n 'callbackValue(9|165|236)\[innerHTMLProperty\]' myvibehtml.js; then
    echo "regression: unsafe status sink found" >&2
    exit 1
fi

php -l myvibehtml-runtime.php >/dev/null
php -l myvibehtml.php >/dev/null
php -l dev-router.php >/dev/null
node --check myvibehtml.js
node --test tests/source-map.test.js
node --test tests/deobfuscation.test.js
node --test tests/accessibility.test.js
sh security-smoke.sh >/dev/null

curl -fsS "$BASE_URL/myvibehtml.js?v=0.36" >/dev/null
curl -fsS "$BASE_URL/myvibehtml-source-map.js?v=0.36" >/dev/null
curl -fsS "$BASE_URL/myvibehtml.css?v=0.36" >/dev/null
curl -fsS "$BASE_URL/test-page.html" >/dev/null
expect_status 200 "$BASE_URL/test-page.html"
expect_status 403 "$BASE_URL/myvibehtml.php"
expect_status 403 "$BASE_URL/?q=test-page.html&rev=0.36"
expect_status 403 "$BASE_URL/myvibe/backup/26.08.19.14.43/source.php"
if rg -q 'DOCUMENT_ROOT' "$TMP_DIR/body"; then
    echo "regression: unauthenticated response leaks DOCUMENT_ROOT" >&2
    exit 1
fi

echo "regression: PASS ($BASE_URL)"
