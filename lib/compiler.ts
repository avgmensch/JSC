import { getString } from "./chars.ts";

/**
 * Convert valid JavaScript `code` into an executable format, that can be saved to a file or be 
 * passed to the `eval` function. This is achieved by getting the constructor of an anonymous 
 * function and passing the argument `code` to it. Of course, all strings are represented as encoded 
 * strings, using the function `getString` from `/lib/chars.ts`.
 */
export const compile = (code: string): string => {
  return `(()=>{})[${getString("constructor")}](${getString(code)})()`;
};
