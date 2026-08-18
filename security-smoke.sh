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
rg -q 'data-myvibehtml-local-only="1"' myvibehtml.php
rg -q 'myvibehtml_atomic_write' myvibehtml.php
rg -q 'myvibehtml_unserialize_array' myvibehtml.php
rg -q 'replaceFileListFragment' myvibehtml.js
if rg -n 'b\[i_\] = a' myvibehtml.js; then
    echo "security-smoke: server response still assigned to live innerHTML" >&2
    exit 1
fi
rg -q 'RewriteRule \(\^\|/\)\\\.' .htaccess
rg -q 'backup.*ini.*log' dev-router.php
rg -q 'preg_match' dev-router.php
rg -q 'try_files \$uri \$uri/ /myvibehtml\.php' nginx.conf.example
if rg -n "fopen\(\$ab, 'w'|flock\(\$ag, LOCK_EX\)" myvibehtml.php; then
    echo "security-smoke: truncate-before-lock write path found" >&2
    exit 1
fi
rg -q '!is_link\(\$k\)' myvibehtml.php
echo "security-smoke: PASS"
