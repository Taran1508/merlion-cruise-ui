import CruiseHeroSection from "@/components/cruise-hero-section/CruiseHeroSection";
import MerlionStepper from "@/components/merlin-stepper/MerlinStepper";
import useResponsive from "@/hooks/UseResponsive";
import { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import UpComingStatus from "./pages/UpComingStatus";
import CompletedStatus from "./pages/CompletedStatus";
import CancelledStatus from "./pages/CancelledStatus";
import BookingStatusCard from "@/components/booking-status-card/BookingCard";
import ViewTicketCard from "@/components/view-ticket-card/ViewTicketCard";
import { Stack, Typography } from "@mui/material";
import SummaryCard from "@/components/summary-card/SummaryCard";
import styled from "@emotion/styled";
import JourneyInfo from "@/components/journey-info/JourneyInfo";

// import useBookingData from "@/hooks/useBookingData"; //BookingData Hook for API call

import { STATUS_COMPONENT_MAP, STATUS_PROPS_MAP } from "@/config/statusConfig";

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

const orderSummaryData1 = [
  {
    totalAmount: ["Sailing Fare", "AED 10,000.00"],
    personalCharges: ["Personal Service Charges", "AED 199.00"],
    serviceCharges: ["Service Charges ( 5% )", "AED 30.00"],
    vat: ["VAT ( 5% )", "AED 10.00"],
    total: ["Total", "AED 10,699.00"],
    coupon: ["Coupon Applied", "-AED 100"],
  },
  {
    paidAmount: ["Paid", "AED 10,599.00"],
  },
];

const highlightedOrderProps = ["paidAmount"];

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

const orderData = {
  ticketID: "#BOID02145892",
  ticketMessage: "Your Tickets has been booked on 15 Sep 2025 for 4 Guests!",
  ticketImage: "/src/assets/qr.png",
  bookingStatus: "confirmed",
  bookingTitle: "Booking Confirmed",
  bookingMessage: "Your Tickets has been booked on 15 Sep 2025 for 4 Guests!",
  transactionID: "#TNI0214582R",
  transactionResponse: " Payment Successful",
};

export default function BookingStatusPage() {
  const isLoggedIn = true;
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const { id } = useParams(); //for fetching booking details
  const [searchParams, setSearchParams] = useSearchParams();
  const theme = useTheme();
  const status = searchParams.get("status");
  const navigate = useNavigate();

  // const { orderData, loading, error } = useBookingData(id); // Useful when fetching data using API

  const PageComponent = STATUS_COMPONENT_MAP[status];
  const getProps = STATUS_PROPS_MAP[status];
  // const componentProps = getProps && orderData ? getProps({ orderData }) : {};  // Useful when fetching data using API
  const componentProps = getProps ? getProps({ orderData }) : {}; //remove this when using API

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
        {/*  */}
        {/* Booking Info - 2*/}
        <Stack sx={{ width: "90%", mt: 8 }}>
          <BookingStatusCard
            title={orderData.bookingTitle}
            subTitle={orderData.bookingMessage}
            status={orderData.bookingStatus}
          />
        </Stack>
        {/* Journey - 3*/}
        <Stack
          sx={{
            width: "90%",
            maxHeight: "361px",
            mt: 4,
            alignItems: "center",
          }}
        >
          <JourneyInfo {...journeyData} />
        </Stack>
        {/* Payment Section - 4 */}
        <Stack
          sx={{
            display: "flex",
            gap: 1,
            mt: 2,
            maxWidth: isMobile || isTablet ? "100%" : "95%",
            flexDirection: isMobile || isTablet ? "column" : "row",
          }}
        >
          {/* Payment Section - 4 Left */}
          <Stack
            sx={{ maxWidth: isMobile || isTablet ? "100%" : "100%", p: 2 }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#A0A0A0", mb: 2, fontWeight: 600 }}
            >
              Booking Summary
            </Typography>
            {/* PageComponent */}
            {/* Conditional Child Component */}
            <PageComponent {...componentProps} />
          </Stack>
          {/* Payment Section - 4 Right */}
          <Stack
            sx={{ maxWidth: isMobile || isTablet ? "100%" : "100%", p: 2 }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#A0A0A0", mb: 2, fontWeight: 600 }}
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
                <Stack>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 600,
                    }}
                  >
                    {orderData.transactionID} {/*Transaction ID*/}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      color: "#A0A0A0",
                      fontWeight: 400,
                      mb: 1,
                      fontSize: 12,
                    }}
                  >
                    {orderData.transactionResponse}
                    {/* Payment Response*/}
                  </Typography>
                </Stack>
                {isLoggedIn ? (
                  <SummaryCard
                    title={""}
                    summary={orderSummaryData1}
                    highlightedProperties={highlightedOrderProps}
                    align="right"
                    divider={["vat"]}
                  />
                ) : (
                  <SummaryCard
                    title={"Price Details"}
                    summary={orderSummaryData}
                    highlightedProperties={highlightedOrderProps}
                    align="right"
                    divider={[]}
                  />
                )}
              </Stack>
              <Stack></Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
