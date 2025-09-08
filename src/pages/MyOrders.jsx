import { Box, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Stack } from "@mui/material";
import MerlionTable from "@/components/merlion-table/MerlionTable";

const sampleColumns = [
  {
    id: "orderId",
    label: "Order ID",
    minWidth: 200,
  },
  {
    id: "dateTime",
    label: "Date & Time",
    minWidth: 260,
  },
  {
    id: "method",
    label: "Method",
    minWidth: 240,
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 200,
  },
];

const sampleData = [
  {
    orderId: "#IN00120246",
    dateTime: "22 Sep 2025  10:00 AM",
    method: "Credit Card",
    amount: "AED 200.00",
  },
  {
    orderId: "#IN00120246",
    dateTime: "23 Sep 2025  11:30 AM",
    method: "Debit Card",
    amount: "AED 150.00",
  },
  {
    orderId: "#IN00120246",
    dateTime: "24 Sep 2025  01:00 PM",
    method: "Wallet",
    amount: "AED 300.00",
  },
  {
    orderId: "#IN00120246",
    dateTime: "25 Sep 2025  09:15 AM",
    method: "Debit Card",
    amount: "AED 250.00",
  },
  {
    orderId: "#IN00120246",
    dateTime: "27 Sep 2025  03:30 PM",
    method: "Credit Card",
    amount: "AED 500.00",
  },
  {
    orderId: "#IN00120246",
    dateTime: "29 Sep 2025  05:15 PM",
    method: "Wallet 001",
    amount: "AED 450.00",
  },
  {
    orderId: "#IN00120246",
    dateTime: "22 Sep 2025  10:00 AM",
    method: "Credit Card",
    amount: "AED 200.00",
  },
  {
    orderId: "#IN00120246",
    dateTime: "23 Sep 2025  11:30 AM",
    method: "Debit Card",
    amount: "AED 150.00",
  },
  {
    orderId: "#IN00120246",
    dateTime: "24 Sep 2025  01:00 PM",
    method: "Wallet",
    amount: "AED 300.00",
  },
  {
    orderId: "#IN00120246",
    dateTime: "25 Sep 2024  09:15 AM",
    method: "Debit Card",
    amount: "AED 250.00",
  },
  {
    orderId: "#IN00120246",
    dateTime: "27 Sep 2024  03:30 PM",
    method: "Credit Card",
    amount: "AED 500.00",
  },
  {
    orderId: "#IN00120246",
    dateTime: "29 Sep 2022  05:15 PM",
    method: "Wallet",
    amount: "AED 450.00",
  },
  {
    orderId: "#IN00120246",
    dateTime: "22 Sep 2022  10:00 AM",
    method: "Credit Card",
    amount: "AED 200.00",
  },
  {
    orderId: "#IN00120246",
    dateTime: "23 Sep 2023  11:30 AM",
    method: "Debit Card",
    amount: "AED 150.00",
  },
  {
    orderId: "#IN00120246",
    dateTime: "24 Sep 2023  01:00 PM",
    method: "Wallet",
    amount: "AED 300.00",
  },
  {
    orderId: "#IN00120246",
    dateTime: "25 Sep 2025  09:15 AM",
    method: "Debit Card",
    amount: "AED 250.00",
  },
  {
    orderId: "#IN00120246",
    dateTime: "27 Sep 2025  03:30 PM",
    method: "Credit Card",
    amount: "AED 500.00",
  },
  {
    orderId: "#IN00120246",
    dateTime: "29 Sep 2025  05:15 PM",
    method: "Wallet",
    amount: "AED 450.00",
  },
];

export default function MyOrders() {
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
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          width: "100%",
          height: "100%",
          backgroundColor: "#060606",
          textAlign: "center",
        }}
      >
        {/* Back - Overlay  */}
        <Box
          sx={{
            inset: 0,
            backgroundColor: "#171717",
            backdropFilter: "blur(8px)",
            color: "#F6F6F6",
            height: 56,
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
              left: "16.5%",
              width: 72,
              height: 24,
              textTransform: "none",
              color: "#F6F6F6",
              fontSize: "14px",
              zIndex: 2,
            }}
          >
            Back
          </Button>
        </Box>

        {/* Merlion Table  */}
        {/* Merlion Table Contents  */}
        <Stack
          sx={{
            minHeight: "637px",
            bgcolor: "",
            px: 6,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <Stack
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", md: "100%" },
              mx: "auto",
              backgroundColor: "#060606",
              display: "flex",
              alignItems: "flex-start",
              p: { xs: 2, sm: 3, md: 4 },
              //   overflowX: "auto",
            }}
          >
            <MerlionTable
              title="My Orders"
              columns={sampleColumns}
              data={sampleData}
              onClickRow={handleRowClick}
              onClickButton={handleButtonClick}
              onChangePage={handlePageChange}
              hidePagination={false}
              hideSearchbar={false}
            />
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
