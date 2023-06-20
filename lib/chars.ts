import { getNumber, one, zero } from "./nums.ts";

/**
 * Encode any string `str` into a string that only needs the characters `()[]{}/\!+`.
 *
 * If a string is not already know it can be created on the fly. This can be done by getting the
 * string-constructor from `([]+[])` using `["constructor"]`. Because we can't use normal
 * characters, we need to get it using the char-code of each letter encoded by `getNumber`.
 * Therefore, we need to `fromCharCode` from the constructor.
 *
 * In the end, it looks like this `([]+[])[${constructor}][${fromCharCode}](${charCode})`.
 *
 * @example
 * getString("acd")
 * // a => (+{}+[])[(+!![])] +
 * // c => ({}+[])[(+!![])+(+!![])+(+!![])+(+!![])+(+!![])] +
 * // d => ([][(+[])]+[])[(+!![])+(+!![])]
 */
export const getString = (str: string): string => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (characters[str[i]]) {
      result += characters[str[i]];
    } else {
      const constructor = getString("constructor");
      const fromCharCode = getString("fromCharCode");
      const charCode = getNumber(str.charCodeAt(i));
      result += `([]+[])[${constructor}][${fromCharCode}](${charCode})`;
    }
    if (i < str.length - 1) result += "+";
  }

  return result;
};

/**
 * Lookup object for hardcoded and dynamically generated
 * characters. This is not designed for manual editing.
 */
export const characters: { [key: string]: string | undefined } = {};

// Special characters
characters["\\"] = `(/\\\\/+[])[${one}]`;
characters[" "] = `({}+[])[${getNumber(7)}]`;

// Static characters
characters["a"] = `(+{}+[])[${one}]`;
characters["c"] = `({}+[])[${getNumber(5)}]`;
characters["d"] = `([][${zero}]+[])[${getNumber(2)}]`;
characters["e"] = `({}+[])[${getNumber(4)}]`;
characters["f"] = `([][${zero}]+[])[${getNumber(4)}]`;
characters["i"] = `([][${zero}]+[])[${getNumber(5)}]`;
characters["n"] = `([][${zero}]+[])[${getNumber(1)}]`;
characters["o"] = `({}+[])[${one}]`;
characters["r"] = `(!![]+[])[${one}]`;
characters["s"] = `(![]+[])[${getNumber(3)}]`;
characters["t"] = `({}+[])[${getNumber(6)}]`;
characters["u"] = `([][${zero}]+[])[${zero}]`;

// Complex characters
characters["g"] = `(([]+[])[${getString("constructor")}]+[])[${getNumber(14)}]`;
characters["S"] = `(([]+[])[${getString("constructor")}]+[])[${getNumber(9)}]`;

characters["h"] = `(${getNumber(17)})[${getString("toString")}](${getNumber(36)})`;
characters["m"] = `(${getNumber(22)})[${getString("toString")}](${getNumber(36)})`;
characters["p"] = `(${getNumber(25)})[${getString("toString")}](${getNumber(36)})`;

// Special compiled strings
const constructor = getString("constructor");
const escapeCmd = getString("return escape");

// Complex characters lvl2
characters["C"] = `(()=>{})[${constructor}](${escapeCmd})()(${characters["\\"]})[${getNumber(2)}]`;
