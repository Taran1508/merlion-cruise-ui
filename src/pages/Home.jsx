import SummaryCard from "@/components/summary-card/SummaryCard";
import useResponsive from "@/hooks/UseResponsive";
import { Stack } from "@mui/material";

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
];

// Payment Data 1
const orderSummaryData = [
  {
    totalAmount: ["Total Amount", "AED 10,000.00"],
    serviceCharges: ["Service Charges ( 5% )", "AED 30.00"],
    vat: ["VAT ( 5% )", "AED 10.00"],
  },
  {
    paidAmount: ["Paid Amount", "AED 10,699.00"],
  },
];

// Payment Data 2
const orderSummaryData1 = [
  {
    totalAmount: ["Total Amount", "AED 10,000.00"],
    serviceCharges: ["Service Charges ( 5% )", "AED 30.00"],
    vat: ["VAT ( 5% )", "AED 10.00"],
  },
  {
    paidAmount: ["Paid Amount", "AED 10,699.00"],
  },
];

//

export default function Home() {
  const { isMobile, isTablet } = useResponsive();

  const highlightedOrderProps = ["paidAmount"];

  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        width: isMobile || isTablet ? "100%" : "100%",
        justifyContent: "center",
        my: 10,
        p: 6,
      }}
    >
      {/* Summary Cards Section */}
      <Stack
        sx={{
          gap: 4,
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)", // 1 item per row on xs (mobile)
            sm: "repeat(2, 1fr)", // 2 items per row on sm (tablet)
            md: "repeat(3, 1fr)",
          }, // 1 item per row on xs, 3 items per row on md+
          gridGap: 16,
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

      {/* Summary Card with payment summary For future development*/}
      <Stack sx={{ mt: 2, display: "flex", flexDirection: "row", gap: 5 }}>
        <SummaryCard
          title="Payment Summary"
          summary={orderSummaryData}
          highlightedProperties={highlightedOrderProps}
          align="right"
          divider={["vat"]}
        />
        <SummaryCard
          title="Payment Summary"
          summary={orderSummaryData1}
          highlightedProperties={highlightedOrderProps}
          align="right"
          divider={[`paidAmount`, `serviceCharges`, "vat"]}
        />
      </Stack>
    </Stack>
  );
}
