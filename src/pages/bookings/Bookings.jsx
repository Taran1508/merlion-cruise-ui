import CruiseHeroSection from "@/components/cruise-hero-section/CruiseHeroSection";
import MerlionStepper from "@/components/merlin-stepper/MerlinStepper";
import useResponsive from "@/hooks/UseResponsive";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import {
  useParams,
  useSearchParams,
  Navigate,
  useNavigate,
} from "react-router-dom";
import ReviewBooking from "./pages/ReviewBooking";
import CompletedBooking from "./pages/CompletedBooking";
import { useTheme } from "@mui/material/styles";

const initialSteps = [
  {
    id: 1,
    label: "Select Package",
    statusValue: "package",
    isCompleted: true,
    isActive: false,
  },
  {
    id: 2,
    label: "Passenger Details",
    statusValue: "passenger",
    isCompleted: true,
    isActive: false,
  },
  {
    id: 3,
    label: "Add Personal Staff",
    statusValue: "staff",
    isCompleted: true,
    isActive: false,
  },
  {
    id: 4,
    label: "Review",
    statusValue: "review",
    isCompleted: false,
    isActive: true,
  },
  {
    id: 5,
    label: "Confirmation",
    statusValue: "completed",
    isCompleted: false,
    isActive: false,
  },
];

const STATUS_COMPONENT_MAP = {
  review: ReviewBooking,
  completed: CompletedBooking,
  // confirmed: ConfirmedBooking,
  // cancelled: CancelledBooking,
};

export default function Bookings() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const { id } = useParams(); //for fetching booking details
  const [searchParams, setSearchParams] = useSearchParams();
  const theme = useTheme();
  const status = searchParams.get("status");
  const navigate = useNavigate();

  const PageComponent = STATUS_COMPONENT_MAP[status];

  useEffect(() => {
    if (!status) return;

    const stepFromStatus = initialSteps.find(
      (step) => step.statusValue === status
    );

    if (!stepFromStatus) return;

    const updatedSteps = initialSteps.map((s) => {
      if (s.id < stepFromStatus.id)
        return { ...s, isCompleted: true, isActive: false };
      if (s.id === stepFromStatus.id)
        return { ...s, isCompleted: false, isActive: true };
      return { ...s, isCompleted: false, isActive: false };
    });

    setSteps(updatedSteps);
  }, [status]);

  // if (!PageComponent) {
  //   return <Navigate to="/not-found" replace />;
  // }

  const [steps, setSteps] = useState(initialSteps);

  const handleStepClick = (stepId) => {
    const clickedStep = steps.find((s) => s.id === stepId);
    if (!clickedStep) return;

    setSearchParams({ status: clickedStep.statusValue });
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
    <Stack sx={{ display: "flex", flexDirection: "column" }}>
      {/* Cruise Hero Section  */}
      <CruiseHeroSection
        image={"/src/assets/f1.jpg"}
        title={"Merlion Cruise - CN01245"}
        subTitle={
          "Experience the ultimate night cruise with live entertainment, shisha under the stars, and lounges made for indulgence. Merlion Cruise — where every night feels endless."
        }
        onBack={() => window.history.back()}
      />

      {/* Main Container */}
      <Stack
        sx={{
          alignItems: "center",
          width: "100%",
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        {/* Merlion Stepper - 1 */}

        <Stack sx={{ mt: 4, width: "100%" }}>
          <MerlionStepper steps={steps} handleStepClick={handleStepClick} />
        </Stack>

        {/* PageComponent */}
        <PageComponent />
      </Stack>
    </Stack>
  );
}
