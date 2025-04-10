import { parse } from "acorn";

export function parseCode(code: string) {
  try {
    const ast = parse(code, { ecmaVersion: 2020 });
    return ast;
  } catch (error) {
    console.error("Parsing error:", error);
    return null;
  }
}