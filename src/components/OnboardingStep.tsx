import Button from "./Button";

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

type TOnboardingStep = {
  cover: string;
  description: string;
  currentOnboardIndex: number;
  totalOnboardings: number;
  handleNextStep: () => void;
};

function OnboardingStep({
  cover,
  description,
  currentOnboardIndex,
  totalOnboardings,
  handleNextStep,
}: TOnboardingStep) {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="my-12">
          <img src={cover} alt="onboarding one" />
        </div>
        <div className="flex w-full flex-col items-center gap-10 py-6 px-4">
          <h2 className="mx-6 text-center text-4xl font-bold">{description}</h2>
          <div className="flex items-center gap-2">
            {new Array(totalOnboardings).fill(0).map((_, index) => (
              <Dot key={index} isCurrentStep={index === currentOnboardIndex} />
            ))}
          </div>
          <Button handleNextStep={handleNextStep}>next</Button>
        </div>
      </div>
    </div>
  );
}

export default OnboardingStep;
