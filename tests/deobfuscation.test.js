const assert = require('node:assert/strict');
const fs = require('node:fs');
const test = require('node:test');

const php = fs.readFileSync('myvibehtml.php', 'utf8');
const js = fs.readFileSync('myvibehtml.js', 'utf8');

test('semantic runtime names replace generated local prefixes', () => {
    assert.doesNotMatch(php, /\$[A-Za-z_][A-Za-z0-9_]*Value\d+/);
    assert.doesNotMatch(js, /\b(?:callbackValue|callbackArgument|initializeVisualEditorValue|initializeSettingsValue|submitSettingsValue)\d+\b/);
    assert.match(php, /function myvibehtml_runtime_directory/);
    assert.match(php, /function myvibehtml_atomic_write/);
    assert.match(js, /function base64UrlEncode|base64UrlEncode\s*=/);
});

test('removed update and compatibility code stays absent', () => {
    assert.doesNotMatch(php + js, /checkForUpdates|handleUpdateResult|installUpdate|checkInstallation|textolite/);
});
