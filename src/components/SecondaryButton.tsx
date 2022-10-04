import { ReactNode } from "react";

type TSecondaryButtonProps = {
  children: ReactNode;
  handleNextStep: () => void;
};

function SecondaryButton({ children, handleNextStep }: TSecondaryButtonProps) {
  return (
    <button
      onClick={handleNextStep}
      className="w-full rounded-full  bg-primary-100 px-5 py-4 text-base font-bold leading-normal tracking-wider text-primary-500"
      type="button"
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
