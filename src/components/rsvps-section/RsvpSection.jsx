import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  BackBookingButton,
  CancelBookingButton,
  NextButton,
} from "@/pages/HostedEventPage"; // adjust import path if needed
import { useState } from "react";
import { styled } from "@mui/material/styles";

const TransparentCheckbox = styled("input")(({ theme }) => ({
  appearance: "none", // remove default checkbox styling
  width: 18,
  height: 18,
  border: "2px solid #fff", // white border
  borderRadius: 4,
  cursor: "pointer",
  backgroundColor: "transparent", // transparent background
  display: "inline-block",
  position: "relative",

  "&:checked": {
    backgroundColor: "#000", // black background when checked
    borderColor: "#fff",
  },

  "&:checked::after": {
    content: '""',
    position: "absolute",
    top: "2px",
    left: "5px",
    width: "4px",
    height: "8px",
    border: "solid white",
    borderWidth: "0 2px 2px 0",
    transform: "rotate(45deg)",
  },
}));

const RsvpSection = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        mt: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 6 },
        maxWidth: "1200px",
        mx: "auto",
      }}
    >
      {/* RSVP Card */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          border: "1px solid #2A2A2A",
          borderRadius: "16px",
          p: 2,
          mb: 4,
          backgroundColor: "transparent",
        }}
      >
        <Stack spacing={1}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <TransparentCheckbox
              type="checkbox"
              id="activate-rsvp"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <Typography
              component="label"
              htmlFor="activate-rsvp"
              sx={{ color: "#fff", fontWeight: 500 }}
            >
              Activate RSVP Service
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#A0A0A0",
            }}
          >
            Easily manage your guest list, send invites, and track responses in
            real time.{" "}
            <Typography
              component="span"
              sx={{ fontWeight: 600, color: "#fff" }}
            >
              Extra Fee: AED 500
            </Typography>
          </Typography>
        </Stack>
      </Stack>

      {/* Actions */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 3 }}
      >
        {/* Left side */}
        <BackBookingButton
          variant="outlined"
          onClick={() => navigate("/create-hosted-event?step=add-passengers")}
        >
          Back
        </BackBookingButton>

        {/* Right side */}
        <Stack direction="row" spacing={2}>
          {!isChecked && (
            <CancelBookingButton
              onClick={() => navigate("/create-hosted-event?step=review")}
            >
              Skip
            </CancelBookingButton>
          )}
          <NextButton
            disabled={!isChecked} // disable if not checked
            onClick={() => navigate("/create-hosted-event?step=review")}
          >
            Next
          </NextButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default RsvpSection;
