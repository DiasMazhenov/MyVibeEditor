#!/bin/sh
set -eu

cd "$(dirname "$0")/.."

test -s myvibehtml-runtime.php
test -s myvibehtml-source-map.js
test -s myvibehtml-ui-contracts.js
test -x tests/e2e-authenticated.sh
rg -q "myvibehtml-source-map\.js.*myvibehtml-ui-contracts\.js.*myvibehtml\.js" myvibehtml.php
rg -q "MyVibeHTMLUIContracts|generateToken" myvibehtml-ui-contracts.js myvibehtml.js
rg -q "MyVibeHTML v0\.41|const VERSION = '0\.41'" myvibehtml.php myvibehtml.js myvibehtml-runtime.php myvibehtml-source-map.js myvibehtml-ui-contracts.js

echo "ci-contract: PASS"
