import * as palette from "meleon-palette";

export default {
  dark: true,
  primary: palette.teal.base,
  secondary: palette.orange.base,
  normal: "#272727",
  bg: {
    primary: palette.grey.darken4,
    secondary: palette.grey.darken3,
    disabled: palette.grey.darken2,
  },
  text: {
    primary: palette.lightText.primary,
    secondary: palette.lightText.secondary,
    disabled: palette.lightText.disabled,
    dividers: palette.lightText.dividers,
  },
  icon: {
    active: palette.darkIcons.active,
    inactive: palette.darkIcons.inactive,
  },
};
