import BookingStatusCard from "@/components/booking-status-card/BookingCard";
import JourneyInfo from "@/components/journey-info/JourneyInfo";
import PromoCard from "@/components/promo-card/PromoCard";
import SummaryCard from "@/components/summary-card/SummaryCard";
import useResponsive from "@/hooks/UseResponsive";
import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useTheme } from "@mui/material/styles";

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

export default function CancelledStatus() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const theme = useTheme();
  const isLoggedIn = true;
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
  return (
    <>
      {/* Booking Info - 2*/}
      <Stack sx={{ width: "90%", mt: 8 }}>
        <BookingStatusCard
          title="Booking Cancelled"
          subTitle="Refund & Cancellation Policy"
          status="cancelled"
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
        {/* Payment Section - 4a */}
        <Stack sx={{ maxWidth: isMobile || isTablet ? "100%" : "100%", p: 2 }}>
          <Typography
            variant="h6"
            sx={{ color: "#A0A0A0", mb: 2, fontWeight: 600 }}
          >
            Booking Summary
          </Typography>
          <Stack
            sx={{
              gap: 4,
              width: "100%",
              maxHeight: "445px",
              display: "flex",
              border: "1px solid #242424",
              boxSizing: "border-box",
              borderRadius: 6,
              padding: 2,
              gridGap: 14,
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                display: "none", // Chrome, Safari, Edge
              },
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
                #BOID021458921 {/*Order ID*/}
              </Typography>
              <Typography
                variant="p"
                sx={{
                  color: "#A0A0A0",
                  fontWeight: 400,
                  fontSize: 12,
                }}
              >
                Your Tickets has been booked on 15 Sep 2025 for 4 Guests!
              </Typography>
            </Stack>
            <Stack
              sx={{
                gap: 4,
                width: "100%",
                maxHeight: "445px",
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr", // 1 item per row on xs (mobile)
                  sm: "1fr", // 2 items per row on sm (tablet)
                  md: "repeat(2, 1fr)",
                }, // 1 item per row on xs, 3 items per row on md+

                boxSizing: "border-box",
                borderRadius: 6,
                padding: 1,
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
        {/* Payment Section - 4b */}
        <Stack sx={{ maxWidth: isMobile || isTablet ? "100%" : "100%", p: 2 }}>
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
                  #TNI0214582R {/*Transaction ID*/}
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
                  Payment Successful {/* Payment Response*/}
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
    </>
  );
}
