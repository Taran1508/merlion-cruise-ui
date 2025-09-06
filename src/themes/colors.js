export const palette = {
  primary: {
    main: "#FFFFFF",
    secondary: "#A0A0A0",
  },
  background: {
    primary: "#000000",
    secondary: "#0D0D0D",
    tertiary: "#363636",
    card: {
      primary: "#171717",
      secondary: "#202020",
      success: "#0D1712",
      error: "#42201D",
      warning: "#2E2316",
      draft: "#2E1928",
      info: "#2196F3",
    },
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#A0A0A0",
    success: "#12B76A",
    error: "#F04438",
    warning: "#FDB022",
    draft: "#FF2BC0",
    info: "#2196F3",
  },
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
  status: {
    success: "#0AD90A",
    error: "#FA5438",
    warning: "#FF9800",
    info: "#2196F3",
  },
  grey: {
    darkest: "#000000",
    darker: "#000000", // primary background
    dark: "#060606", // textfields/dropdowns background
    medium: "#0D0D0D", // secondary background
    light: "#A0A0A0", // secondary text/elements
    lighter: "#FFFFFF", // primary color/text
    lightest: "#FFFFFF",
  },
};

export const appColors = {
  success: palette.status.success,
  warning: palette.status.warning,
  info: palette.status.info,
  error: palette.status.error,
  text: {
    primary: palette.text.primary,
    secondary: palette.text.secondary,
  },
  background: {
    primary: palette.background.primary,
    secondary: palette.background.secondary,
    tertiary: palette.background.tertiary,
  },
  card: {
    primary: palette.background.card.primary,
    secondary: palette.background.card.secondary,
  },
};

// for now, keeping the same colors for both themes since we're using one design
export const darkColors = appColors;
export const lightColors = appColors;
