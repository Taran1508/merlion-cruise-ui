import BookingStatusCard from "@/components/booking-status-card/BookingCard";
import MerlionStepper from "@/components/merlin-stepper/MerlinStepper";
import { Stack, Typography } from "@mui/material";

const steps = [
  { id: 1, label: "Select Package", isCompleted: true, isActive: false },
  { id: 2, label: "Passenger Details", isCompleted: true, isActive: false },
  { id: 3, label: "Add Personal Staff", isCompleted: true, isActive: false },
  { id: 4, label: "Review", isCompleted: false, isActive: true },
  { id: 5, label: "Confirmation", isCompleted: false, isActive: false },
];

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Booking Status Section */}
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
      </Stack>
    </div>
  );
}
