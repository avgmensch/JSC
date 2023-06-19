@echo off
deno run --allow-read --allow-write --config "%~dp0../deno.json" "%~dp0jsc.ts" %*
@echo on