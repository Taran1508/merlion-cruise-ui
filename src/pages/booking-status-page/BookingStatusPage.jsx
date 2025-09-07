import CruiseHeroSection from "@/components/cruise-hero-section/CruiseHeroSection";
import MerlionStepper from "@/components/merlin-stepper/MerlinStepper";
import useResponsive from "@/hooks/UseResponsive";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import UpComingStatus from "./pages/UpComingStatus";
import CompletedStatus from "./pages/CompletedStatus";
import CancelledStatus from "./pages/CancelledStatus";

const STATUS_COMPONENT_MAP = {
  upcoming: UpComingStatus,
  completed: CompletedStatus,
  // confirmed: ConfirmedBooking,
  cancelled: CancelledStatus,
};

export default function BookingStatusPage() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const { id } = useParams(); //for fetching booking details
  const [searchParams, setSearchParams] = useSearchParams();
  const theme = useTheme();
  const status = searchParams.get("status");
  const navigate = useNavigate();

  const PageComponent = STATUS_COMPONENT_MAP[status];

  // if (!PageComponent) {
  //   return <Navigate to="/not-found" replace />;
  // }

  return (
    <Stack sx={{ display: "flex", flexDirection: "column" }}>
      {/* Cruise Hero Section  */}
      <CruiseHeroSection
        image={"/src/assets/f1.jpg"}
        title={"Merlion Cruise - CN01245"}
        subTitle={
          "Experience the ultimate night cruise with live entertainment, shisha under the stars, and lounges made for indulgence. Merlion Cruise — where every night feels endless."
        }
        onBack={() => window.history.back()}
      />

      {/* Main Container */}
      <Stack
        sx={{
          alignItems: "center",
          width: "100%",
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        {/* Merlion Stepper - 1 */}

        {/* PageComponent */}
        <PageComponent />
      </Stack>
    </Stack>
  );
}
