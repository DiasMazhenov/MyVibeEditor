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

rg -q "MyVibeHTML v0\.84" myvibehtml.php myvibehtml.js myvibehtml-fallback.css myvibehtml-shell-controls.js myvibehtml-transport.js myvibehtml-auth.js
rg -q "const VERSION = '0\.84'" myvibehtml.php
rg -q "data-dashboard-url=\"\{admin_url\}\"|myvibehtml-admin\.css|myvibehtml-admin\.js" myvibehtml.php
rg -q "private function isAdminRequest|private function renderAdminDashboard" myvibehtml.php
rg -q 'id="myvibehtml-admin-link" data-dashboard data-dashboard-url="\{admin_url\}"|data-admin-section="pages"|data-admin-section="media"|data-admin-section="browser"' myvibehtml.php
rg -q "private function dispatchAdminRequest|admin_action|collectAdminBrowserEntries|issueAdminToken" myvibehtml.php
rg -q "data-admin-upload-submit|operate\('duplicate'|operate\('delete'|data-admin-paste|data-admin-pages-paste|pageState" myvibehtml-admin.js myvibehtml.php
rg -q "data-admin-pages-list|data-admin-pages-up|data-admin-page-select|renderAdminPagesBrowser|myvibehtml-admin-folder-icon" myvibehtml.php
rg -q "dataTransfer\.files|dragover|myvibehtml-admin-action-icon" myvibehtml-admin.js
rg -q 'target = \$name \? \$this->getSafeSitePath' myvibehtml.php
test -s demo-about.html
test -s demo-contact.html
rg -q "auth_redirect" myvibehtml.php
rg -q '<strong>MyVibeHTML <em>v\{version\}</em>' myvibehtml.php
rg -q 'myvibehtml-panel-brand h1 span\{display:inline\}' myvibehtml-theme.css myvibehtml-fallback.css
rg -q '<html id="[a-d]" lang="\{language\}"|<iframe title="\{title\}"' myvibehtml.php
rg -q "myvibehtml-ui-contracts\.js|MyVibeHTMLUIContracts" myvibehtml.php myvibehtml.js myvibehtml-ui-contracts.js
rg -q "myvibehtml-shell-controls\.js" myvibehtml.php myvibehtml-shell-controls.js
rg -q "myvibehtml-transport\.js.*myvibehtml\.js.*myvibehtml-shell-controls\.js" myvibehtml.php
rg -q "myvibehtml-auth\.js" myvibehtml.php
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
rg -q "setCspMode\('enforce'\)|setCspMode\(getenv\('MYVIBEHTML_CSP_VISUAL_ENFORCE'\)" myvibehtml.php
rg -q 'Content-Security-Policy-Report-Only:|Content-Security-Policy:' myvibehtml.php
rg -q 'report-uri \?csp-report=1|myvibehtml_record_csp_report' myvibehtml.php myvibehtml-runtime.php
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
rg -q "grid-template-columns:repeat\(2,minmax\(0,1fr\)\)|form>fieldset:first-of-type" myvibehtml-theme.css myvibehtml-fallback.css
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
rg -q "data-myvibehtml-markup-property|syncMarkupSource|markupInspectorLegend" myvibehtml.js myvibehtml.php
if rg -n "property: '(role|aria-label|aria-hidden)', label: 'ARIA" myvibehtml.js || rg -n "HTML / ARIA" myvibehtml.js; then
    echo "regression: CSS inspector still exposes ARIA editing fields" >&2
    exit 1
fi
rg -q "writeSourceDraft\(serializedSource\)" myvibehtml.js
rg -q "data-preview-controls|data-preview-size|myvibehtml-preview-size" myvibehtml.php myvibehtml.js myvibehtml-theme.css myvibehtml-fallback.css
if rg -n "data-preview-preset|previewPresets|tablet-landscape|mobile-landscape" myvibehtml.php myvibehtml.js; then
    echo "regression: duplicate preview preset control remains" >&2
    exit 1
