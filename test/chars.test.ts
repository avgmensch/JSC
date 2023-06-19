import { characters, getString } from "../lib/chars.ts";
import { assertEquals } from "asserts";

for (const key in characters) {
  Deno.test(`compile character ${key}`, () => {
    const charCompiled = getString(key);
    const charNormal = eval(charCompiled);
    assertEquals(charNormal, key);
  });
}
