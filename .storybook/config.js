import React from "react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { themes } from "@storybook/theming";
import themeDecorator from "./themeDecorator";
import "ress";
import "../src/index.css";
import "@mdi/font/css/materialdesignicons.css";

addDecorator(themeDecorator);
addParameters({
  options: {
    theme: themes.dark,
  },
});
