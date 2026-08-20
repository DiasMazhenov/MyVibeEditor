const assert = require('node:assert/strict');
const fs = require('node:fs');
const test = require('node:test');

const php = fs.readFileSync('myvibehtml.php', 'utf8');
const editor = fs.readFileSync('myvibehtml.js', 'utf8');
const auth = fs.readFileSync('myvibehtml-auth.js', 'utf8');
const shell = fs.readFileSync('myvibehtml-shell-controls.js', 'utf8');

test('PHP keeps disjoint auth and editor script chains', () => {
    const authBaseLine = php.split('\n').find(line => line.includes("$this->templates['a']") && line.includes('myvibehtml-ui-contracts.js')) || '';
    const authSwapLine = php.split('\n').find(line => line.includes("$this->templates['a']") && line.includes('myvibehtml-auth.js')) || '';
    const editorLoaderLine = php.split('\n').find(line => line.includes('myvibehtml-shell-controls.js')) || '';
    const authChain = authBaseLine.match(/myvibehtml-ui-contracts\.js\?v=\{version\}.*?myvibehtml-transport\.js\?v=\{version\}.*?myvibehtml\.js\?v=\{version\}/);
    const authSwap = authSwapLine.match(/myvibehtml\.js\?v=\{version\}.*?myvibehtml-auth\.js\?v=\{version\}/);
    const editorChain = editorLoaderLine.match(/myvibehtml-source-map\.js\?v=\{version\}.*?myvibehtml-ui-contracts\.js\?v=\{version\}.*?myvibehtml-transport\.js\?v=\{version\}.*?myvibehtml\.js\?v=\{version\}.*?myvibehtml-shell-controls\.js\?v=\{version\}/);
    assert.ok(authChain, 'auth chain must load contracts, transport and auth only');
    assert.ok(authSwap, 'auth template must replace editor script with auth script');
    assert.ok(editorChain, 'editor chain must load source-map, contracts, transport, editor and shell');
    assert.doesNotMatch(authSwap[0], /myvibehtml-shell-controls/);
});

test('auth, editor and shell modules keep their public seams', () => {
    assert.match(auth, /querySelector\('#a'\)/);
    assert.match(auth, /MyVibeHTMLTransport/);
    assert.doesNotMatch(auth, /myvibehtml\.js|#e|data-preview-controls/);
    assert.doesNotMatch(editor, /bootAuthentication|submitLogin|querySelectorMethod\]\('\#a'\)/);
    assert.match(editor, /MyVibeHTMLTransport/);
    assert.match(shell, /querySelector\('#e'\)/);
    assert.match(shell, /myvibehtml-mobile-menu-toggle/);
    assert.match(shell, /data-preview-size/);
});
