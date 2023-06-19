import { getString } from "./chars.ts";

export const compile = (code: string): string => {
  return `(()=>{})[${getString("constructor")}](${getString(code)})()`;
};
