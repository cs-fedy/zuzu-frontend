import { useState } from "react";

type OnboardingDetail = {
  cover: string;
  description: string;
};

type TUseOnboardingProps = {
  onboardings: Array<OnboardingDetail>;
  handleFinalStep: () => void;
};

function useOnboarding({ onboardings, handleFinalStep }: TUseOnboardingProps) {
  const [currentOnboardIndex, setCurrentOnboardIndex] = useState(0);

  const handleNextStep = () => {
    setCurrentOnboardIndex((prev) =>
      Math.min(prev + 1, onboardings.length - 1)
    );

    if (currentOnboardIndex === onboardings.length - 1) {
      handleFinalStep();
    }
  };

  return {
    currentOnboardIndex,
    totalOnboardings: onboardings.length,
    currentOnboard: onboardings[currentOnboardIndex],
    handleNextStep,
  };
}

export default useOnboarding;
