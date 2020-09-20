import { Theme } from "../components/ThemeProvider";

export function str2color(str?: string, theme?: Theme): string | undefined {
  if (str === undefined || theme === undefined) return undefined;

  switch (str) {
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
      return str;
  }
}
