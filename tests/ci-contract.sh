#!/bin/sh
set -eu

cd "$(dirname "$0")/.."

test -s myvibehtml-runtime.php
test -s myvibehtml-source-map.js
test -s myvibehtml-ui-contracts.js
test -s myvibehtml-shell-controls.js
test -x tests/e2e-authenticated.sh
test -s myvibehtml-transport.js
test -s myvibehtml-auth.js
node --check myvibehtml-auth.js
node --test tests/module-boundaries.test.js
node --test tests/feature-contracts.test.js
rg -q "myvibehtml-source-map\.js.*myvibehtml-ui-contracts\.js.*myvibehtml-transport\.js.*myvibehtml\.js.*myvibehtml-shell-controls\.js" myvibehtml.php
rg -q "myvibehtml-ui-contracts\.js.*myvibehtml-transport\.js.*myvibehtml\.js" myvibehtml.php
rg -q "myvibehtml\.js.*myvibehtml-auth\.js" myvibehtml.php
rg -q "MyVibeHTMLUIContracts|generateToken" myvibehtml-ui-contracts.js myvibehtml.js
rg -q "MyVibeHTML v0\.65|const VERSION = '0\.65'" myvibehtml.php myvibehtml.js myvibehtml-runtime.php myvibehtml-source-map.js myvibehtml-ui-contracts.js myvibehtml-shell-controls.js myvibehtml-transport.js myvibehtml-auth.js
if rg -q -- '--mv-bg:' myvibehtml-theme.css; then
    echo "ci-contract: theme must consume fallback-owned tokens" >&2
    exit 1
fi
rg -q -- '--mv-bg:' myvibehtml-fallback.css

echo "ci-contract: PASS"
