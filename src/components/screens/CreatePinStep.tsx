import { InputLayout } from "../layouts";

function CreatePinStep() {
  return (
    <>
      <p className="px-6 text-center text-lg font-medium leading-normal tracking-wider">
        Add a PIN number to make your account more secure.
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
    </>
  );
}

export default CreatePinStep;
