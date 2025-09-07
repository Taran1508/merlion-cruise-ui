import SummaryCard from "@/components/summary-card/SummaryCard";
import useResponsive from "@/hooks/UseResponsive";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
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

export default function CancelledStatus({ ticketID, ticketMessage }) {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const theme = useTheme();
  const isLoggedIn = true;
  return (
    <>
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
            {ticketID}
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#A0A0A0",
              fontWeight: 400,
              fontSize: 12,
            }}
          >
            {ticketMessage}
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
              title={index == 0 ? "Traveler Details" : "Co-Traveler Details"}
              key={index}
              summary={[data]}
              align="left"
            />
          ))}
        </Stack>
      </Stack>
    </>
  );
}