fi
rg -q "data-block-library|saveBlockPreset|insertBlockPreset|data-file-action=\"media\"|fileManagerMediaMode" myvibehtml.php myvibehtml.js
rg -q "data-page-validate|validationDialogOpen|validation-clean" myvibehtml.php myvibehtml.js
rg -q "myvibehtml-command-palette|data-preview-size|myvibehtml-mobile-menu-toggle|data-command-palette" myvibehtml-shell-controls.js myvibehtml.php myvibehtml-theme.css myvibehtml-fallback.css
rg -q '#d \[data-preview-controls\]\{display:none!important\}' myvibehtml-theme.css myvibehtml-fallback.css
rg -q 'myvibehtml-panel-brand #myvibehtml-mobile-menu-toggle\{display:grid!important' myvibehtml-theme.css myvibehtml-fallback.css
rg -q "isValidStyleValue|syncStyleSource|getMediaTarget|sanitizeInlineSvg|normalizeStyleColor|inputType: 'number'|inputType: 'color'" myvibehtml.js
rg -q "data-myvibehtml-preview" myvibehtml.php myvibehtml-source-map.js
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
node --check myvibehtml-auth.js
node --check myvibehtml.js
node --check myvibehtml-shell-controls.js
node --check myvibehtml-ui-contracts.js
node --test tests/source-map.test.js
node --test tests/security-regression.test.js
node --test tests/deobfuscation.test.js
node --test tests/accessibility.test.js
node --test tests/ui-contracts.test.js
node --test tests/module-boundaries.test.js
sh security-smoke.sh >/dev/null

curl -fsS "$BASE_URL/myvibehtml.js?v=0.84" >/dev/null
curl -fsS "$BASE_URL/myvibehtml-source-map.js?v=0.84" >/dev/null
curl -fsS "$BASE_URL/myvibehtml-ui-contracts.js?v=0.84" >/dev/null
curl -fsS "$BASE_URL/myvibehtml-transport.js?v=0.84" >/dev/null
curl -fsS "$BASE_URL/myvibehtml-auth.js?v=0.84" >/dev/null
curl -fsS "$BASE_URL/myvibehtml-shell-controls.js?v=0.84" >/dev/null
curl -fsS "$BASE_URL/myvibehtml-admin.css?v=0.84" >/dev/null
curl -fsS "$BASE_URL/myvibehtml-admin.js?v=0.84" >/dev/null
curl -fsS "$BASE_URL/myvibehtml.css?v=0.84" >/dev/null
curl -fsS "$BASE_URL/myvibehtml-theme.css?v=0.84" >/dev/null
curl -fsS "$BASE_URL/myvibehtml-fallback.css?v=0.84" >/dev/null
curl -fsS "$BASE_URL/test-page.html" >/dev/null
expect_status 200 "$BASE_URL/test-page.html"
expect_status 403 "$BASE_URL/myvibehtml.php"
expect_status 403 "$BASE_URL/?q=test-page.html&rev=0.84"
expect_status 403 "$BASE_URL/myvibe/backup/26.08.19.14.43/source.php"
curl -sS -D "$TMP_DIR/auth-headers" -o "$TMP_DIR/auth-body" "$BASE_URL/?q=test-page.html&rev=0.84"
grep -Eiq '^Content-Security-Policy:.*script-src' "$TMP_DIR/auth-headers"
grep -Eiq 'report-uri \?csp-report=1' "$TMP_DIR/auth-headers"
report_status="$(curl -sS -o /dev/null -w '%{http_code}' -X POST -H 'Content-Type: application/reports+json' --data '{"csp-report":{"violated-directive":"script-src"}}' "$BASE_URL/?csp-report=1")"
[ "$report_status" = "204" ] || { echo "regression: CSP report endpoint returned $report_status" >&2; exit 1; }
for icon in device-desktop device-tablet device-mobile layout-grid map-2; do
    test -s "myvibehtml-icons/$icon.svg"
done
rg -q 'myvibehtml-icon-desktop|myvibehtml-icon-tablet|myvibehtml-icon-mobile|myvibehtml-icon-blocks|myvibehtml-icon-map' myvibehtml-fallback.css myvibehtml.php
rg -q 'data-preview-label|data-block-label|title="\{preview_desktop\}"' myvibehtml.php
if rg -q 'DOCUMENT_ROOT' "$TMP_DIR/body"; then
    echo "regression: unauthenticated response leaks DOCUMENT_ROOT" >&2
    exit 1
fi

echo "regression: PASS ($BASE_URL)"
