import React from "react";
import useResponsive from "@/hooks/UseResponsive";
import {
  StepperContainer,
  StepItem,
  StepLabel,
  ChevronWrapper,
  ChevronIcon,
  MobileStepIndicator,
  MobileDot,
} from "./merlin-stepper.styles";

interface Step {
  id: number;
  label: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface MerlionStepperProps {
  steps: Step[];
  handleStepClick: (stepId: number) => void;
}

const ChevronRight: React.FC = () => (
  <ChevronIcon
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.33331 5L12.7441 9.41074C13.0695 9.73618 13.0695 10.2638 12.7441 10.5893L8.33331 15" />
  </ChevronIcon>
);

const MerlionStepper: React.FC<MerlionStepperProps> = ({
  steps,
  handleStepClick,
}) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const handleStepItemClick = (step: Step) => {
    // Allow clicking on completed steps or the current active step
    if (step.isCompleted || step.isActive) {
      handleStepClick(step.id);
    }
  };

  return (
    <>
      <StepperContainer
        ismobile={isMobile}
        istablet={isTablet}
        isdesktop={isDesktop}
        direction="row"
      >
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <StepItem
              ismobile={isMobile}
              istablet={isTablet}
              isdesktop={isDesktop}
              isactive={step.isActive}
              iscompleted={step.isCompleted}
              isclickable={step.isCompleted || step.isActive}
              onClick={() => handleStepItemClick(step)}
            >
              <StepLabel
                ismobile={isMobile}
                istablet={isTablet}
                isdesktop={isDesktop}
                isactive={step.isActive}
                iscompleted={step.isCompleted}
              >
                {step.label}
              </StepLabel>
            </StepItem>

            {/* Render chevron between steps (not after last step) */}
            {index < steps.length - 1 && (
              <ChevronWrapper
                ismobile={isMobile}
                istablet={isTablet}
                isdesktop={isDesktop}
              >
                <ChevronRight />
              </ChevronWrapper>
            )}
          </React.Fragment>
        ))}
      </StepperContainer>

      {/* Mobile step indicators (dots) */}
      <MobileStepIndicator
        ismobile={isMobile}
        istablet={isTablet}
        isdesktop={isDesktop}
      >
        {steps.map((step) => (
          <MobileDot
            key={`dot-${step.id}`}
            isactive={step.isActive}
            iscompleted={step.isCompleted}
          />
        ))}
      </MobileStepIndicator>
    </>
  );
};

export default MerlionStepper;
