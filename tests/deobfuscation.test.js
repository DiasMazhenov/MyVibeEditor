const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const test = require('node:test');

const php = fs.readFileSync('myvibehtml.php', 'utf8');
const runtime = fs.readFileSync('myvibehtml-runtime.php', 'utf8');
const js = fs.readFileSync('myvibehtml.js', 'utf8');
const transport = fs.readFileSync('myvibehtml-transport.js', 'utf8');
const auth = fs.readFileSync('myvibehtml-auth.js', 'utf8');

test('semantic runtime names replace generated local prefixes', () => {
    assert.doesNotMatch(php + runtime, /\$[A-Za-z_][A-Za-z0-9_]*Value\d+/);
    assert.doesNotMatch(js, /\b(?:callbackValue|callbackArgument|initializeVisualEditorValue|initializeSettingsValue|submitSettingsValue)\d+\b/);
    assert.match(runtime, /function myvibehtml_runtime_directory/);
    assert.match(runtime, /function myvibehtml_atomic_write/);
    assert.match(transport, /function base64UrlEncode/);
    assert.doesNotMatch(js, /function (?:sha1|base64Decode|ajaxRequest)|base64UrlEncode\s*=\s*function/);
    assert.match(js, /animateValue\s*=|fadeIn\s*=/);
    assert.match(auth, /function bootAuthentication/);
    assert.match(auth, /function submitLogin/);
    assert.doesNotMatch(auth, /\b(?:callbackValue|callbackArgument)\d+\b/);
    assert.match(php, /myvibehtml-auth\.js/);
});

test('transport keeps legacy hash and encoding contracts', () => {
    const context = {
        document: {cookie: ''},
        location: {href: '/editor'},
        setTimeout,
        clearTimeout,
        XMLHttpRequest: function() {},
        btoa: value => Buffer.from(value, 'latin1').toString('base64'),
        atob: value => Buffer.from(value, 'base64').toString('latin1')
    };
    context.window = context;
    vm.runInNewContext(transport, context);
    const api = context.MyVibeHTMLTransport;
    assert.equal(api.sha1('abc'), 'a9993e364706816aba3e25717850c26c9cd0d89d');
    assert.equal(api.base64UrlEncode('Привет'), '0J_RgNC40LLQtdGC');
    assert.equal(api.base64Decode('0J_RgNC40LLQtdGC'), 'Привет');
});

test('removed update and compatibility code stays absent', () => {
    assert.doesNotMatch(php + runtime + js, /checkForUpdates|handleUpdateResult|installUpdate|checkInstallation|textolite/);
});
