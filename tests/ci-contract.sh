#!/bin/sh
set -eu

cd "$(dirname "$0")/.."

test -s myvibehtml-runtime.php
test -s myvibehtml-source-map.js
test -s myvibehtml-ui-contracts.js
test -s myvibehtml-shell-controls.js
test -x tests/e2e-authenticated.sh
rg -q "myvibehtml-source-map\.js.*myvibehtml-ui-contracts\.js.*myvibehtml\.js.*myvibehtml-shell-controls\.js" myvibehtml.php
rg -q "MyVibeHTMLUIContracts|generateToken" myvibehtml-ui-contracts.js myvibehtml.js
rg -q "MyVibeHTML v0\.50|const VERSION = '0\.50'" myvibehtml.php myvibehtml.js myvibehtml-runtime.php myvibehtml-source-map.js myvibehtml-ui-contracts.js myvibehtml-shell-controls.js
if rg -q -- '--mv-bg:' myvibehtml-theme.css; then
    echo "ci-contract: theme must consume fallback-owned tokens" >&2
    exit 1
fi
rg -q -- '--mv-bg:' myvibehtml-fallback.css

echo "ci-contract: PASS"
