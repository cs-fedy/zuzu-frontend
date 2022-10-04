import { ReactNode } from "react";

type TSocialMediaButtonProps = {
  children: ReactNode;
  submitHandler: () => void;
};

function SocialMediaButton({
  children,
  submitHandler,
}: TSocialMediaButtonProps) {
  return (
    <button
      type="button"
      onClick={submitHandler}
      className="flex w-full items-center justify-center gap-3 rounded-2xl border border-gray-400/50 px-5 py-4 "
    >
      {children}
    </button>
  );
}

export default SocialMediaButton;
