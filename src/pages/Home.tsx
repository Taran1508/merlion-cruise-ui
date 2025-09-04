import MerlionStepper from "@/components/merlin-stepper/MerlinStepper";
import type { StepItem } from "@/types/stepItem";
import { Stack } from "@mui/material";
import { useState } from "react";

const initialSteps: StepItem[] = [
  { id: 1, label: "Select Package", isCompleted: true, isActive: false },
  { id: 2, label: "Passenger Details", isCompleted: true, isActive: false },
  { id: 3, label: "Add Personal Staff", isCompleted: true, isActive: false },
  { id: 4, label: "Review", isCompleted: false, isActive: true },
  { id: 5, label: "Confirmation", isCompleted: false, isActive: false },
];

export default function Home() {
  const [steps, setSteps] = useState<StepItem[]>(initialSteps);

  const handleStepClick = (stepId: number) => {
    setSteps((prev) =>
      prev.map((s) => {
        if (s.id < stepId) return { ...s, isCompleted: true, isActive: false };
        if (s.id === stepId)
          return { ...s, isCompleted: false, isActive: true };
        return { ...s, isCompleted: false, isActive: false };
      })
    );
  };

  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        my: 10,
      }}
    >
      <MerlionStepper steps={steps} handleStepClick={handleStepClick} />
    </Stack>
  );
}
