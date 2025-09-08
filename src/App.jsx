import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif', // Set Poppins Regular as the default font
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
