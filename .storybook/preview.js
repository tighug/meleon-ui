import React from "react";
import "normalize.css";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { dark } from "../src/themes";
import { DocsContainer } from "./components/DocContainer";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    disable: true,
  },
  docs: {
    container: DocsContainer,
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={dark}>
      <Story />
    </ThemeProvider>
  ),
];
