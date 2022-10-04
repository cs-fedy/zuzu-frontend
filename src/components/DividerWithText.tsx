import { ReactNode } from "react";

type TDividerWithTextProps = {
  children: ReactNode;
};

function DividerWithText({ children }: TDividerWithTextProps) {
  return (
    <div className="relative flex w-full items-center py-2">
      <div className="flex-grow border-t border-gray-600/30" />
      <span className="mx-4 flex-shrink text-lg font-semi-bold leading-normal tracking-wider">
        {children}
      </span>
      <div className="flex-grow border-t border-gray-600/30" />
    </div>
  );
}

export default DividerWithText;
