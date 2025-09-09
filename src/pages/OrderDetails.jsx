import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import SummaryCard from "@/components/summary-card/SummaryCard";
import styled from "@emotion/styled";
import { Stack } from "@mui/system";

const OrderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1, 2),
  borderRadius: "16px",
  backgroundColor: "#161616",
  color: "#fff",
  border: "1px solid #2a2a2a",
  marginTop: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(2),
  },
}));

const InfoGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "150px auto", // 150px label, rest for value
  rowGap: theme.spacing(1),
  columnGap: "30px",
  alignItems: "center",
}));

export const ActionButton = styled(Button)(({ theme }) => ({
  flex: "0 0 auto",
  borderRadius: "999px",
  border: `1px solid #4D4D4D `,
  color: "#fff",
  textTransform: "none",
  backgroundColor: "#202020",
  fontWeight: 500,
  fontSize: "14px",
  padding: theme.spacing(1, 1),
  "&:hover": {
    backgroundColor: "transparent",
    borderColor: "#202020",
  },
  [theme.breakpoints.down("md")]: {
    alignSelf: "center",
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    alignSelf: "center",
    fontSize: "10px",
  },
}));

export default function OrderDetails() {
  const { id } = useParams();
  const orderId = "#IN00120246";
  const orderDate = "22 Sep 2025  10:00 AM";
  const [orderData, setOrderData] = useState([]);

  // Mock API call
  useEffect(() => {
    const mockData = [
      {
        travelerName: ["Traveler Name", "Tom"],
        email: ["Email", "tom@gmail.com"],
        phoneNumber: ["Phone Number", "+9172135412554"],
        payment: ["Paid Amount", "AED 10,000.00"],
      },
    ];
    setOrderData(mockData);
  }, [id]);

  return (
    <Box
      sx={{
        width: "100%",
        mt: { xs: 4, sm: 6, md: 5 },
        px: { xs: 2, sm: 4, md: 6 },
        maxWidth: "1200px",
        mx: "auto",
      }}
    >
      <OrderContainer>
        <Stack spacing={1.5}>
          <InfoGrid>
            <Typography sx={{ color: "#A0A0A0", fontSize: "16px" }}>
              Order ID
            </Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
              {orderId}
            </Typography>
          </InfoGrid>

          <InfoGrid>
            <Typography sx={{ color: "#A0A0A0", fontSize: "16px" }}>
              Date & Time
            </Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
              {orderDate}
            </Typography>
          </InfoGrid>
        </Stack>

        {/* Right Side: Action Buttons */}
        <Stack direction="row" spacing={2}>
          <ActionButton>Share</ActionButton>
          <ActionButton>Print</ActionButton>
          <ActionButton>Download</ActionButton>
        </Stack>
      </OrderContainer>

      <div style={{ marginTop: "30px" }}>
        <Typography
          sx={{
            color: "#A0A0A0",
            fontWeight: "600",
            fontSize: "20px",
            paddingBottom: "10px",
          }}
        >
          Payment Summary
        </Typography>
        {orderData.map((data, index) => (
          <SummaryCard
            key={index}
            title={orderId}
            summary={[data]}
            align="right"
            highlightedProperties={["payment"]}
          />
        ))}
      </div>
    </Box>
  );
}
