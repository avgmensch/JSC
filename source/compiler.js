//@ts-check

import { fromString } from "./char_map.js";

/**
 * @param {string} code
 * @returns {string}
 */
export const compileCode = (code) => {
  return `(()=>{})[${fromString("constructor")}](${fromString(code)})()`;
};
