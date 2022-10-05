import { Email } from "./icons";
import { InputLayout } from "./layouts";

function EmailInput() {
  return (
    <InputLayout>
      <Email color="fill-gray-500" />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="flex-1 border-0 bg-transparent text-sm font-regular leading-normal tracking-wider outline-none"
      />
    </InputLayout>
  );
}

export default EmailInput;
