import { ReactNode } from "react";

type TSocialMediaButtonProps = {
  children: ReactNode;
};

function SocialMediaButton({ children }: TSocialMediaButtonProps) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-3 rounded-2xl border border-gray-400/50 px-5 py-4 "
    >
      {children}
    </button>
  );
}

export default SocialMediaButton;
