/**
 * The number `0` encoded as a string. `+[]` will be evaluated to `0`. The brackets prevent syntax
 * errors, when numbers are added together.
 */
export const zero = `(+[])`;

/**
 * The number `1` encoded as a string. `!![]` evaluates to `true` and the `+` forces it to be a
 * number, so it becomes `1`. The brackets prevent syntax errors, when numbers are added together.
 */
export const one = `(+!![])`;

/**
 * Convert a number `num` to an encoded number as a string. Negative numbers will raise an `Error`,
 * but maybe they will be added in the future. Also floats can't be represented (currently it
 * defaults to the nearest floored integer).
 *
 * @example
 * getNumber(0) // "(+[])"
 *
 * @example
 * getNumber(1) // "(+!![])"
 *
 * @example
 * getNumber(3) // "(+!![])+(+!![])+(+!![])"
 *
 * @example
 * try {
 *   getNumber(-1)
 * } catch (e) {
 *   if (e instanceof Error) // handel error
 *   else throw e // rethrow error
 * }
 */
export const getNumber = (num: number): string => {
  if (num < 0) throw new Error();
  if (num == 0) return zero;

  let result = "";
  for (let i = 0; i < num; i++) {
    result = result + one;
    if (i < num - 1) result += "+";
  }

  return result;
};
