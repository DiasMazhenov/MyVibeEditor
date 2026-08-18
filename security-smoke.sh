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
rg -q 'data-myvibehtml-local-only="1"' myvibehtml.php
echo "security-smoke: PASS"
