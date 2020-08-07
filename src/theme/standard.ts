import * as palette from "meleon-palette";

export default {
  color: {
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
    background: {
      primary: palette.lightText.primary,
      secondary: palette.lightText.secondary,
      disabled: palette.lightText.disabled,
    },
    text: {
      primary: palette.darkText.primary,
      secondary: palette.darkText.secondary,
      disabled: palette.darkText.disabled,
      dividers: palette.darkText.dividers,
    },
    icon: {
      active: palette.darkIcons.active,
      inactive: palette.darkIcons.inactive,
    },
  },
};
