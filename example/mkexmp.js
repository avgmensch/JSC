//@ts-check

import { compileCode } from "../mod.js";

const code = compileCode(`console.log("Hello World");`);

const uint = new Uint8Array(code.split("").map((v) => v.charCodeAt(0)));

Deno.writeFileSync("./example/example.js", uint);
