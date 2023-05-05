//@ts-check

import { getNumber } from "./numbers.js";

/**
 * @param {string} text Normal text
 * @returns {string} text as strange string
 */
export const toString = (text) => {
  let res = [];

  for (let i = 0; i < text.length; i++) {
    res.push(charMap[text[i]]);
  }

  return res.join("+");
}

/**
 * @type {Object<string, string>}
 */
const charMap = {};
charMap[" "] = `({}+[])[${getNumber(7)}]`;
charMap["a"] = `(+{}+[])[${getNumber(1)}]`;
charMap["b"] = `({}+[])[${getNumber(2)}]`;

charMap["c"] = `({}+[])[${getNumber(5)}]`;
charMap["d"] = `([][0]+[])[${getNumber(2)}]`;
charMap["e"] = `({}+[])[${getNumber(4)}]`;

charMap["f"] = `([][0]+[])[${getNumber(4)}]`
charMap["i"] = `([][0]+[])[${getNumber(5)}]`
charMap["l"] = `(![]+[])[${getNumber(2)}]`

charMap["n"] = `([][0]+[])[${getNumber(1)}]`
charMap["o"] = `({}+[])[${getNumber(1)}]`
charMap["r"] = `(!![]+[])[${getNumber(1)}]`

charMap["s"] = `(![]+[])[${getNumber(3)}]`
charMap["t"] = `(!![]+[])[${getNumber(0)}]`
charMap["u"] = `([][0]+[])[${getNumber(0)}]`

charMap["S"] = `(([]+[])[${toString("constructor")}]+[])[${getNumber(9)}]`

// fromCharCode
// fro___ar_ode

// 22["toString"](23)
// toString
// to_trin_
