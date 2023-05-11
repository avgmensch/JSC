//@ts-check

import { fromString } from "./char_map.js";

/**
 * @param {string} code - JavaScript code
 * @returns {string} `code` in weird format
 */
export const compileCode = (code) => {
  return `(()=>{})[${fromString("constructor")}](${fromString(code)})()`;
};
