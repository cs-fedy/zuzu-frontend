import { useState } from "react";
import Button from "./Button";
import OnboardingStep from "./OnboardingStep";

type TDotProps = {
  isCurrentStep: boolean;
};

function Dot({ isCurrentStep }: TDotProps) {
  if (isCurrentStep)
    return (
      <span className="h-2 w-8 rounded-full bg-gradient-to-br from-primary-300 to-primary-500" />
    );
  return <span className="h-2 w-2 rounded-full bg-gray-300" />;
}

type TStep = {
  cover: string;
  description: string;
  id: string;
};

type TOnboardingStepsProps = {
  handleFinalStep: () => void;
  steps: Array<TStep>;
};

function OnboardingSteps({ steps, handleFinalStep }: TOnboardingStepsProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = steps.length;

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));

    if (currentStep === totalSteps - 1) {
      handleFinalStep();
    }
  };

  return (
    <div className="flex h-screen justify-center py-16">
      <div className="flex w-full flex-col items-center justify-between">
        {steps.map((step, index) => (
          <OnboardingStep
            isCurrentBoard={index === currentStep}
            key={step.id}
            description={step.description}
            cover={step.cover}
          />
        ))}
        <div className="flex w-full flex-col items-center gap-4 px-10">
          <div className="flex gap-2">
            {steps.map((board, index) => (
              <Dot key={index} isCurrentStep={index === currentStep} />
            ))}
          </div>
          <Button handleNextStep={handleNextStep}>next</Button>
        </div>
      </div>
    </div>
  );
}

export default OnboardingSteps;
