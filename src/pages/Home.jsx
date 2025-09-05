import MerlionStepper from "@/components/merlin-stepper/MerlinStepper";

const steps = [
  { id: 1, label: "Select Package", isCompleted: true, isActive: false },
  { id: 2, label: "Passenger Details", isCompleted: true, isActive: false },
  { id: 3, label: "Add Personal Staff", isCompleted: true, isActive: false },
  { id: 4, label: "Review", isCompleted: false, isActive: true },
  { id: 5, label: "Confirmation", isCompleted: false, isActive: false },
];

export default function Home() {
  return (
    <div>
      <MerlionStepper
        steps={steps}
        handleStepClick={(stepId) => console.log("Step clicked:", stepId)}
      />
    </div>
  );
}
