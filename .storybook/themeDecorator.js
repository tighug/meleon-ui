import React from "react";
import { ThemeProvider } from "styled-components";
import { baseDark } from "../src/themes";

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={baseDark}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
