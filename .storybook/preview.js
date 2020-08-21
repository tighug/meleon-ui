import { addDecorator } from "@storybook/react";
import themeDecorator from "./themeDecorator";
import { themes } from "@storybook/theming";
import "ress";
import "./index.css";
import "@mdi/font/css/materialdesignicons.css";

addDecorator(themeDecorator);

export const parameters = {
  docs: {
    theme: themes.dark,
  },
};
