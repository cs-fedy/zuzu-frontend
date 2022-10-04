import { useApp } from "../../contexts/AppContext";
import GenderStep from "./GenderStep";
import InterestStep from "./InterestStep";
import BirthdayStep from "./BirthdayStep";
import FillProfileStep from "./FillProfileStep";
import CreatePinStep from "./CreatePinStep";
import SetupFingerprintStep from "./SetupFingerprintStep";
import Stepper from "../Stepper";

function CompleteProfileScreen() {
  const app = useApp();

  const handleFinalStep = () => {
    setTimeout(() => app.completeAccount(), 2000);
  };

  const steps = [
    InterestStep,
    GenderStep,
    BirthdayStep,
    FillProfileStep,
    CreatePinStep,
    SetupFingerprintStep,
  ];

  return <Stepper handleFinalStep={handleFinalStep} stepsComponents={steps} />;
}

export default CompleteProfileScreen;
