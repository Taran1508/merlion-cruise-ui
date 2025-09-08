import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import useResponsive from "@/hooks/UseResponsive";
import Footer from "@/components/Footer";

export default function MainLayout() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#060606",
        overflowX: "hidden",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          backgroundColor: "#060606",
          width: "100%",
          height: "100%",
          overflowY: "auto", // ensures scrollable content without white gaps
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
