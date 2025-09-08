import useResponsive from "@/hooks/UseResponsive";
import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ViewTicketCard from "@/components/view-ticket-card/ViewTicketCard";

export default function UpComingStatus({
  ticketID,
  ticketMessage,
  ticketImage,
}) {
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
      <Stack
        sx={{
          gap: 4,
          maxWidth: "49vw",
          maxHeight: "500px",
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
            width: isMobile || isTablet ? "100%" : "200%",
            maxHeight: "500px",
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
          <ViewTicketCard
            ticketImage={ticketImage}
            onViewTicket={() => console.log("View Ticket clicked")}
            onShareTicket={() => console.log("Share Ticket clicked")}
            onPrintTicket={() => console.log("Print Ticket clicked")}
            onDownloadTicket={() => console.log("Download Ticket clicked")}
          />
        </Stack>
      </Stack>
    </>
  );
}
