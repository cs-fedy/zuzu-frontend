import { ReactNode } from "react";
import { Back } from "../icons";

type TBackBarLayoutProps = {
  children?: ReactNode;
};

function BackBarLayout({ children }: TBackBarLayoutProps) {
  return (
    <div className="flex w-full items-center justify-start gap-3 py-3">
      <Back />
      <div className="text-lg font-bold text-gray-900">{children}</div>
    </div>
  );
}

export default BackBarLayout;
