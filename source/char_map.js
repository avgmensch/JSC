//@ts-check

import { getNumber } from "./numbers.js";

/**
 * @param {string} text Normal text
 * @returns {string} text as weird string
 */
export const fromString = (text) => {
  return text
    .split("")
    .map((v) => {
      if (!(v in charMap)) {
        const charCode = getNumber(v.charCodeAt(0));
        return `([]+[])[${fromString("constructor")}][${fromString(
          "fromCharCode"
        )}](${charCode})`;
      }
      return charMap[v];
    })
    .join("+");
};

/**
 * @type {Object<string, string>}
 */
const charMap = {};

// Static
charMap["\\"] = `(/\\\\/+[])[${getNumber(1)}]`;
charMap[" "] = `({}+[])[${getNumber(7)}]`;
charMap["a"] = `(+{}+[])[${getNumber(1)}]`;
charMap["b"] = `({}+[])[${getNumber(2)}]`;
charMap["c"] = `({}+[])[${getNumber(5)}]`;
charMap["d"] = `([][${getNumber(0)}]+[])[${getNumber(2)}]`;
charMap["e"] = `({}+[])[${getNumber(4)}]`;
charMap["f"] = `([][${getNumber(0)}]+[])[${getNumber(4)}]`;
charMap["i"] = `([][${getNumber(0)}]+[])[${getNumber(5)}]`;
charMap["l"] = `(![]+[])[${getNumber(2)}]`;
charMap["n"] = `([][${getNumber(0)}]+[])[${getNumber(1)}]`;
charMap["o"] = `({}+[])[${getNumber(1)}]`;
charMap["r"] = `(!![]+[])[${getNumber(1)}]`;
charMap["s"] = `(![]+[])[${getNumber(3)}]`;
charMap["t"] = `(!![]+[])[${getNumber(0)}]`;
charMap["u"] = `([][${getNumber(0)}]+[])[${getNumber(0)}]`;

// Dynamic 1
charMap["g"] = `(([]+[])[${fromString("constructor")}]+[])[${getNumber(14)}]`;
charMap["p"] = `(/-/[${fromString("constructor")}]+[])[${getNumber(14)}]`;
charMap["S"] = `(([]+[])[${fromString("constructor")}]+[])[${getNumber(9)}]`;
charMap["C"] = `(()=>{})[${fromString("constructor")}](${fromString(
  "return escape"
)})()(${charMap["\\"]})[${getNumber(2)}]`;

// Dynamic 2
charMap["h"] = `(${getNumber(17)})[${fromString("toString")}](${getNumber(
  18
)})`;
charMap["m"] = `(${getNumber(22)})[${fromString("toString")}](${getNumber(
  23
)})`;
