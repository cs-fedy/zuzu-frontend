import { ReactElement } from "react";

type TReelActionProps = {
  icon: ReactElement;
  content?: string;
  action: () => void;
};

function ReelAction({ icon, content = "", action }: TReelActionProps) {
  return (
    <button
      type="button"
      onClick={action}
      className="flex flex-col items-center gap-2"
    >
      {icon}
      <span className="text-xs font-medium tracking-wide text-white">
        {content}
      </span>
    </button>
  );
}

export default ReelAction;
