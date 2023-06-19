import { getNumber } from "../lib/nums.ts";
import { assertEquals } from "asserts";

Deno.test("get number 0", () => {
  const resStr = getNumber(0);
  const resNumber = eval(resStr);
  assertEquals(resNumber, 0);
});

Deno.test("get number 1", () => {
  const resStr = getNumber(1);
  const resNumber = eval(resStr);
  assertEquals(resNumber, 1);
});

Deno.test("get number 13", () => {
  const resStr = getNumber(13);
  const resNumber = eval(resStr);
  assertEquals(resNumber, 13);
});
