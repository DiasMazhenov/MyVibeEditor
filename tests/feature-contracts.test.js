const assert = require('node:assert/strict');
const fs = require('node:fs');
const test = require('node:test');

const php = fs.readFileSync('myvibehtml.php', 'utf8');
const editor = fs.readFileSync('myvibehtml.js', 'utf8');

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
