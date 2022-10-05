import { useState } from "react";
import { useApp } from "../contexts/AppContext";
import { screens, SetupModal } from "../components";
import { useSteps } from "../hooks";
import { StepLayout } from "../components/layouts";

const steps = [
  {
    step: <screens.InterestStep />,
    title: "Choose Your Interest",
    canSkip: true,
  },
  {
    step: <screens.GenderStep />,
    title: "Tell Us About Yourself",
    canSkip: true,
  },
  {
    step: <screens.BirthdayStep />,
    title: "When is Your Birthday?",
    canSkip: true,
  },
  {
    step: <screens.FillProfileStep />,
    title: "Fill Your Profile",
    canSkip: true,
  },
  {
    step: <screens.CreatePinStep />,
    title: "Create New PIN",
    canSkip: false,
  },
  {
    step: <screens.SetupFingerPrintStep />,
    title: "Set Your Fingerprint",
    canSkip: true,
  },
];

function CompleteProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const app = useApp();

  const { currentStep, handleNextStep, skipStep } = useSteps({
    steps,
    handleFinalStep() {
      setIsOpen(true);
      setTimeout(() => app.completeAccount(), 2000);
    },
  });

  return (
    <>
      <SetupModal isModalOpen={isOpen} />
      <StepLayout
        title={currentStep.title}
        nextStepHandler={handleNextStep}
        canSkip={currentStep.canSkip}
        skipHandler={skipStep}
      >
        {currentStep.step}
      </StepLayout>
    </>
  );
}

export default CompleteProfile;
