const assert = require('node:assert/strict');
const sourceMap = require('../myvibehtml-source-map.js');

const source = '<!doctype html><html><head><style>.x{content:">"}</style></head><body><main><div title="1 > 0"><span>one</span><span>two</span></div><script>const fake = "<aside>";</script></main></body></html>';
const entries = sourceMap.scan(source);
assert.deepEqual(entries.map((entry) => entry.tag), ['html', 'head', 'style', 'body', 'main', 'div', 'span', 'span', 'script']);
assert.equal(entries.filter((entry) => entry.tag === 'aside').length, 0);
assert.equal(source.slice(entries[5].start, entries[5].end), '<div title="1 > 0">');

const nodes = ['html', 'head', 'style', 'body', 'main', 'div', 'span', 'span', 'script'].map((tagName) => ({tagName}));
const editorDocument = {documentElement: nodes[0], querySelectorAll: () => nodes.slice(1)};
const map = sourceMap.build(source, editorDocument);
assert.deepEqual(map.rangeFor(nodes[5]), [entries[5].start, entries[5].end]);
assert.match(map.replaceOpeningTag(nodes[5], '<div class="mapped">'), /<div class="mapped"><span>one/);
console.log('source-map: PASS');
