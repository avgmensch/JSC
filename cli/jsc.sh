#!/bin/bash
set +x
deno run --allow-read --allow-write --config "$(dirname "$0")/../deno.json" "$(dirname "$0")/jsc.ts" "$@"
set -x