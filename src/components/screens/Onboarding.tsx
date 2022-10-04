import { useNavigate } from "react-router-dom";

import OnboardingOne from "../../assets/Onboarding-one.svg";
import OnboardingTwo from "../../assets/Onboarding-two.svg";
import OnboardingThree from "../../assets/Onboarding-three.svg";
import OnboardingSteps from "../OnboardingSteps";

function OnboardingScreen() {
  const navigate = useNavigate();

  const steps = [
    {
      id: "14fe6464",
      description: "Watch interesting videos from around the world",
      cover: OnboardingOne,
    },
    {
      id: "4f088422",
      description: "Find your friends and play together on social media",
      cover: OnboardingTwo,
    },
    {
      id: "8422f9da",
      description: "Let's have fun with your friends & zuzu right now!",
      cover: OnboardingThree,
    },
  ];

  const finalStepHandler = () => navigate("/auth");
  return <OnboardingSteps steps={steps} handleFinalStep={finalStepHandler} />;
}

export default OnboardingScreen;
