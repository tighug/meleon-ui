import { themes } from "@storybook/theming";
import { addDecorator } from "@storybook/react";
import themeDecorator from "./themeDecorator";
import "normalize.css";
import "./index.css";

addDecorator(themeDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.dark,
  },
};
