import React from "react";
import { ThemeProvider } from "styled-components";
import standard from "../src/themes/standard";

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={standard}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
