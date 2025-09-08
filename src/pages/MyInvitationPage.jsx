import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import photo1 from "@/assets/images/invitations/photo1.jpg";
import photo2 from "@/assets/images/invitations/photo2.jpg";
import photo3 from "@/assets/images/invitations/photo3.jpg";
import photo4 from "@/assets/images/invitations/photo4.jpg";
import photo5 from "@/assets/images/invitations/photo5.jpg";
import photo6 from "@/assets/images/invitations/photo6.jpg";
import photo7 from "@/assets/images/invitations/photo7.jpg";
import photo8 from "@/assets/images/invitations/photo8.jpg";
import photo9 from "@/assets/images/invitations/photo9.jpg";
import photo10 from "@/assets/images/invitations/photo10.jpg";

import InvitationCard from "@/components/invitation-card/InvitationCard";
import InvitationScrollSection from "@/components/invitation-scroll/InvitationScrollSection";

// ---------------- Styled Components ----------------
const DetailsContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  padding: theme.spacing(4),
  maxWidth: "1200px",
  margin: "0 auto",
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const AboutSection = styled(Stack)(({ theme }) => ({
  flex: 2,
  maxWidth: "60%",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

// ---------------- Example Data ----------------
const exampleInvitation = {
  invitedBy: ["Invited By", "Invited by Tom"],
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
    status: "completed",
  },
};

// ---------------- Page Component ----------------
export default function MyInvitationPage() {
  const { id } = useParams();

  // State for invitation data
  const [invitationData, setInvitationData] = useState(exampleInvitation);

  // Dummy ticket data
  const ticketData = {
    ticketImage: photo1, // replace with real ticket image
    onViewTicket: () => console.log("View Ticket"),
    onDownloadTicket: () => console.log("Download Ticket"),
    onPrintTicket: () => console.log("Print Ticket"),
  };

  // Conditionally add ticketInformation if status is accepted/completed
  const sections = {
    ...invitationData,
    ...(invitationData.eventDetails.status === "accepted" ||
    invitationData.eventDetails.status === "completed"
      ? { ticketInformation: ticketData }
      : {}),
  };

  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
  ];

  return (
    <>
      <InvitationScrollSection images={photos} />

      <DetailsContainer direction="row" gap={15}>
        <AboutSection spacing={2}>
          <Typography style={{ fontWeight: 600, fontSize: "40px" }}>
            About Event
          </Typography>
          <Typography style={{ fontWeight: 500, fontSize: "24px" }}>
            Step Into Merlion Club – Unmatched Vibes, Nonstop Energy.
          </Typography>
          <Typography style={{ fontWeight: 400, fontSize: "16px" }}>
            Dance The Night Away On A Spacious Floor, Surrounded By Top-Tier
            Sound And Lighting That Create An Immersive Music Experience. With
            Chic Décor, A Genre-Spanning Playlist, And Nonstop Beats From Our
            DJs, This Isn’t Just A Club — It’s A Sensory Escape. Get Ready For
            Unforgettable Nights And Endless Fun!
          </Typography>
          <Typography style={{ fontWeight: 400, fontSize: "16px" }}>
            Dance The Night Away On A Spacious Floor, Surrounded By Top-Tier
            Sound And Lighting That Create An Immersive Music Experience.
          </Typography>
        </AboutSection>

        {/* Pass sections with conditional ticket info */}
        <InvitationCard sections={sections} />
      </DetailsContainer>
    </>
  );
}
