import * as palette from "meleon-palette";

export default {
  colors: {
    primary: {
      light: palette.green.lighten2,
      base: palette.green.base,
      dark: palette.green.darken2,
    },
    secondary: {
      light: palette.deepOrange.lighten2,
      base: palette.deepOrange.base,
      dark: palette.deepOrange.darken2,
    },
    bg: {
      primary: palette.darkText.primary,
      secondary: palette.darkText.secondary,
      disabled: palette.darkText.disabled,
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
  },
};
