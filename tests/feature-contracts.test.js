const assert = require('node:assert/strict');
const fs = require('node:fs');
const test = require('node:test');

const php = fs.readFileSync('myvibehtml.php', 'utf8');
const editor = fs.readFileSync('myvibehtml.js', 'utf8');
const shell = fs.readFileSync('myvibehtml-shell-controls.js', 'utf8');

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

test('Reusable Components extend the existing local block library', () => {
    assert.match(editor, /type:'component'/);
    assert.match(editor, /updateBlockPreset = function/);
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
    assert.match(shell, /data-preview-preset/);
    assert.match(shell, /tablet-landscape/);
    assert.match(shell, /previewStorageKey/);
    assert.match(shell, /localStorage\.setItem\(previewStorageKey/);
    assert.match(php, /data-site-map/);
    assert.match(php, /preview_tablet_landscape/);
});

test('Page Health adds local SEO, structure and resource checks', () => {
    assert.match(editor, /validationDescription/);
    assert.match(editor, /validationResourceCount/);
    assert.match(editor, /validationScore/);
    assert.match(editor, /validation-missing-lang/);
    assert.match(editor, /validation-h1/);
    assert.match(php, /data-validation-description/);
    assert.match(php, /data-validation-heavy/);
    assert.match(php, /data-validation-score/);
});
