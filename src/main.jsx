import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import "./index.css";
import App from "./App.jsx";
import { darkTheme } from "./themes/theme";

const mergedTheme = createTheme({
  ...darkTheme,
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={mergedTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
