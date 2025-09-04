import SummaryCard from "@/components/summary-card/SummaryCard";
import useResponsive from "@/hooks/UseResponsive";
import { Divider, Stack } from "@mui/material";

// Sample data for SummaryCard
const travelerData = [
  {
    travelerName: "Tom",
    email: "tom@gmail.com",
    phoneNumber: "+9172135412554",
  },
  {
    travelerName: "Tom",
    email: "tom@gmail.com",
    phoneNumber: "+9172135412554",
  },
  {
    travelerName: "Tom",
    email: "tom@gmail.com",
    phoneNumber: "+9172135412554",
  },
  {
    travelerName: "Tom",
    email: "tom@gmail.com",
    phoneNumber: "+9172135412554",
  },
];

export default function Home() {
  const { isMobile, isTablet } = useResponsive();

  // const highlightedOrderProps = ['paidAmount']; {/* For future development*/ }

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
      {/* Divider  */}
      <Divider sx={{ borderColor: "#242424", my: 2 }} />

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

        {/* Summary Card with payment summary For future development*/}
        {/* <SummaryCard
              title="Payment Summary"
              summary={orderSummaryData}
              highlightedProperties={highlightedOrderProps}
              align="right"
            /> */}
      </Stack>
    </Stack>
  );
}

{
  /* For future development*/
}
// // Sample data for SummaryCard
// const travelerData = [
//   {
//     travelerName: 'Tom',
//     email: 'tom@gmail.com',
//     phoneNumber: '+9172135412554'
//   }
// ];

// const orderSummaryData = [
//   {
//     totalAmount: 'AED 10,000.00',
//     serviceCharges: 'AED 30.00',
//     vat: 'AED 10.00',
//     divider_one: true
//   },
//   {
//     paidAmount: 'AED 10,699.00'
//   }
// ];
