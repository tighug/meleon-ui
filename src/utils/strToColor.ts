import isColor from "is-color";

export function strToColor(init: string, str?: string, theme?: any): string {
  if (str === undefined) return init;

  const themeColor = theme["primary"];

  if (themeColor !== undefined && isColor(themeColor)) return themeColor;
  else if (isColor(str)) return str;
  else return init;
}
