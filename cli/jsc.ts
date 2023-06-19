import { compile } from "../lib/compiler.ts";
import { parse } from "flags";

const args = parse(Deno.args);

const helpMessage = `\
jsc [FILE] [OPTIONS]

OPTIONS
  -o, --out
  -h, --help

EXAMPLES
  jsc hello.js -o wtf.js
  jsc --help\
`;

if (args["h"] || args["help"] || args["_"][0] == undefined) {
  console.log(helpMessage);
  Deno.exit(0);
}

const inPath = String(args["_"][0]);

const code = Deno.readTextFileSync(inPath);
const complied = compile(code);

let outPath = `${inPath}.out`;

if (args["o"] != undefined) outPath = args["o"];
else if (args["out"] != undefined) outPath = args["out"];

Deno.writeTextFileSync(outPath, complied);
