import SummaryCard from "@/components/summary-card/SummaryCard";
import useResponsive from "@/hooks/UseResponsive";
import { Box, Stack, Typography, useTheme } from "@mui/material";

export default function DisplayBooking({
  ticketID,
  ticketMessage,
  orderSummaryData, //Comes from API
}) {
  const theme = useTheme();
  const { isMobile, isTablet, isDesktop } = useResponsive();
  return (
    <>
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "2 1 70%" },
          borderRadius: 2,
        }}
      >
        {/**  booking summary component */}
        <Stack sx={{ maxWidth: isMobile || isTablet ? "100%" : "100%", p: 2 }}>
          <Typography
            variant="h6"
            sx={{ color: "#A0A0A0", mb: 2, fontWeight: 600 }}
          >
            Booking Summary
          </Typography>
          {/* PageComponent */}
          {/* Conditional Child Component */}
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
                display: "flex",
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
              <SummaryCard
                title="Booking Details"
                summary={orderSummaryData}
                align="left"
              />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
