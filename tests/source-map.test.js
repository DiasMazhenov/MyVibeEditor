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
assert.deepEqual(map.openingRangeFor(nodes[5]), [entries[5].start, entries[5].end]);
assert.deepEqual(map.elementRangeFor(nodes[5]), [entries[5].elementStart, entries[5].elementEnd]);
assert.equal(source.slice(entries[5].elementStart, entries[5].elementEnd), '<div title="1 > 0"><span>one</span><span>two</span></div>');
assert.match(map.replaceOpeningTag(nodes[5], '<div class="mapped">'), /<div class="mapped"><span>one/);

const tableSource = '<html><body><table><tr><td>cell</td></tr></table></body></html>';
const tableNodes = ['html', 'body', 'table', 'tbody', 'tr', 'td'].map((tagName) => ({tagName}));
const tableDocument = {documentElement: tableNodes[0], querySelectorAll: () => tableNodes.slice(1)};
const tableMap = sourceMap.build(tableSource, tableDocument);
assert.equal(tableMap.ambiguous, false);
assert.deepEqual(tableMap.elementRangeFor(tableNodes[4]), [tableSource.indexOf('<tr>'), tableSource.indexOf('</tr>') + 5]);

const malformedSource = '<html><body><div><span></div></body></html>';
const malformedNodes = ['html', 'body', 'div', 'span'].map((tagName) => ({tagName}));
const malformedMap = sourceMap.build(malformedSource, {documentElement: malformedNodes[0], querySelectorAll: () => malformedNodes.slice(1)});
assert.equal(malformedMap.elementRangeFor(malformedNodes[2]), null);
console.log('source-map: PASS');
