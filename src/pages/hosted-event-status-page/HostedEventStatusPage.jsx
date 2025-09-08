import {
  Box,
  Stack,
  Typography,
  Button,
  useTheme,
  Divider,
} from "@mui/material";
import BookingStatusCard from "@/components/booking-status-card/BookingCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import useResponsive from "@/hooks/UseResponsive";
import SummaryCard from "@/components/summary-card/SummaryCard";
import MerlionTable from "@/components/merlion-table/MerlionTable";
import {
  sampleColumns,
  sampleData,
  orderSummaryData,
  orderSummaryData1,
  orderData,
} from "@/data/hosted-event-status-data";
import DisplayBooking from "./pages/DisplayBooking";
import DisplayPayment from "./pages/DisplayPayment";
import ChartWidget from "@/components/widget-chart/ChartWidget";
import { DisplayTable } from "./pages/DisplayTable";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { defaultConfig, statusMap } from "@/config/hostedEventsConfig";

const rows = [
  { name: "Tom", mobile: "+441634567890", status: "Accepted" },
  { name: "Jhon", mobile: "+12125551234", status: "Declined" },
  { name: "Warner", mobile: "+61298765432", status: "Accepted" },
  { name: "David", mobile: "+14165551234", status: "Pending" },
];

const ticketID = "#BOID02145892";
const ticketMessage =
  "Your Tickets has been booked on 15 Sep 2025 for 4 Guests!";

export default function HostedEventStatusPage() {
  const theme = useTheme();
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  // const { orderData, loading, error } = useHostedEventStatusData(id); // Useful when fetching data using API

  const displayConfig = useMemo(() => {
    return status && statusMap[status] ? statusMap[status] : defaultConfig;
  }, [status]);

  const handleRowClick = (rowData, column) => {
    console.log("Row clicked:", rowData, "Column:", column);
  };

  const handleButtonClick = (buttonValue, rowData) => {
    console.log("Button clicked:", buttonValue, "Row data:", rowData);
  };

  const handlePageChange = (page, pageSize) => {
    console.log("Page changed:", page, "Page size:", pageSize);
  };

  return (
    // Parent Container
    <>
      {/* Purple Box Section Below Header */}
      <Box
        sx={{
          //   position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(8px)",
          height: 46,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Button
          // onClick={onBack}
          startIcon={
            <ArrowBackIosNewIcon sx={{ fontSize: 12, borderRadius: 6 }} />
          }
          sx={{
            position: "absolute",
            top: 12,
            left: "18%",
            color: "#fff",
            width: "%",
            height: 24,
            textTransform: "none",
            fontSize: "14px",
            zIndex: 2,
          }}
        >
          Host an Event / ORI120246
        </Button>
      </Box>
      <Stack
        spacing={2}
        sx={{
          width: "100%",
          p: { xs: 1, sm: 2, md: 3 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Box 1 */}

        {/* Box 2*/}
        {/* Main Layout Section */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          //   spacing={2}
          sx={{
            flexGrow: 1,
            width: "100%",
            maxWidth: "1350px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          {displayConfig.Status ? (
            <BookingStatusCard
              title={
                status === "completed"
                  ? "Event Completed"
                  : status === "cancelled"
                  ? "Booking Cancelled"
                  : "Event Declined"
              }
              subTitle={
                status === "cancelled" ? "Refund & Cancellation Policy" : ""
              }
              status={
                status === "cancelled"
                  ? "upcoming"
                  : status === "completed"
                  ? "completed"
                  : "failed"
              }
            />
          ) : (
            <Stack
              sx={{
                flexGrow: 1,
                width: "100%",
                alignItems: "center",
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "row",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#A0A0A0", mb: 2, fontWeight: 600 }}
              >
                Up Coming
              </Typography>
              <Stack
                sx={{
                  width: "90%",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(to right, #838383, #C9C9C9, #C9C9C9)",
                    fontFamily: "Poppins",
                    color: "black",
                    borderRadius: 12,
                    borderColor: "#171717",
                    textTransform: "none",
                    width: "14%",
                    height: 40,
                    fontWeight: 500,
                    fontSize: "13px",
                    px: 3,
                  }}
                >
                  Modify Booking
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#202020",
                    border: "1px solid #171717",
                    fontFamily: "Poppins",
                    color: "#fff",
                    borderRadius: 12,
                    borderColor: "#A0A0A0",
                    textTransform: "none",
                    width: "14%",
                    height: 40,
                    fontWeight: 500,
                    fontSize: "13px",
                    px: 3,
                  }}
                >
                  Cancel Booking
                </Button>
              </Stack>
            </Stack>
          )}
          <Divider
            sx={{
              width: "98%",
              borderColor: "#FFFFFF29",
              borderBottomWidth: "1px",
              my: 2,
            }}
          />

          {/* Left Section (Booking Summary & Details) */}
          <Stack
            sx={{
              flexGrow: 1,
              flex: { xs: "1 1 100%", md: "1 1 40%" },
              width: "100%",
              maxWidth: "1350px",
              ...(displayConfig.Payment && {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }),
            }}
          >
            {displayConfig.Booking && (
              <DisplayBooking
                ticketID={ticketID}
                ticketMessage={ticketMessage}
                orderSummaryData={orderSummaryData} //Uncomment this when fetching from an API
              />
            )}
            {/* Right Section (Payment Summary) */}

            {/* Place your payment summary component here */}
            {displayConfig.Payment && (
              <DisplayPayment
                orderData={orderData}
                orderSummaryData1={orderSummaryData1}
              />
            )}
          </Stack>
        </Stack>
        {/* Box 3 */}
        {displayConfig.RSVP && (
          <Stack
            sx={{
              flexGrow: 1,
              flex: { xs: "1 1 100%", md: "1 1 40%" },
              width: "100%",
              maxWidth: "1320px",
              display: "flex",
              alignItems: "center",
              gap: 2,
              justifyContent: "center",
              mt: 2,
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                width: "50%",
                bgcolor: "#171717",
                p: 2,
                borderRadius: 6,
                "& > div": { border: "none" },
              }}
            >
              <ChartWidget
                title="RSVP's"
                data={[
                  { label: "Accepted", value: 100 },
                  { label: "Pending", value: 300 },
                  { label: "Declined", value: 50 },
                ]}
              />
            </Box>
            <Box
              sx={{
                width: "50%",
                bgcolor: "#171717",
                p: 2,
                borderRadius: 6,
              }}
            >
              <DisplayTable rows={rows} />
            </Box>
          </Stack>
        )}
        {/* Bottom Section (Guest List Table or Other Components) */}
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            width: "100%",
            maxWidth: "1350px",
          }}
        >
          {displayConfig.Table && (
            <MerlionTable
              title="Guest List (3)"
              columns={sampleColumns}
              data={sampleData}
              onClickRow={handleRowClick}
              onClickButton={handleButtonClick}
              onChangePage={handlePageChange}
              hidePagination={false}
              hideSearchbar={false}
              isActive={false}
            />
          )}
        </Box>
      </Stack>
    </>
  );
}
