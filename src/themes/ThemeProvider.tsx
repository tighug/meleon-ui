import React, { ReactNode } from "react";
import { ThemeProvider as TP } from "styled-components";
import { Theme } from "./Theme";

export type ThemeProviderProps = {
  children?: ReactNode;
  dark?: boolean;
  theme?: Theme;
};

export function ThemeProvider({
  dark = false,
  children,
  theme,
}: ThemeProviderProps) {
  const baseTheme = {};
  const fixedTheme = Object.assign(baseTheme, theme);

  return <TP theme={fixedTheme}>{children}</TP>;
}
