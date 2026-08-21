const assert = require('node:assert/strict');
const fs = require('node:fs');
const test = require('node:test');
const vm = require('node:vm');

const source = fs.readFileSync('myvibehtml-ui-contracts.js', 'utf8');

test('UI contract module exposes a cryptographic-length token', () => {
    const context = { Uint8Array, window: { crypto: { getRandomValues(bytes) { bytes.fill(171); return bytes; } }, setTimeout, clearTimeout, document: { documentElement: { lang: 'ru' }, body: { appendChild() {} }, getElementById() { return null; }, createElement() { return {setAttribute() {}, appendChild() {}, hidden: false}; } } } };
    vm.runInNewContext(source, context);
    const token = context.window.MyVibeHTMLUIContracts.generateToken();
    assert.equal(token.length, 64);
    assert.match(token, /^[a-f0-9]{64}$/);
});

test('UI contracts report storage failures and expose a shared focus trap', () => {
    const context = { Uint8Array, window: { crypto: { getRandomValues(bytes) { bytes.fill(171); return bytes; } }, setTimeout, clearTimeout, document: { documentElement: { lang: 'ru' }, body: { appendChild() {} }, getElementById() { return null; }, createElement() { return {setAttribute() {}, appendChild() {}, hidden: false}; } } } };
    vm.runInNewContext(source, context);
    const contracts = context.window.MyVibeHTMLUIContracts;
    const storage = {getItem() { throw new Error('blocked') }, setItem() { throw new Error('quota') }, removeItem() { throw new Error('blocked') }};
    assert.equal(contracts.storageGet({localStorage:storage}, 'localStorage', 'draft'), null);
    assert.equal(contracts.storageSet({localStorage:storage}, 'localStorage', 'draft', 'x'), false);
    assert.equal(contracts.storageRemove({localStorage:storage}, 'localStorage', 'draft'), false);
    assert.equal(typeof contracts.focusTrap, 'function');
});
