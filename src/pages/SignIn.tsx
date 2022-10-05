/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from "react-router-dom";
import {
  Button,
  DividerWithText,
  EmailInput,
  icons,
  layouts,
  PasswordInput,
  SocialMediaButton,
} from "../components";
import { useApp } from "../contexts/AppContext";

function SignIn() {
  const app = useApp();

  const logUser = () => {
    app.logUser();
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-between px-6 pt-6 pb-12">
      <layouts.BackBarLayout />
      <h1 className="text-5xl font-bold">Login to your Account</h1>
      <div className="flex w-full flex-col items-center gap-8">
        <EmailInput />
        <PasswordInput />
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
        <Button
          // the button should be disabled if the user didn't provide
          // valid input. I disable it for testing purposes.
          // isDisabled
          // TODO: work on the disabled feature
          handleNextStep={logUser}
        >
          Sign in
        </Button>
        <Link
          to="/resetPassword"
          className="text-sm font-regular leading-normal tracking-wider text-primary-500"
        >
          Forget the password?
        </Link>
      </div>
      <div className="flex w-full flex-col items-center gap-5">
        <DividerWithText>or continue with</DividerWithText>
        <div className="flex w-full items-center gap-5 px-6">
          <SocialMediaButton submitHandler={logUser}>
            <icons.Facebook />
          </SocialMediaButton>
          <SocialMediaButton submitHandler={logUser}>
            <icons.Google />
          </SocialMediaButton>
          <SocialMediaButton submitHandler={logUser}>
            <icons.Apple />
          </SocialMediaButton>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="text-sm font-regular leading-normal tracking-wider text-gray-500">
          Don&apos;t have an account?
        </span>
        <Link
          to="/signUp"
          className="text-sm font-regular leading-normal tracking-wider text-primary-500"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
