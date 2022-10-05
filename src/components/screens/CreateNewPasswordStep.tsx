/* eslint-disable jsx-a11y/label-has-associated-control */
import CreateNewPasswordIllustration from "../../assets/create-new-password.svg";
import { InputLayout } from "../layouts";
import { Hide, Lock } from "../icons";

function CreateNewPassword() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-6">
      <div className="mx-12">
        <img src={CreateNewPasswordIllustration} alt="create new password" />
      </div>
      <div className="flex w-full flex-col items-center gap-5">
        <p className="flex w-full justify-start text-lg font-medium leading-normal tracking-wider">
          Create Your New Password
        </p>
        <InputLayout>
          <Lock color="fill-gray-500" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="flex-1 bg-transparent text-sm font-regular leading-normal tracking-wider outline-none"
          />
          <Hide color="fill-gray-500" />
        </InputLayout>
        <InputLayout>
          <Lock color="fill-gray-500" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            className="flex-1 bg-transparent text-sm font-regular leading-normal tracking-wider outline-none"
          />
          <Hide color="fill-gray-500" />
        </InputLayout>
        <div className="flex items-center">
          {/* TODO: customize this later */}
          <input id="remember-me" type="checkbox" className="h-6 w-6" />
          <label
            htmlFor="remember-me"
            className="ml-4 text-sm font-semi-bold leading-normal tracking-wider text-gray-900"
          >
            Remember me
          </label>
        </div>
      </div>
    </div>
  );
}

export default CreateNewPassword;
