const assert = require('node:assert/strict');
const fs = require('node:fs');
const test = require('node:test');

const php = fs.readFileSync('myvibehtml.php', 'utf8');
const js = fs.readFileSync('myvibehtml.js', 'utf8');
const theme = fs.readFileSync('myvibehtml-theme.css', 'utf8');
const fallback = fs.readFileSync('myvibehtml-fallback.css', 'utf8');

test('interactive template controls expose keyboard semantics', () => {
    assert.match(php, /role="button" tabindex="0"/);
    assert.match(php, /role="tab" tabindex="0"/);
    assert.match(js, /keyCodeProperty\] == 13 \|\| event\[keyCodeProperty\] == 32/);
    assert.match(js, /target\[clickEvent\]\(\)/);
});

test('focus and contrast rules are present in both CSS layers', () => {
    for (const css of [theme, fallback]) {
        assert.match(css, /\[role="button"\]:focus-visible/);
        assert.match(css, /prefers-contrast:more/);
    }
    assert.doesNotMatch(theme, /@media\(max-width:700px\)\{#d #e/);
});
