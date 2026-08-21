const assert = require('node:assert/strict');
const fs = require('node:fs');
const test = require('node:test');

const read = (file) => fs.readFileSync(file, 'utf8');
const php = read('myvibehtml.php');
const js = read('myvibehtml.js');
const shell = read('myvibehtml-shell-controls.js');
const theme = read('myvibehtml-theme.css');
const fallback = read('myvibehtml-fallback.css');
const snapshot = JSON.parse(read('tests/snapshots/ui-surface.snapshot.json'));

const has = (source, pattern) => pattern.test(source);
const actual = {
    version: (php.match(/const VERSION = '([^']+)'/) || [])[1],
    surfaces: {
        auth: has(php, /id="a"/),
        editor: has(php, /id="e"/),
        visual: has(php, /id="d"/),
        source: has(php, /id="c"/),
        previewControls: has(php, /data-preview-controls/),
        previewSizes: has(php, /data-preview-size="desktop"/) && has(php, /data-preview-size="tablet"/) && has(php, /data-preview-size="mobile"/),
        blockLibrary: has(php, /data-block-library/),
        siteMap: has(php, /data-site-map/),
        mobileMenu: has(php, /id="myvibehtml-mobile-menu-toggle"/) && has(php, /id="myvibehtml-mobile-menu"/),
        pageHealth: has(php, /data-page-validate/) && has(js, /myvibehtml-validation-dialog/),
        styleInspector: has(js, /myvibehtml-style-inspector/),
        commandPalette: has(shell, /myvibehtml-command-palette/),
        timeline: has(js, /myvibehtml-timeline/)
    },
    responsive: {
        mobileBreakpoint: has(theme, /@media\(max-width:900px\)/) && has(fallback, /@media\(max-width:900px\)/),
        narrowBreakpoint: has(theme, /@media\(max-width:700px\)/) && has(fallback, /@media\(max-width:700px\)/),
        mobilePreviewHidden: has(theme, /\[data-preview-controls\]\{display:none!important\}/),
        inspectorSafeArea: has(theme, /safe-area-inset/),
        inspectorSingleScroll: has(theme, /#myvibehtml-style-inspector\{[^}]*overflow-x:hidden;overflow-y:auto/)
    },
    accessibility: {
        focusVisible: has(theme, /:focus-visible/) && has(fallback, /:focus-visible/),
        highContrast: has(theme, /prefers-contrast:more/) && has(fallback, /prefers-contrast:more/),
        nativeButtons: has(php, /<button type="button"/),
        dialogSemantics: has(js, /setAttribute\('role', 'dialog'\)/),
        liveStatus: has(php, /aria-live="polite"/)
    },
    interaction: {
        commandPaletteKeyboard: has(shell, /event\.keyCode == 40/),
        contextMenuKeyboard: has(js, /visibleContextButtons/),
        previewPersistence: has(shell, /previewStorageKey/),
        linkedComponents: has(js, /syncAllLinkedComponentInstances/)
    }
};

test('visual surface contract matches the current UI snapshot', () => {
    assert.deepEqual(actual, snapshot);
});
