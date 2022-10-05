import { useState } from "react";
import { InputLayout } from "./layouts";
import { Lock, Hide } from "./icons";

function PasswordInput() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleIsHidden = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <InputLayout>
      <Lock color="fill-gray-500" />
      <input
        type={isHidden ? "password" : "text"}
        name="password"
        placeholder="Password"
        className="flex-1 bg-transparent text-sm font-regular leading-normal tracking-wider outline-none"
      />
      <button type="button" onClick={toggleIsHidden}>
        <Hide color="fill-gray-500" />
      </button>
    </InputLayout>
  );
}

export default PasswordInput;
