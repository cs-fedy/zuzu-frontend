import { useState } from "react";
import StepLayout from "../layouts/Step";
import BirthdayCake from "../../assets/birthday-cake.svg";
import { InputLayout } from "../layouts";
import { Calendar } from "../icons";
import DatePicker from "../DatePicker";

function padNumber(value: number) {
  return value.toString().padStart(2, "0");
}

type TBirthdayStepProps = {
  handleNextStep: () => void;
};

function BirthdayStep({ handleNextStep }: TBirthdayStepProps) {
  const [birthDate, setBirthDate] = useState("mm/dd/yyy");
  const handleSubmit = () => {
    // do special thing related to this step
    handleNextStep();
  };

  const handleBirthDateChange = (year: number, month: number, day: number) =>
    setBirthDate(`${padNumber(month)}/${padNumber(day)}/${padNumber(year)}`);

  return (
    <StepLayout
      title="When is Your Birthday?"
      nextStepHandler={handleSubmit}
      canSkip
      skipHandler={handleNextStep}
    >
      <p className="px-6 text-lg font-medium leading-normal tracking-wider">
        Your birthday will not be shown to the public.
      </p>
      <div className="mx-28">
        <img src={BirthdayCake} alt="birthday cake" />
      </div>
      <div className="flex w-full flex-col items-center gap-5 px-6">
        <InputLayout>
          <input
            type="text"
            name="birthDate"
            placeholder="mm/dd/yyyy"
            disabled
            value={birthDate}
            className="flex-1 appearance-none border-0 bg-transparent text-sm font-regular leading-normal tracking-wider outline-none"
          />
          <Calendar />
        </InputLayout>
        <DatePicker handleChange={handleBirthDateChange} />
      </div>
    </StepLayout>
  );
}

export default BirthdayStep;
