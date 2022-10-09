import { ReactNode } from "react";

type TReelPanelLayoutProps = {
  children: ReactNode;
  handleClose: () => void;
  title: string;
};

function ReelPanelLayout({
  children,
  handleClose,
  title,
}: TReelPanelLayoutProps) {
  return (
    <div className="absolute inset-0 isolate z-20 flex flex-col justify-end bg-dark-1 bg-opacity-70">
      <div className="my-2 flex flex-col items-center justify-between gap-6 rounded-t-3xl border border-gray-100 bg-white px-6 pt-2 pb-12">
        <div className="h-1 w-10 border border-gray-200 bg-gray-100" />
        <button type="button" onClick={handleClose}>
          <h4 className="text-2xl font-bold leading-tight">{title}</h4>
        </button>
        <div className="w-full border-t border-gray-600/30" />
        {children}
      </div>
    </div>
  );
}

export default ReelPanelLayout;
