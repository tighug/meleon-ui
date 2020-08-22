import React, { ReactNode } from "react";
import { ThemeProvider as TP } from "styled-components";
import { baseDark } from "../themes";

export type Theme = {
  normal: string;
  primary: string;
  secondary: string;
  error: string;
  info: string;
  success: string;
  warning: string;
  bg: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    dividers: string;
  };
};

export type ThemeProviderProps = {
  children?: ReactNode;
  dark?: boolean;
  theme?: Record<string, unknown>;
};

export function ThemeProvider({
  dark = false,
  children,
  theme,
}: ThemeProviderProps) {
  const baseTheme = dark ? baseDark : baseDark;
  const fixedTheme = Object.assign(baseTheme, theme);

  return <TP theme={fixedTheme}>{children}</TP>;
}
