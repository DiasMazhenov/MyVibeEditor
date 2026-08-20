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

rg -q "MyVibeHTML v0\.54" myvibehtml.php myvibehtml.js myvibehtml-fallback.css myvibehtml-shell-controls.js myvibehtml-transport.js
rg -q "const VERSION = '0\.54'" myvibehtml.php
rg -q '<strong>MyVibeHTML <em>v\{version\}</em>' myvibehtml.php
rg -q 'myvibehtml-panel-brand h1 span\{display:inline\}' myvibehtml-theme.css myvibehtml-fallback.css
rg -q '<html id="[a-d]" lang="\{language\}"|<iframe title="\{title\}"' myvibehtml.php
rg -q "myvibehtml-ui-contracts\.js|MyVibeHTMLUIContracts" myvibehtml.php myvibehtml.js myvibehtml-ui-contracts.js
rg -q "myvibehtml-shell-controls\.js" myvibehtml.php myvibehtml-shell-controls.js
rg -q "myvibehtml-transport\.js.*myvibehtml\.js.*myvibehtml-shell-controls\.js" myvibehtml.php
rg -q "data-file-action=\"new-file\"|data-file-action=\"new-folder\"" myvibehtml.php
rg -q "renderFileSearchResults|normalizeManagerName" myvibehtml.php
rg -q "content_search|renderContentSearchResults|collectContentSearch|data-file-action=\"content\"" myvibehtml.php myvibehtml.js lang.ini
rg -q "content_replace_preview|content_replace_apply|content_replace_rollback|applyContentReplacement|rollbackContentReplacement|snapshot=" myvibehtml.php myvibehtml.js
rg -q "replaceStructuralTag|insertStructuralNode|structuralTagOptions|data-context-add-child" myvibehtml.php myvibehtml.js
if rg -n -F "return 'replace:preview\\nsnapshot=" myvibehtml.php || rg -n -F "'body' => 'replace:applied\\nid=" myvibehtml.php; then
    echo "regression: replacement protocol contains literal backslash-n separators" >&2
    exit 1
fi
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
rg -q "styleInspectorResizeHandle|startStyleInspectorResize|setStyleInspectorWidth" myvibehtml.js
rg -q "myvibehtml-style-inspector-resize|right:0;bottom:0;left:auto" myvibehtml.js myvibehtml-theme.css myvibehtml-fallback.css
rg -q "role.*separator|aria-orientation.*vertical" myvibehtml.js
rg -q '#myvibehtml-style-inspector\{top:auto.*width:auto!important' myvibehtml-theme.css myvibehtml-fallback.css
rg -q "visualEditorSelection|renderStyleInspector\(this\.d\)" myvibehtml.js
rg -q "grid-template-columns:repeat\(auto-fit,minmax\(280px,1fr\)\)|form>fieldset:first-of-type" myvibehtml-theme.css myvibehtml-fallback.css
rg -q "max-height:min\(60vh,560px\)|overflow-y:auto|scrollbar-gutter:stable" myvibehtml-theme.css myvibehtml-fallback.css
rg -q '#myvibehtml-style-inspector\{.*overflow-x:hidden;overflow-y:auto' myvibehtml-theme.css myvibehtml-fallback.css
rg -q '#myvibehtml-style-inspector form\{.*overflow:visible' myvibehtml-theme.css myvibehtml-fallback.css
if rg -n '#myvibehtml-style-inspector\{display:flex|#myvibehtml-style-inspector\{[^}]*flex-direction' myvibehtml-theme.css myvibehtml-fallback.css; then
    echo "regression: CSS inspector can shrink fieldsets as a flex container" >&2
    exit 1
fi
if rg -n '#myvibehtml-style-inspector form\{.*overflow-y:auto' myvibehtml-theme.css myvibehtml-fallback.css; then
    echo "regression: CSS inspector still has a nested scroll container" >&2
    exit 1
