import { teal, deepOrange } from "meleon-palette";
import { Theme } from "./Theme";

export const light: Theme = {
  normal: "#272727",
  primary: teal.base,
  secondary: deepOrange.base,
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
    primary: "rgba(255,255,255,1)",
    secondary: "rgba(255,255,255,0.7)",
    disabled: "rgba(255,255,255,0.3)",
    dividers: "rgba(255,255,255,0.12)",
  },
};
