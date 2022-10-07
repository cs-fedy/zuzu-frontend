import { ReactNode } from "react";
import Button from "../Button";
import SecondaryButton from "../SecondaryButton";
import BackBarLayout from "./BackBar";

type TStepLayoutProps = {
  title: string;
  children: ReactNode;
  nextStepHandler: () => void;
  canSkip?: boolean;
  skipHandler?: () => void;
};

function StepLayout({
  title,
  children,
  nextStepHandler,
  canSkip = false,
  skipHandler = () => {},
}: TStepLayoutProps) {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-between gap-12 px-6 py-8">
      <BackBarLayout>{title}</BackBarLayout>
      <div className="flex w-full flex-col gap-6 py-6">{children}</div>
      <div className="flex w-full items-center justify-between gap-3">
        {canSkip && (
          <SecondaryButton handleNextStep={skipHandler}>skip</SecondaryButton>
        )}
        <Button handleNextStep={nextStepHandler}>continue</Button>
      </div>
    </div>
  );
}

export default StepLayout;
