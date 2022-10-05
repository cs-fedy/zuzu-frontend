import { useApp } from "../../contexts/AppContext";
import OnboardingOne from "../../assets/Onboarding-one.svg";
import OnboardingTwo from "../../assets/Onboarding-two.svg";
import OnboardingThree from "../../assets/Onboarding-three.svg";
import OnboardingStep from "../OnboardingStep";
import { useOnboarding } from "../../hooks";

const steps = [
  {
    description: "Watch interesting videos from around the world",
    cover: OnboardingOne,
  },
  {
    description: "Find your friends and play together on social media",
    cover: OnboardingTwo,
  },
  {
    description: "Let's have fun with your friends & zuzu right now!",
    cover: OnboardingThree,
  },
];

function OnboardingScreen() {
  const app = useApp();

  const {
    currentOnboardIndex,
    totalOnboardings,
    currentOnboard,
    handleNextStep,
  } = useOnboarding({
    onboardings: steps,
    handleFinalStep() {
      app.setNotFirstTime();
    },
  });

  return (
    <OnboardingStep
      currentOnboardIndex={currentOnboardIndex}
      totalOnboardings={totalOnboardings}
      cover={currentOnboard.cover}
      description={currentOnboard.description}
      handleNextStep={handleNextStep}
    />
  );
}

export default OnboardingScreen;
