import { useState, FC, useEffect } from "react";
import UserLogo from "../assets/user-logo.svg";
import { Loading } from "./icons";

type TStepProps = {
  handleNextStep: () => void;
};

type TStepperProps = {
  stepsComponents: Array<FC<TStepProps>>;
  handleFinalStep: () => void;
};

function Stepper({ stepsComponents, handleFinalStep }: TStepperProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const Step = stepsComponents[currentStep];

  useEffect(() => {
    if (isOpen) handleFinalStep();
  }, [handleFinalStep, isOpen]);

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, stepsComponents.length - 1));
    if (currentStep === stepsComponents.length - 1) {
      setIsOpen(true);
    }
  };

  return (
    <div>
      <Step handleNextStep={handleNextStep} />
      <div
        className={`${
          isOpen ? "fixed" : "hidden"
        } inset-0 h-full w-full bg-black bg-opacity-80`}
      >
        <div className="flex h-full w-full items-center justify-center">
          <div className="mx-11 flex flex-col items-center gap-4  rounded-3xl bg-white px-8 pb-8 pt-11">
            <div className="mx-8">
              <img src={UserLogo} alt="user logo" />
            </div>
            <h4 className="text-s text-center font-bold text-primary-500">
              Congratulations!
            </h4>
            <p className="mb-4 text-center text-sm font-regular leading-normal tracking-wider text-gray-900">
              Your account is ready to use. You will be redirected to the Home
              page in a few seconds..
            </p>
            <Loading />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stepper;
