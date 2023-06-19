export const zero = `(+[])`;
export const one = `(+!![])`;

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
