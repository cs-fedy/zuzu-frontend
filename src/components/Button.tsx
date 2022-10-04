import { ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
  handleNextStep: () => void;
  isDisabled?: boolean;
};

function Button({
  children,
  handleNextStep,
  isDisabled = false,
}: TButtonProps) {
  return (
    <button
      disabled={isDisabled}
      onClick={handleNextStep}
      className={`w-full rounded-full ${
        isDisabled ? "bg-disabled-button" : "bg-primary-500"
      } px-5 py-4 text-base font-bold leading-normal tracking-wider text-white drop-shadow-md`}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
