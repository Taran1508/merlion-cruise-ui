import { Stack, Typography } from "@mui/material";
import InvitationCard from "../components/invitation-card/InvitationCard";

export default function Home() {
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
  return (
    <div>
      {/* Invitation Card Section */}
      <Stack sx={{ gap: 2 }}>
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
