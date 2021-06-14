import { Theme } from "@themes/Theme";

export function nameToColor(name?: string, theme?: Theme): string {
  if (name === undefined || theme === undefined) return "";

  switch (name) {
    case "normal":
      return theme.normal;
    case "primary":
      return theme.primary;
    case "secondary":
      return theme.secondary;
    case "error":
      return theme.error;
    case "info":
      return theme.info;
    case "success":
      return theme.success;
    case "warning":
      return theme.warning;
    default:
      return name;
  }
}
