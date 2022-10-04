import { InputLayout, StepLayout } from "../layouts";

type TConfirmationCodeStepProps = {
  handleNextStep: () => void;
};

function ConfirmationCode({ handleNextStep }: TConfirmationCodeStepProps) {
  const submitHandler = () => {
    // do special thing related to this step
    handleNextStep();
  };

  return (
    <StepLayout title="Forgot Password" nextStepHandler={submitHandler}>
      <div className="flex w-full flex-col items-center justify-between gap-6">
        <p className="px-6 text-center text-lg font-medium leading-normal tracking-wider">
          Code has been send to +1 111 ******99
        </p>
        <div className="flex w-full items-center gap-2 px-6">
          <InputLayout>
            <input
              type="password"
              name="code-pin-1"
              maxLength={1}
              className="w-4 border-0 bg-transparent text-sm font-regular leading-normal tracking-wider outline-none"
            />
          </InputLayout>
          <InputLayout>
            <input
              type="password"
              name="code-pin-2"
              maxLength={1}
              className="w-4 border-0 bg-transparent text-sm font-regular leading-normal tracking-wider outline-none"
            />
          </InputLayout>
          <InputLayout>
            <input
              type="password"
              name="code-pin-3"
              maxLength={1}
              className="w-4  border-0 bg-transparent text-sm font-regular leading-normal tracking-wider outline-none"
            />
          </InputLayout>
          <InputLayout>
            <input
              type="password"
              name="code-pin-4"
              maxLength={1}
              className="w-4 border-0 bg-transparent text-sm font-regular leading-normal tracking-wider outline-none"
            />
          </InputLayout>
        </div>
        <p className="px-6 text-center text-lg font-medium leading-normal tracking-wider">
          Resend code in <span className="text-primary-500">53</span> s
        </p>
      </div>
    </StepLayout>
  );
}

export default ConfirmationCode;
