import FileDropzone from "@/components/file-drop-zone/FileDropzone";
import MerlionStepper from "@/components/merlin-stepper/MerlinStepper";
import { Box, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import UploadSection from "@/components/upload-section/UploadSection";
import RsvpSection from "@/components/rsvps-section/RsvpSection";
import {
  CancelBookingButton,
  BackBookingButton,
  NextButton,
} from "../styles/hosted-event.styles";

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
      if (index < currentIndex)
        return { ...s, isActive: false, isCompleted: true };
      if (index === currentIndex)
        return { ...s, isActive: true, isCompleted: false };
      return { ...s, isActive: false, isCompleted: false };
    });
    setStepUp(updatedSteps);
  }, [step]);

  const handleStepClick = (stepId) => {
    const clickedStep = stepUp.find((s) => s.id === stepId);
    if (!clickedStep) return;
    navigate(`/create-hosted-event?step=${clickedStep.key}`);
    setStepUp((prev) =>
      prev.map((s, index) => {
        if (index < stepId - 1)
          return { ...s, isActive: false, isCompleted: true };
        if (s.id === stepId)
          return { ...s, isActive: true, isCompleted: false };
        return { ...s, isActive: false, isCompleted: false };
      })
    );
  };

  useEffect(() => {
    const storedFile = localStorage.getItem("uploadedFile");
    if (storedFile) setUploadedFile(JSON.parse(storedFile));
  }, []);

  const saveFileToLocalStorage = (file) => {
    if (!file) return localStorage.removeItem("uploadedFile");
    const fileData = { name: file.name, size: file.size, type: file.type };
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
                  saveFileToLocalStorage(files[0]);
                } else {
                  setUploadedFile(null);
                  saveFileToLocalStorage(null);
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
            <BackBookingButton variant="outlined">Back</BackBookingButton>
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
