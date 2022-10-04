import { useApp } from "../../contexts/AppContext";
import OnboardingOne from "../../assets/Onboarding-one.svg";
import OnboardingTwo from "../../assets/Onboarding-two.svg";
import OnboardingThree from "../../assets/Onboarding-three.svg";
import OnboardingSteps from "../OnboardingSteps";

function OnboardingScreen() {
  const app = useApp();

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

  const finalStepHandler = () => {
    app.setNotFirstTime();
  };

  return <OnboardingSteps steps={steps} handleFinalStep={finalStepHandler} />;
}

export default OnboardingScreen;
