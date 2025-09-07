import SummaryCard from "@/components/summary-card/SummaryCard";
import useResponsive from "@/hooks/UseResponsive";
import { Typography } from "@mui/material";
import { Box, Stack, useTheme } from "@mui/system";

export default function DisplayPayment({ orderData, orderSummaryData1 }) {
  const theme = useTheme();
  const { isMobile, isTablet, isDesktop } = useResponsive();
  return (
    <>
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 40%" },
          p: 2,
          borderRadius: 2,
        }}
      >
        <Stack sx={{ maxWidth: isMobile || isTablet ? "100%" : "100%" }}>
          <Typography
            variant="h6"
            sx={{ color: "#A0A0A0", mb: 2, fontWeight: 600 }}
          >
            Payment Summary
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
                    mb: 3,
                    fontSize: 12,
                  }}
                >
                  {orderData.transactionResponse}
                  {/* Payment Response*/}
                </Typography>
              </Stack>
              <SummaryCard
                title="Price Details"
                summary={orderSummaryData1}
                highlightedProperties={"paidAmount"}
                align="right"
              />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
