const assert = require('node:assert/strict');
const fs = require('node:fs');
const test = require('node:test');

const php = fs.readFileSync('myvibehtml.php', 'utf8');
const editor = fs.readFileSync('myvibehtml.js', 'utf8');
const shell = fs.readFileSync('myvibehtml-shell-controls.js', 'utf8');
const theme = fs.readFileSync('myvibehtml-theme.css', 'utf8');
const fallback = fs.readFileSync('myvibehtml-fallback.css', 'utf8');
const adminCss = fs.readFileSync('myvibehtml-admin.css', 'utf8');
const adminJs = fs.readFileSync('myvibehtml-admin.js', 'utf8');

test('Time Machine keeps one persistent timeline for visual and source drafts', () => {
    assert.match(editor, /editorTimelineKey = 'myvibehtml:timeline:/);
    assert.match(editor, /recordEditorTimeline = function/);
    assert.match(editor, /writeSourceDraft = function/);
    assert.match(editor, /recordEditorTimeline\(sourceDraftValue\)/);
    assert.match(editor, /sourceHistoryOpenTimeline = function/);
    assert.match(editor, /data-timeline-list/);
    assert.match(php, /data-source-action="timeline"/);
    assert.match(php, /\{time_machine\}/);
});

test('source editor renders decoded HTML instead of the Base64 template payload', () => {
    assert.match(editor, /serializedSource = runtimeValue11\[getAttributeMethod\]\('data-encoding'\) == 'base64' \? base64Decode\(runtimeValue11\[textContentProperty\]\) : runtimeValue11\[innerHTMLProperty\]/);
    assert.match(editor, /runtimeSourceLanguage = runtimeValue2\[getAttributeMethod\]\('data-source-type'\) \|\| runtimeValue2\[innerHTMLProperty\]/);
    assert.match(php, /<li title="\{visual_editor\}" data-source-type="\{type\}">visual<\/li><li title="\{source_editor\}">html<\/li>/);
    const decodedSourceRender = 'runtimeValue131[innerHTMLProperty] = runtimeValue150(runtimeValue138(runtimeValue137(runtimeValue138(serializedSource))));';
    const encodedSourceRender = 'runtimeValue131[innerHTMLProperty] = runtimeValue150(runtimeValue138(runtimeValue137(runtimeValue138(runtimeValue11[innerHTMLProperty]))));';
    assert.ok(editor.includes(decodedSourceRender));
    assert.ok(!editor.includes(encodedSourceRender));
});

test('mobile navigation exposes the burger and clear editor mode labels', () => {
    assert.match(php, /<li title="\{visual_editor\}" data-source-type="\{type\}">visual<\/li><li title="\{source_editor\}">html<\/li>/);
    assert.match(php, /data-mobile-target="div>div\+ol li:first-child">visual<\/button><button type="button" role="menuitem" data-mobile-target="div>div\+ol li\+li">html<\/button>/);
    assert.match(php, /id="myvibehtml-mobile-menu-toggle"/);
    assert.match(php, /<\/div><button id="myvibehtml-mobile-menu-toggle" type="button"/);
    assert.match(fallback, /@media\(max-width:900px\)\{#e #myvibehtml-mobile-menu-toggle\{display:grid!important/);
    assert.match(fallback, /#d\[data-myvibehtml-preview-size="mobile"\] #e #myvibehtml-mobile-menu-toggle\{display:grid!important/);
    assert.match(shell, /data-myvibehtml-mobile-shell/);
    assert.match(shell, /if \(menuToggle && menu\) \{[\s\S]*menuToggle\.addEventListener\('click'/);
    assert.match(fallback, /#e\[data-myvibehtml-mobile-shell="true"\].*#myvibehtml-mobile-menu-toggle\{display:grid!important/);
});

test('Reusable Components extend the existing local block library', () => {
    assert.match(editor, /type:'component'/);
    assert.match(editor, /updateBlockPreset = function/);
    assert.match(editor, /componentLinkAttribute = 'data-myvibe-component-id'/);
    assert.match(editor, /insertBlockPreset\(this\.blockIndex, true\)/);
    assert.match(editor, /syncAllLinkedComponentInstances = function/);
    assert.match(editor, /setAttributeMethod\]\('data-cu', '1'\)/);
    assert.match(editor, /addEventListenerMethod\]\('storage'/);
    assert.match(editor, /data-block-library-list/);
    assert.match(editor, /Update component|Обновить компонент/);
    assert.match(editor, /sanitizeBlockMarkup\(blockTarget\[outerHTMLProperty\]\)/);
    assert.match(php, /data-block-label="\{components\}"/);
});

test('Design Tokens are editable through the CSS inspector and source', () => {
    assert.match(editor, /getDesignTokenNames = function/);
    assert.match(editor, /syncDesignTokenSource = function/);
    assert.match(editor, /data-myvibehtml-token-name/);
    assert.match(editor, /data-myvibehtml-token-apply/);
    assert.match(editor, /runtimeValue127\.documentElement\[styleProperty\]\.setProperty/);
    assert.match(editor, /:root\\s\*\\\{/);
});

test('Page navigation and Responsive Preview Studio reuse shell controls', () => {
    assert.match(shell, /data-site-map/);
    assert.match(shell, /siteMapButton/);
    assert.match(shell, /new URL\(href, window\.location\.href\)/);
    assert.doesNotMatch(shell, /data-preview-preset|tablet-landscape|mobile-landscape/);
    assert.match(shell, /previewStorageKey/);
    assert.match(shell, /storageSet\(window, 'localStorage', previewStorageKey/);
    assert.match(shell, /focusTrap/);
    assert.match(php, /data-site-map/);
    assert.match(php, /myvibehtml-icon-map/);
    assert.doesNotMatch(php, /data-preview-preset|preview_presets|preview_tablet_landscape/);
});

test('Project dashboard is a protected standalone page with responsive navigation', () => {
    assert.match(php, /data-dashboard-url="\{admin_url\}"/);
    assert.match(php, /private function isAdminRequest\(\)/);
    assert.match(php, /private function renderAdminDashboard\(\)/);
    assert.match(php, /<html id="myvibehtml-admin"/);
    assert.match(php, /id="myvibehtml-admin-sidebar"/);
    assert.match(shell, /getAttribute\('data-dashboard-url'\)/);
    assert.match(shell, /window\.location\.href = target/);
    assert.doesNotMatch(shell, /myvibehtml-dashboard/);
    assert.doesNotMatch(fallback, /#myvibehtml-dashboard/);
    assert.match(adminCss, /\.myvibehtml-admin-shell/);
    assert.match(adminCss, /@media \(max-width: 900px\)/);
    assert.match(adminJs, /data-admin-file-search/);
    assert.match(adminJs, /data-admin-sidebar-open/);
    assert.match(adminJs, /location\.hash/);
});

test('Admin content workspace exposes pages, media previews and guarded file operations', () => {
    assert.match(php, /id="myvibehtml-admin-link" data-dashboard data-dashboard-url="\{admin_url\}"/);
    assert.match(php, /data-admin-section="pages"/);
    assert.match(php, /data-admin-pages-list/);
    assert.match(php, /data-admin-pages-up/);
    assert.match(php, /data-admin-page-select/);
    assert.match(php, /renderAdminPagesBrowser/);
    assert.match(php, /data-admin-section="media"/);
    assert.match(php, /data-admin-section="browser"/);
    assert.match(php, /private function dispatchAdminRequest\(\)/);
    assert.match(php, /admin_action/);
    assert.match(php, /collectAdminBrowserEntries/);
    assert.match(adminJs, /data-admin-upload-submit/);
    assert.match(adminJs, /data-admin-browser-duplicate|operate\('duplicate'/);
    assert.match(adminJs, /operate\('rename'/);
    assert.match(adminJs, /data-admin-browser-delete|operate\('delete'/);
    assert.match(adminJs, /pageState/);
    assert.match(adminJs, /data-admin-pages-paste/);
    assert.match(adminJs, /loadListing\(parentPath\(pageState\.path\), 'pages'\)/);
    assert.match(adminJs, /operate\('duplicate', \{source: pageState\.clipboardPath\}/);
    assert.match(php, /preg_match\('\~\^\(\?:avif\|gif\|jpe\?g\|png\|svg\|webp\|ico\|mp4\|webm\|mp3\|wav\)\$\~'/);
    assert.match(adminCss, /myvibehtml-admin-media-grid/);
    assert.match(adminCss, /myvibehtml-admin-page-browser input\[type="checkbox"\]/);
    assert.match(theme, /#a\{display:grid;place-items:center/);
    assert.match(fallback, /#a\{display:grid;place-items:center/);
    assert.equal(fs.existsSync('demo-about.html'), true);
    assert.equal(fs.existsSync('demo-contact.html'), true);
});

test('Successful login leaves the admin URL and opens the editor', () => {
    assert.match(php, /COOKIE_PREFIX \. 'auth_redirect'/);
    assert.match(php, /clearCookie\(COOKIE_PREFIX \. 'auth_redirect'/);
    assert.match(php, /if \(\$this->request->getCookie\(COOKIE_PREFIX \. 'auth_redirect'\) === '1'\)/);
});

test('Page Health adds local SEO, structure and resource checks', () => {
    assert.match(editor, /validationDescription/);
    assert.match(editor, /validationResourceCount/);
    assert.match(editor, /validationScore/);
    assert.match(editor, /validation-missing-lang/);
    assert.match(editor, /validation-h1/);
    assert.match(editor, /validation-accessible-name/);
    assert.match(editor, /validation-form-label/);
    assert.match(editor, /validation-heading-order/);
    assert.match(editor, /validation-aria-labelledby/);
    assert.match(editor, /getElementById\(validationLabelledbyReferences/);
    assert.match(php, /data-validation-description/);
    assert.match(php, /data-validation-accessible-name/);
    assert.match(php, /data-validation-heavy/);
    assert.match(php, /data-validation-score/);
});
