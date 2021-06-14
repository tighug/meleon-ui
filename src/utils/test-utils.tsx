import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { dark, ThemeProvider } from "../themes";

// eslint-disable-next-line react/prop-types
const Wrapper: FC = ({ children }) => {
  return <ThemeProvider theme={dark}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };
