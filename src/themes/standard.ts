import * as palette from "meleon-palette";
import { Theme } from "./Theme";

const standard: Theme = {
  normal: "#272727",
  primary: palette.teal.base,
  secondary: palette.deepOrange.base,
  error: "#FF5252",
  info: "#2196F3",
  success: "#4CAF50",
  warning: "#FFC107",
  bg: {
    primary: "#242424",
    secondary: "#303030",
    disabled: "#242424",
  },
  text: {
    primary: "rgba(255, 255, 255, 1)",
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.3)",
    dividers: "rgba(255, 255, 255, 0.12)",
  },
};

export default standard;
