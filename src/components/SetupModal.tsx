import UserLogo from "../assets/user-logo.svg";
import { Loading } from "./icons";

type TSetupModalProps = {
  isModalOpen: boolean;
};

function SetupModal({ isModalOpen }: TSetupModalProps) {
  return (
    <div
      className={`${
        isModalOpen ? "fixed" : "hidden"
      } inset-0 h-full w-full bg-black bg-opacity-80`}
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="mx-11 flex flex-col items-center gap-4  rounded-3xl bg-white px-8 pb-8 pt-11">
          <div className="mx-8">
            <img src={UserLogo} alt="user logo" />
          </div>
          <h4 className="text-s text-center font-bold text-primary-500">
            Congratulations!
          </h4>
          <p className="mb-4 text-center text-sm font-regular leading-normal tracking-wider text-gray-900">
            Your account is ready to use. You will be redirected to the Home
            page in a few seconds..
          </p>
          <Loading />
        </div>
      </div>
    </div>
  );
}

export default SetupModal;
