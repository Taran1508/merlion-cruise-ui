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
    paidAmount: ["Pay", "AED 10,599.00"],
  },
];

const highlightedOrderProps = ["paidAmount"];

export default function ReviewBooking() {
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
      {" "}
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
            sx={{ color: theme.palette.text.secondary, mb: 2, fontWeight: 600 }}
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
                title={index == 0 ? "Traveler Details" : "Co-Traveler Details"}
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
            sx={{ color: theme.palette.text.secondary, mb: 2, fontWeight: 600 }}
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
              <Typography
                sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}
              >
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
        <Stack sx={{ maxWidth: isMobile || isTablet ? "100%" : "100%", p: 2 }}>
          <Typography
            variant="h6"
            sx={{ color: theme.palette.text.secondary, mb: 2, fontWeight: 600 }}
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
              {isLoggedIn ? (
                <SummaryCard
                  title={"Price Details"}
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
      {/* login - 5 */}
      <Stack
        sx={{
          alignItems: "end",
          width: isMobile || isTablet ? "100%" : "85%",
        }}
      >
        {" "}
        {/* Login Button */}
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(to right, #838383, #C9C9C9, #C9C9C9)",
            fontFamily: "Poppins",
            color: "black",
            borderRadius: 12,
            textTransform: "none",
            width: "20%",
            height: 45,
            fontWeight: 600,
            fontSize: "14px",
            px: 3,
          }}
        >
          {isLoggedIn
            ? `${orderSummaryData1[1].paidAmount[0]} ${orderSummaryData1[1].paidAmount[1]}`
            : "Login to Payment"}
        </Button>
      </Stack>
    </>
  );
}
