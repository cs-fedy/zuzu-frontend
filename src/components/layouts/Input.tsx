import { ReactNode } from "react";

type TInputLayoutProps = {
  children: ReactNode;
};

function InputLayout({ children }: TInputLayoutProps) {
  return (
    <div className="w-full rounded-xl bg-gray-50 px-5">
      <div className="flex items-center justify-between gap-3 py-5 text-gray-500">
        {children}
      </div>
    </div>
  );
}

export default InputLayout;
