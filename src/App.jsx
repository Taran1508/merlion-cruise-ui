import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";

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
