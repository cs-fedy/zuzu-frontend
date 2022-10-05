import ResetPasswordIllustration from "../../assets/reset-password.svg";
import { GradientEmail, GradientSMS } from "../icons";

function ChooseResetMethod() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-6">
      <div className="mx-20">
        <img
          src={ResetPasswordIllustration}
          alt="reset password illustration"
        />
      </div>
      <p className="px-6 text-lg font-medium leading-normal tracking-wider">
        Select which contact details should we use to reset your password
      </p>
      <div className="flex w-full justify-center px-6">
        <div className="flex w-full items-center gap-4 rounded-full border-4 border-primary-500 px-4 py-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red bg-opacity-10">
            <GradientSMS />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium leading-normal tracking-wider text-gray-600">
              via SMS:
            </span>
            <span className="text-base font-bold leading-normal tracking-wider text-gray-900">
              +1 111 ******99
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center px-6">
        <div className="flex w-full items-center gap-4 rounded-full border border-gray-200 px-4 py-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red bg-opacity-10">
            <GradientEmail />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium leading-normal tracking-wider text-gray-600">
              via Email:
            </span>
            <span className="text-base font-bold leading-normal tracking-wider text-gray-900">
              and@domain.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseResetMethod;
