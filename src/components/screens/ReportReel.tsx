import { useState } from "react";
import Button from "../Button";
import { Back } from "../icons";
import SecondaryButton from "../SecondaryButton";

type TReasonItemProps = {
  reason: string;
  selected: boolean;
  toggleSelected: (reason: string) => void;
  reasonIndex: number;
};

function ReasonItem({
  reason,
  selected,
  toggleSelected,
  reasonIndex,
}: TReasonItemProps) {
  return (
    <li className="flex items-center gap-3">
      <input
        id={`reason_${reasonIndex}`}
        type="radio"
        checked={selected}
        onClick={() => toggleSelected(reason)}
      />
      <label
        htmlFor={`reason_${reasonIndex}`}
        className="text-lg font-medium leading-normal tracking-wide text-gray-900"
      >
        {reason}
      </label>
    </li>
  );
}

type TReportReelProps = {
  handleClose: () => void;
};

function ReportReel({ handleClose }: TReportReelProps) {
  const [reasons, setReasons] = useState([
    { reason: "Dangerous organizations/individuals", selected: false },
    { reason: "Frauds & Scams", selected: false },
    { reason: "Misleading Information", selected: true },
    { reason: "Illegal activities or regulated goods", selected: false },
    { reason: "Violent & graphic contents", selected: false },
    { reason: "Animal Cruelty", selected: false },
    { reason: "Pornography & nudity", selected: false },
    { reason: "Hate Speech", selected: false },
    { reason: "Harrashment or bullying", selected: false },
    { reason: "Intelectual property infringement", selected: false },
    { reason: "spam", selected: false },
    { reason: "Minor Safety", selected: false },
    { reason: "others", selected: false },
  ]);

  const toggleSelected = (reason: string) => {
    setReasons((prev) => {
      return prev.map((current) => {
        if (current.reason === reason)
          return { ...current, selected: !current.selected };
        return current;
      });
    });
  };

  return (
    <div className="fixed inset-0 isolate z-20 bg-white">
      <div className="flex h-screen w-full flex-col items-center justify-between gap-12 px-6 py-8">
        <div className="flex w-full items-center justify-start gap-3 py-3">
          <button type="button" onClick={handleClose}>
            <Back />
          </button>
          <div className="text-lg font-bold text-gray-900">24.8K Comments</div>
        </div>
        <div className="flex w-full flex-1 flex-col gap-6 py-6">
          <span className="text-lg font-medium leading-normal tracking-wide text-gray-900">
            select a reason
          </span>
          <ul className="flex flex-col gap-4">
            {reasons.map((reason, index) => (
              <ReasonItem
                key={reason.reason}
                reason={reason.reason}
                selected={reason.selected}
                toggleSelected={toggleSelected}
                reasonIndex={index}
              />
            ))}
          </ul>
        </div>
        <div className="flex w-full items-center justify-between gap-3">
          <SecondaryButton handleNextStep={handleClose}>cancel</SecondaryButton>
          <Button handleNextStep={handleClose}>submit</Button>
        </div>
      </div>
    </div>
  );
}

export default ReportReel;
