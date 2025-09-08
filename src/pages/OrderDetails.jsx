import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import SummaryCard from "@/components/summary-card/SummaryCard";

export default function OrderDetails() {
  const { id } = useParams();

  // State for order details
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
      {orderData.map((data, index) => (
        <SummaryCard
          key={index}
          title="Payment Summary"
          summary={[data]}
          align="right"
          highlightedProperties={["payment"]}
        />
      ))}
    </Box>
  );
}
