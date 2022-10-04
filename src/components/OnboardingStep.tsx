type TOnboardingStep = {
  cover: string;
  description: string;
  isCurrentBoard: boolean;
};

function OnboardingStep({
  cover,
  description,
  isCurrentBoard,
}: TOnboardingStep) {
  return (
    <div
      className={`w-full flex-col items-center justify-between gap-6 ${
        isCurrentBoard ? "flex" : "hidden"
      }`}
    >
      <div className="mx-16">
        <img src={cover} alt="onboarding one" />
      </div>
      <h2 className="mx-6 text-center text-4xl font-bold">{description}</h2>
    </div>
  );
}

export default OnboardingStep;
