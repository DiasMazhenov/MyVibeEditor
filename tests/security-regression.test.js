const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const php = fs.readFileSync('myvibehtml.php', 'utf8');
const runtimePath = path.resolve('myvibehtml-runtime.php').replaceAll('\\', '\\\\').replaceAll("'", "\\'");
const runtime = fs.readFileSync('myvibehtml-runtime.php', 'utf8');

test('server rejects invalid save payloads before writing', () => {
    const output = execFileSync('php', ['-r', `require '${runtimePath}'; echo myvibehtml_base64_decode('%%%') === false ? 'invalid-rejected' : 'invalid-accepted'; echo "\\n"; echo myvibehtml_base64_decode('PGgxPk9LPC9oMT4=') === '<h1>OK</h1>' ? 'valid-decoded' : 'valid-rejected';`], {encoding: 'utf8'});
    assert.equal(output, 'invalid-rejected\nvalid-decoded');
    assert.match(php, /\$dispatch5 === false/);
    assert.match(php, /if \(\$dispatch5 !== false && \$dispatch2/);
});

test('sessions, PHP editing and authentication use fail-closed contracts', () => {
    assert.match(php, /SETTING_SESSION_EXPIRES_AT/);
    assert.match(php, /\$storedSessionExpiresAt/);
    assert.match(php, /SETTING_ALLOW_PHP/);
    assert.match(php, /if \(\$isallowedextension1 === 'php' &&/);
    assert.doesNotMatch(php, /\$authenticate9\b/);
    assert.match(php, /MYVIBEHTML_TRUST_PROXY/);
    assert.match(php, /HTTPS is required outside local development/);
});

test('runtime state writes JSON and directory scans are bounded', () => {
    const output = execFileSync('php', ['-r', `require '${runtimePath}'; $encoded = myvibehtml_encode_array(['ok' => 1]); $decoded = myvibehtml_decode_array($encoded); echo isset($decoded['ok']) && $decoded['ok'] === 1 ? 'json-ok' : 'json-failed';`], {encoding: 'utf8'});
    assert.equal(output, 'json-ok');
    assert.match(runtime, /function myvibehtml_encode_array/);
    assert.match(runtime, /function myvibehtml_decode_array/);
    assert.doesNotMatch(php, /urlencode\(serialize\(/);
    assert.match(php, /directoryDepth/);
    assert.match(php, /directoryDeadline/);
});

test('CSP enforces safe surfaces and collects bounded reports', () => {
    assert.match(php, /setCspMode\('enforce'\)/);
    assert.match(php, /setCspMode\(getenv\('MYVIBEHTML_CSP_VISUAL_ENFORCE'\)/);
    assert.match(php, /Content-Security-Policy-Report-Only:/);
    assert.match(php, /Content-Security-Policy:/);
    assert.match(php, /report-uri \?csp-report=1/);
    assert.match(php, /csp-report.*REQUEST_METHOD/);
    assert.match(runtime, /function myvibehtml_record_csp_report/);
    assert.match(runtime, /strlen\(\$payload\) > 16384/);
    assert.match(runtime, /\['effective-directive', 'violated-directive', 'blocked-uri'/);
});
