/* eslint-disable @typescript-eslint/no-unused-vars */
import MerlionStepper from "@/components/merlin-stepper/MerlinStepper";
import useResponsive from "@/hooks/UseResponsive";
import { useState } from "react";
import BookingStatusCard from "@/components/booking-status-card/BookingCard";
import { Stack, Typography } from "@mui/material";
import InvitationCard from "../components/invitation-card/InvitationCard";

const initialSteps = [
  { id: 1, label: "Select Package", isCompleted: true, isActive: false },
  { id: 2, label: "Passenger Details", isCompleted: true, isActive: false },
  { id: 3, label: "Add Personal Staff", isCompleted: true, isActive: false },
  { id: 4, label: "Review", isCompleted: false, isActive: true },
  { id: 5, label: "Confirmation", isCompleted: false, isActive: false },
];

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

// Sample data for InvitationCard - Different status examples
const invitationPendingData = {
  invitedBy: ["Invited By", "Invited by tom"],
  data: {
    hostName: ["Host Name", "Tom"],
    email: ["Email", "tom@gmail.com"],
    phoneNumber: ["Phone Number", "+9172135412554"],
  },
  eventDetails: {
    date: "Sep, 25, 2025",
    time: "05:00 PM",
    location: "Dubai",
    onAccept: () => console.log("Invitation accepted"),
    onDecline: () => console.log("Invitation declined"),
    status: "pending",
  },
};

export default function Home() {
  const [steps, setSteps] = useState(initialSteps);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const handleStepClick = (stepId) => {
    setSteps((prev) =>
      prev.map((s) => {
        if (s.id < stepId) return { ...s, isCompleted: true, isActive: false };
        if (s.id === stepId)
          return { ...s, isCompleted: false, isActive: true };
        return { ...s, isCompleted: false, isActive: false };
      })
    );
  };

  const highlightedOrderProps = ["paidAmount"];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
        <MerlionStepper steps={steps} handleStepClick={handleStepClick} />

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

      <Stack sx={{ gap: 2, width: "80%", mt: 10 }}>
        <Typography
          variant="h5"
          sx={{
            color: "#FFFFFF",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,

            textTransform: "capitalize",
          }}
        >
          Booking Status Examples
        </Typography>
        <Stack sx={{ gap: 3 }}>
          <BookingStatusCard
            title="Booking Confirmed"
            subTitle="Payment Successfully done"
            status="confirmed"
            note="You will receive a confirmation email shortly"
          />
          <Stack sx={{ gap: 2, flexDirection: { xs: "column", md: "row" } }}>
            <BookingStatusCard
              title="Payment Pending"
              subTitle="Awaiting payment confirmation"
              status="pending"
            />
            <BookingStatusCard
              title="Trip Completed"
              subTitle="Thank you for traveling with us"
              status="completed"
            />
          </Stack>
        </Stack>

        {/* Invitation Card Section */}
        <Typography
          variant="h5"
          sx={{
            color: "#FFFFFF",

            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,

            textTransform: "capitalize",
          }}
        >
          Invitation Card
        </Typography>
        <Stack sx={{ gap: 3, alignItems: "center" }}>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
            }}
          >
            Click Accept or Decline to see the status change
          </Typography>
          <InvitationCard sections={invitationPendingData} />
        </Stack>
      </Stack>
    </div>
  );
}
