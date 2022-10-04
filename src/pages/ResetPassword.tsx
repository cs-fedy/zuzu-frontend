import { useNavigate } from "react-router-dom";
import { Stepper, screens } from "../components";

function ResetPassword() {
  const navigate = useNavigate();

  const handleFinalStep = () => {
    setTimeout(() => navigate("/signIn"), 2000);
  };

  const steps = [
    screens.ChooseResetMethodStep,
    screens.ConfirmationCodeStep,
    screens.CreateNewPasswordStep,
  ];

  return <Stepper handleFinalStep={handleFinalStep} stepsComponents={steps} />;
}

export default ResetPassword;
