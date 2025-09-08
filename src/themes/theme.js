import { createTheme } from "@mui/material/styles";
import { palette } from "./colors";
// import { fonts } from "./fonts";

// Optional: define custom elevation levels (for boxShadows or surfaces)
const createElevation = () => ({
  level0: "none",
  level1: `0px 1px 3px 0px ${palette.grey.medium}`,
  level2: `0px 3px 6px 0px ${palette.grey.medium}`,
  level3: `0px 6px 12px 0px ${palette.grey.medium}`,
  level4: `0px 8px 16px 0px ${palette.grey.medium}`,
  level5: `0px 12px 20px 0px ${palette.grey.medium}`,
});

// Dark theme (default)
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: palette.primary.main },
    secondary: { main: palette.primary.secondary },
    background: {
      default: palette.background.primary,
      paper: palette.background.tertiary,
    },
    text: {
      primary: palette.text.primary,
      secondary: palette.text.secondary,
    },
    error: { main: palette.status.error },
    warning: { main: palette.status.warning },
    info: { main: palette.status.info },
    success: { main: palette.status.success },
  },
  // typography: {
  //   fontFamily: fonts.displayLarge.fontFamily,
  //   h1: fonts.displayLarge,
  //   h2: fonts.displayMedium,
  //   h3: fonts.displaySmall,
  //   h4: fonts.headlineLarge,
  //   h5: fonts.headlineMedium,
  //   h6: fonts.headlineSmall,
  //   body1: fonts.bodyLarge,
  //   body2: fonts.bodyMedium,
  //   button: fonts.labelLarge,
  //   caption: fonts.labelMedium,
  //   overline: fonts.labelSmall,
  // },
  shape: {
    borderRadius: 6, // from your design
  },
  customShadows: createElevation(), // optional
});

// Light theme (can override later)
export const lightTheme = createTheme({
  ...darkTheme,
  palette: {
    ...darkTheme.palette,
    mode: "light",
    // override here for light theme when ready
  },
});
