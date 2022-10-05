import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { screens, SetupModal, layouts } from "../components";
import { useSteps } from "../hooks";

const steps = [
  {
    step: <screens.ChooseResetMethodStep />,
    title: "Forgot Password",
    canSkip: false,
  },
  {
    step: <screens.ConfirmationCodeStep />,
    title: "Forgot Password",
    canSkip: false,
  },
  {
    step: <screens.CreateNewPasswordStep />,
    title: "Create New Password",
    canSkip: false,
  },
];

function ResetPassword() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { currentStep, handleNextStep, skipStep } = useSteps({
    steps,
    handleFinalStep() {
      setIsOpen(true);
      setTimeout(() => navigate("/signIn"), 2000);
    },
  });

  return (
    <>
      <SetupModal isModalOpen={isOpen} />
      <layouts.StepLayout
        title={currentStep.title}
        nextStepHandler={handleNextStep}
        canSkip={currentStep.canSkip}
        skipHandler={skipStep}
      >
        {currentStep.step}
      </layouts.StepLayout>
    </>
  );
}

export default ResetPassword;
