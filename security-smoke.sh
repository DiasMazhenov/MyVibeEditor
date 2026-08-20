#!/bin/sh
set -eu

cd "$(dirname "$0")"

php -l myvibehtml.php >/dev/null
php -l dev-router.php >/dev/null
node --check myvibehtml.js

if rg -n -S 'textolite\.ru|withCredentials\s*=|buildServiceUrl|install=|activate=|system=http' myvibehtml.php myvibehtml.js; then
    echo "security-smoke: external update flow residue found" >&2
    exit 1
fi

rg -q 'Content-Security-Policy-Report-Only:' myvibehtml.php
rg -q 'X-Permitted-Cross-Domain-Policies:none' myvibehtml.php
rg -q 'myvibehtml_atomic_write' myvibehtml.php
rg -q 'myvibehtml_unserialize_array' myvibehtml.php
rg -q 'replaceFileListFragment' myvibehtml.js
if rg -n 'runtimeValue(9|165|236)\[innerHTMLProperty\]' myvibehtml.js; then
    echo "security-smoke: status sink still uses innerHTML" >&2
    exit 1
fi
rg -q 'runtimeValue9\[textContentProperty\]' myvibehtml.js
rg -q 'DOMParser' myvibehtml.js
rg -q "runtimeValue179 = \{LI: 1" myvibehtml.js
rg -q 'RewriteRule \(\^\|/\)\\\.' .htaccess
rg -q 'backup.*ini.*log' dev-router.php
rg -q 'preg_match' dev-router.php
rg -q 'try_files \$uri \$uri/ /myvibehtml\.php' nginx.conf.example
if rg -n -P "fopen\([^\n]+, 'w'" myvibehtml.php; then
    echo "security-smoke: truncate-before-lock write path found" >&2
    exit 1
fi
rg -q '!is_link\(' myvibehtml.php

if rg -n -P '\$[A-Za-z]{1,2}(?![A-Za-z0-9_])' myvibehtml.php; then
    echo "security-smoke: obfuscated PHP variable residue found" >&2
    exit 1
fi
if rg -n -P "(?:^|[;,])\s*(?:var|let|const)\s+[_$]?[A-Za-z]{1,2}\s*(?:=|,)" myvibehtml.js; then
    echo "security-smoke: obfuscated JavaScript declaration residue found" >&2
    exit 1
fi
if rg -n -P '\b(?:var|let|const)\s+_[A-Za-z0-9]+\s*=|\b[A-Za-z]{1,2}_\s*=|\$[A-Za-z](?:\s*[=,;])' myvibehtml.js; then
    echo "security-smoke: JavaScript alias residue found" >&2
    exit 1
fi
if rg -n -P '(?<!\.)\b[A-Za-z]{1,2}\s*=\s*function\b|function\s*\(\s*[A-Za-z]{1,2}\s*[,)]' myvibehtml.js; then
    echo "security-smoke: obfuscated JavaScript function residue found" >&2
    exit 1
fi
echo "security-smoke: PASS"
