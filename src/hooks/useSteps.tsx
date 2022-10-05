import { ReactElement, useState } from "react";

type StepDetails = {
  step: ReactElement;
  title: string;
  canSkip: boolean;
};

type TUseStepsProps = {
  steps: Array<StepDetails>;
  handleFinalStep: () => void;
};

function useSteps({ steps, handleFinalStep }: TUseStepsProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleNextStep = () => {
    setCurrentStepIndex((prev) => Math.min(prev + 1, steps.length - 1));

    if (currentStepIndex === steps.length - 1) {
      handleFinalStep();
    }
  };

  return {
    currentStepIndex,
    totalSteps: steps.length,
    currentStep: steps[currentStepIndex],
    handleNextStep,
    skipStep: handleNextStep,
  };
}

export default useSteps;
