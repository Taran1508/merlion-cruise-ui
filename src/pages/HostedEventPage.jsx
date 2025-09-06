import FileDropzone from "@/components/file-drop-zone/FileDropzone";
import MerlionStepper from "@/components/merlin-stepper/MerlinStepper";
import { Box, Typography, Stack, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { styled } from "@mui/material";
import UploadSection from "@/components/upload-section/UploadSection";
import RsvpSection from "@/components/rsvps-section/RsvpSection";

// Cancel Booking (red outline)
export const CancelBookingButton = styled(Button)(({ theme }) => ({
  flex: "0 0 auto",
  borderRadius: "999px",
  border: `1px solid #4D4D4D `,
  color: "#fff",
  textTransform: "none",
  backgroundColor: "#202020",
  fontWeight: 500,
  fontSize: "14px",
  width: "160px",
  padding: theme.spacing(1, 0),
  "&:hover": {
    backgroundColor: "transparent",
    borderColor: "#202020   ",
  },
  [theme.breakpoints.down("md")]: {
    alignSelf: "center",
    width: "120px",
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    alignSelf: "center",
    width: "110px",
    fontSize: "10px",
  },
}));

export const BackBookingButton = styled(Button)(({ theme }) => ({
  flex: "0 0 auto",
  borderRadius: "16px",
  border: `1px solid #4D4D4D`,
  color: theme.palette.common.white,
  textTransform: "none",
  backgroundColor: "transparent",
  fontWeight: 500,
  fontSize: "14px",
  maxWidth: "120px",
  width: "100%",
  padding: theme.spacing(1, 0),
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.03)",
    borderColor: "rgba(255,255,255,0.24)",
  },
  [theme.breakpoints.down("md")]: {
    alignSelf: "center",
    width: "110px",
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    alignSelf: "center",
    width: "100px",
    fontSize: "10px",
  },
}));

// Next (blue gradient)
export const NextButton = styled(Button)(({ theme }) => ({
  flex: "0 0 auto",
  borderRadius: "999px",
  textTransform: "none",
  fontWeight: 500,
  fontSize: "14px",
  width: "155px",
  padding: theme.spacing(1, 0),
  backgroundColor: "#838383", // solid gray
  color: "#000",
  border: "none",
  "&:hover": {
    backgroundImage: "linear-gradient(90deg, #6f6f6f, #a0a0a0)", // subtle hover gradient
  },
  "&.Mui-disabled": {
    backgroundImage: "none",
    backgroundColor: "#444444",
    color: "#000",
  },

  [theme.breakpoints.down("md")]: {
    alignSelf: "center",
    width: "120px",
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    alignSelf: "center",
    width: "110px",
    fontSize: "10px",
  },
}));

const initialSteps = [
  {
    id: 1,
    label: "Booking Details",
    key: "booking-details",
    isCompleted: true,
    isActive: false,
  },
  {
    id: 2,
    label: "Add Passenger",
    key: "add-passengers",
    isCompleted: false,
    isActive: true,
  },
  { id: 3, label: "RSVP'S", key: "rsvps", isCompleted: false, isActive: false },
  {
    id: 4,
    label: "Review",
    key: "review",
    isCompleted: false,
    isActive: false,
  },
  {
    id: 5,
    label: "Confirmation",
    key: "confirmation",
    isCompleted: false,
    isActive: false,
  },
];

const HostedEventPage = () => {
  const [searchParams] = useSearchParams();
  const step = searchParams.get("step");
  const [stepUp, setStepUp] = useState(initialSteps);
  const [uploadedFile, setUploadedFile] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/create-hosted-event?step=rsvps");
  };

  useEffect(() => {
    const currentIndex = initialSteps.findIndex((s) => s.key === step);

    const updatedSteps = initialSteps.map((s, index) => {
      if (index < currentIndex) {
        return { ...s, isActive: false, isCompleted: true }; // previous steps completed
      } else if (index === currentIndex) {
        return { ...s, isActive: true, isCompleted: false }; // current step active
      } else {
        return { ...s, isActive: false, isCompleted: false }; // future steps inactive
      }
    });

    setStepUp(updatedSteps);
  }, [step]);

  const handleStepClick = (stepId) => {
    const clickedStep = stepUp.find((s) => s.id === stepId);
    if (!clickedStep) return;

    // Update URL to match the clicked step
    navigate(`/create-hosted-event?step=${clickedStep.key}`);

    // Update stepper state
    setStepUp((prev) =>
      prev.map((s, index) => {
        if (index < stepId - 1) {
          return { ...s, isActive: false, isCompleted: true }; // previous steps completed
        } else if (s.id === stepId) {
          return { ...s, isActive: true, isCompleted: false }; // clicked step active
        } else {
          return { ...s, isActive: false, isCompleted: false }; // future steps inactive
        }
      })
    );
  };

  useEffect(() => {
    const storedFile = localStorage.getItem("uploadedFile");
    if (storedFile) {
      const parsed = JSON.parse(storedFile);
      // Set a dummy File object to display in UploadSection
      setUploadedFile(parsed);
    }
  }, []);
  // Save file to localStorage
  const saveFileToLocalStorage = (file) => {
    if (!file) {
      localStorage.removeItem("uploadedFile");
      return;
    }
    const fileData = {
      name: file.name,
      size: file.size,
      type: file.type,
    };
    localStorage.setItem("uploadedFile", JSON.stringify(fileData));
  };

  return (
    <>
      <MerlionStepper steps={stepUp} handleStepClick={handleStepClick} />

      {step === "add-passengers" && (
        <Box
          sx={{
            width: "100%",
            mt: { xs: 4, sm: 6, md: 5 },
            px: { xs: 2, sm: 4, md: 6 },
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: "14px", sm: "16px", md: "20px" },
              color: "#A0A0A0",
            }}
          >
            Add Passengers
          </Typography>

          {/* File Upload */}
          {!uploadedFile ? (
            <FileDropzone
              file={uploadedFile}
              onFilesAccepted={(files) => {
                if (files && files.length > 0) {
                  setUploadedFile(files[0]);
                  saveFileToLocalStorage(files[0]); // persist in localStorage
                } else {
                  setUploadedFile(null);
                  saveFileToLocalStorage(null); // clear if removed
                }
              }}
            />
          ) : (
            <UploadSection
              file={uploadedFile}
              onRemove={() => {
                setUploadedFile(null);
                saveFileToLocalStorage(null);
              }}
            />
          )}

          {/* Actions */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 3 }}
          >
            {/* Left side */}
            <BackBookingButton variant="outlined">Back</BackBookingButton>

            {/* Right side */}
            <Stack direction="row" spacing={2}>
              <CancelBookingButton>Cancel Booking</CancelBookingButton>
              <NextButton disabled={!uploadedFile} onClick={handleNavigate}>
                Next
              </NextButton>
            </Stack>
          </Stack>
        </Box>
      )}
      {step === "rsvps" && <RsvpSection />}
    </>
  );
};

export default HostedEventPage;
