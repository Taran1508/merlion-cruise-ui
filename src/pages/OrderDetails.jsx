// src/pages/OrderDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SummaryCard from "@/components/summary-card/SummaryCard";

export default function OrderDetails() {
  const { id } = useParams();

  // ✅ State for traveler data
  const [travelerData, setTravelerData] = useState([]);

  // ✅ Example: set initial mock data (replace with API later)
  useEffect(() => {
    const mockData = [
      {
        travelerName: ["Traveler Name", "Tom"],
        email: ["Email", "tom@gmail.com"],
        phoneNumber: ["Phone Number", "+9172135412554"],
        payment: ["Paid Amount", "AED 10,000.00"],
      },
    ];

    setTravelerData(mockData);
  }, [id]);

  return (
    <>
      <div style={{ padding: "16px" }}>
        {travelerData.map((data, index) => (
          <SummaryCard
            key={index}
            title="Payment Summary"
            summary={[data]}
            align="right"
            highlightedProperties={["payment"]}
          />
        ))}
      </div>
    </>
  );
}