fi
if rg -n '#myvibehtml-style-inspector form\{.*min-width:max-content' myvibehtml-theme.css myvibehtml-fallback.css; then
    echo "regression: CSS inspector can force horizontal overflow" >&2
    exit 1
fi
rg -q "data-myvibehtml-markup-property|syncMarkupSource|HTML / ARIA" myvibehtml.js myvibehtml.php
rg -q "data-preview-controls|data-preview-size|myvibehtml-preview-size" myvibehtml.php myvibehtml.js myvibehtml-theme.css myvibehtml-fallback.css
rg -q "data-block-library|saveBlockPreset|insertBlockPreset|data-file-action=\"media\"|fileManagerMediaMode" myvibehtml.php myvibehtml.js
rg -q "data-page-validate|validationDialogOpen|validation-clean" myvibehtml.php myvibehtml.js
rg -q "myvibehtml-command-palette|data-preview-size|myvibehtml-mobile-menu-toggle|data-command-palette" myvibehtml-shell-controls.js myvibehtml.php myvibehtml-theme.css myvibehtml-fallback.css
rg -q "isValidStyleValue|syncStyleSource|getMediaTarget|sanitizeInlineSvg" myvibehtml.js
if rg -n 'checkForUpdates|handleUpdateResult|installUpdate|checkInstallation|SETTING_UPDATE|textolite' myvibehtml.php myvibehtml.js; then
    echo "regression: removed update/legacy alias code is still present" >&2
    exit 1
fi
rg -q "position:fixed;top:0;right:0;bottom:0;left:auto" myvibehtml-theme.css myvibehtml-fallback.css
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
node --check myvibehtml-transport.js
node --check myvibehtml.js
node --check myvibehtml-shell-controls.js
node --check myvibehtml-ui-contracts.js
node --test tests/source-map.test.js
node --test tests/deobfuscation.test.js
node --test tests/accessibility.test.js
node --test tests/ui-contracts.test.js
sh security-smoke.sh >/dev/null

curl -fsS "$BASE_URL/myvibehtml.js?v=0.54" >/dev/null
curl -fsS "$BASE_URL/myvibehtml-source-map.js?v=0.54" >/dev/null
curl -fsS "$BASE_URL/myvibehtml-ui-contracts.js?v=0.54" >/dev/null
curl -fsS "$BASE_URL/myvibehtml-transport.js?v=0.54" >/dev/null
curl -fsS "$BASE_URL/myvibehtml-shell-controls.js?v=0.54" >/dev/null
curl -fsS "$BASE_URL/myvibehtml.css?v=0.54" >/dev/null
curl -fsS "$BASE_URL/myvibehtml-theme.css?v=0.54" >/dev/null
curl -fsS "$BASE_URL/myvibehtml-fallback.css?v=0.54" >/dev/null
curl -fsS "$BASE_URL/test-page.html" >/dev/null
expect_status 200 "$BASE_URL/test-page.html"
expect_status 403 "$BASE_URL/myvibehtml.php"
expect_status 403 "$BASE_URL/?q=test-page.html&rev=0.54"
expect_status 403 "$BASE_URL/myvibe/backup/26.08.19.14.43/source.php"
for icon in device-desktop device-tablet device-mobile layout-grid; do
    test -s "myvibehtml-icons/$icon.svg"
done
rg -q 'myvibehtml-icon-desktop|myvibehtml-icon-tablet|myvibehtml-icon-mobile|myvibehtml-icon-blocks' myvibehtml-fallback.css myvibehtml.php
rg -q 'data-preview-label|data-block-label|title="\{preview_desktop\}"' myvibehtml.php
if rg -q 'DOCUMENT_ROOT' "$TMP_DIR/body"; then
    echo "regression: unauthenticated response leaks DOCUMENT_ROOT" >&2
    exit 1
fi

echo "regression: PASS ($BASE_URL)"
