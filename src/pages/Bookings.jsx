import CruiseHeroSection from "@/components/cruise-hero-section/CruiseHeroSection";
import JourneyInfo from "@/components/journey-info/JourneyInfo";
import MerlionStepper from "@/components/merlin-stepper/MerlinStepper";
import PromoCard from "@/components/promo-card/PromoCard";
import SummaryCard from "@/components/summary-card/SummaryCard";
import useResponsive from "@/hooks/UseResponsive";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { useParams, useSearchParams, Navigate } from "react-router-dom";

const initialSteps = [
  { id: 1, label: "Select Package", isCompleted: true, isActive: false },
  { id: 2, label: "Passenger Details", isCompleted: true, isActive: false },
  { id: 3, label: "Add Personal Staff", isCompleted: true, isActive: false },
  { id: 4, label: "Review", isCompleted: false, isActive: true },
  { id: 5, label: "Confirmation", isCompleted: false, isActive: false },
];

// Sample data for SummaryCard
const travelerData = [
  {
    travelerName: ["Traveler Name", "Tom"],
    email: ["Email", "tom@gmail.com"],
    phoneNumber: ["Phone Number", "+9172135412554"],
  },
  {
    travelerName: ["Traveler Name", "Tom"],
    email: ["Email", "tom@gmail.com"],
    phoneNumber: ["Phone Number", "+9172135412554"],
  },
  {
    travelerName: ["Traveler Name", "Tom"],
    email: ["Email", "tom@gmail.com"],
    phoneNumber: ["Phone Number", "+9172135412554"],
  },
  {
    travelerName: ["Traveler Name", "Tom"],
    email: ["Email", "tom@gmail.com"],
    phoneNumber: ["Phone Number", "+9172135412554"],
  },
];

const journeyData = {
  title: "Trip from Paris to Berlin",
  departure: {
    label: "Departure",
    time: "08:30 AM",
    date: "2025-09-10",
    location: "Gare du Nord, Paris",
  },
  destination: {
    label: "Arrival",
    time: "02:15 PM",
    date: "2025-09-10",
    location: "Berlin Hauptbahnhof",
  },
  duration: {
    label: "5h 45m",
    stopsLabel: "1 stop via Cologne",
  },
};

const orderSummaryData = [
  {
    totalAmount: ["Total Amount", "AED 10,000.00"],
    serviceCharges: ["Service Charges ( 5% )", "AED 30.00"],
    vat: ["VAT ( 5% )", "AED 10.00"],
  },
  {
    paidAmount: ["Total", "AED 10,699.00"],
  },
];

const highlightedOrderProps = ["paidAmount"];

export default function Bookings() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const { id } = useParams(); //for fetching booking details
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  // only render this page if status === "review"
  // if (status !== "review") {
  //   return <Navigate to="/not-found" replace />;
  // }

  const ChevronIcon = styled("svg")({
    width: "20px",
    height: "20px",
    transform: "rotate(90deg)",
    "& path": {
      stroke: "#FFF",
      strokeWidth: "1.66667",
      strokeLinecap: "round",
    },
  });

  const [steps, setSteps] = useState(initialSteps);
  const handleStepClick = (stepId) => {
    setSteps((prev) =>
      prev.map((s) => {
        if (s.id < stepId) return { ...s, isCompleted: true, isActive: false };
        if (s.id === stepId)
          return { ...s, isCompleted: false, isActive: true };
        return { ...s, isCompleted: false, isActive: false };
      })
    );
  };
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

        <Stack sx={{ mt: 4, width: "100%" }}>
          <MerlionStepper steps={steps} handleStepClick={handleStepClick} />
        </Stack>

        {/* Journey Info - 2*/}
        <Stack sx={{ width: "85%", mt: 8 }}>
          <JourneyInfo {...journeyData} />
        </Stack>

        {/* Booking Summary Cards Section - 3*/}
        <Stack
          sx={{
            width: "100%",
            maxHeight: "361px",
            mt: 4,
            alignItems: "center",
          }}
        >
          <Stack>
            <Typography
              variant="h6"
              sx={{ color: "#FFF", mb: 2, fontWeight: 600 }}
            >
              Booking Summary
            </Typography>
            <Stack
              sx={{
                gap: 4,
                width: "100%",
                maxHeight: "361px",
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr", // 1 item per row on xs (mobile)
                  sm: "1fr", // 2 items per row on sm (tablet)
                  md: "repeat(3, 1fr)",
                }, // 1 item per row on xs, 3 items per row on md+
                border: "1px solid #242424",
                boxSizing: "border-box",
                borderRadius: 6,
                padding: 3,
                gridGap: 14,
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  display: "none", // Chrome, Safari, Edge
                },
              }}
            >
              {travelerData.map((data, index) => (
                <SummaryCard
                  title={
                    index == 0 ? "Traveler Details" : "Co-Traveler Details"
                  }
                  key={index}
                  summary={[data]}
                  align="left"
                />
              ))}
            </Stack>
          </Stack>
        </Stack>

        {/* Payment Section - 4 */}
        <Stack
          sx={{
            display: "flex",
            gap: 1,
            mt: 10,
            flexDirection: isMobile || isTablet ? "column" : "row",
            order: "1px solid #242424",
          }}
        >
          {/* Payment Section - 4a */}
          <Stack sx={{ maxWidth: isMobile || isTablet ? "100%" : "80%", p: 2 }}>
            <Typography
              variant="h6"
              sx={{ color: "#FFF", mb: 2, fontWeight: 600 }}
            >
              Apply Promocodes
            </Typography>
            {/* Payment Section - 4a1 */}
            <Stack
              sx={{
                border: "1px solid #242424",
                borderRadius: 6,
                p: 3,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                backgroundColor: "#171717",
              }}
            >
              <PromoCard
                title="You saved AED 200 with GET200"
                onClickApply={() => console.log("Promo applied")}
                onClickRemove={() => console.log("Promo removed")}
              />
              <Stack
                sx={{
                  maxWidth: "100%",
                  height: "80px",
                  border: "1px solid #242424",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 2,
                  alignItems: "center",
                  cursor: "pointer",
                  borderRadius: 6,
                }}
              >
                <Typography sx={{ color: "#FFF", fontWeight: 500 }}>
                  View all coupons
                </Typography>
                <ChevronIcon
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.33331 5L12.7441 9.41074C13.0695 9.73618 13.0695 10.2638 12.7441 10.5893L8.33331 15" />
                </ChevronIcon>
              </Stack>
            </Stack>
          </Stack>
          {/* Payment Section - 4b */}
          <Stack
            sx={{ maxWidth: isMobile || isTablet ? "100%" : "100%", p: 2 }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#FFF", mb: 2, fontWeight: 600 }}
            >
              Fare Summary
            </Typography>
            <Stack sx={{ maxWidth: isMobile || isTablet ? "100%" : "100%" }}>
              {/* Payment Section - 4b1 */}
              <Stack
                sx={{
                  maxWidth: isMobile || isTablet ? "100%" : "100%",
                  border: "1px solid #242424",
                  borderRadius: 6,
                  p: 2,
                }}
              >
                <SummaryCard
                  title={"Price Details"}
                  summary={orderSummaryData}
                  highlightedProperties={highlightedOrderProps}
                  align="right"
                  divider={[]}
                />
              </Stack>
              <Stack></Stack>
            </Stack>
          </Stack>
        </Stack>

        {/* login - 5 */}
        <Stack></Stack>
      </Stack>
    </Stack>
  );
}
