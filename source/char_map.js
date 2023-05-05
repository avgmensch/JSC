import { getNumber } from "./numbers.js";

/**
 * @type {Object<string, string>}
 */
export const charMap = {
  " ": `({}+[])[${getNumber(7)}]`,
  "a": `(+{}+[])[${getNumber(1)}]`
};

/**
 * @param {string} text Normal text
 * @returns {string} text as strange string
 */
export const toString = (text) => {
  let res = '';

  for (let i = 0; i < text.length; i++) {
    res += charMap[text]
  }

  return res;
}
