import React from "react";
import { addParameters, addDecorator } from "@storybook/react";
import { themes } from "@storybook/theming";
import { ThemeProvider } from "styled-components";
import standard from "../src/theme/standard";

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={standard}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeDecorator);
addParameters({
  options: {
    theme: themes.dark,
  },
});
