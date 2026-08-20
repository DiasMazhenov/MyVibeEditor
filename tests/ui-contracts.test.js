const assert = require('node:assert/strict');
const fs = require('node:fs');
const test = require('node:test');
const vm = require('node:vm');

const source = fs.readFileSync('myvibehtml-ui-contracts.js', 'utf8');

test('UI contract module exposes a cryptographic-length token', () => {
    const context = { Uint8Array, window: { crypto: { getRandomValues(bytes) { bytes.fill(171); return bytes; } } } };
    vm.runInNewContext(source, context);
    const token = context.window.MyVibeHTMLUIContracts.generateToken();
    assert.equal(token.length, 64);
    assert.match(token, /^[a-f0-9]{64}$/);
});
