/* eslint-disable jsx-a11y/label-has-associated-control */
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  DividerWithText,
  icons,
  layouts,
  SocialMediaButton,
} from "../components";

function SignUp() {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen justify-center py-6">
      <div className="flex w-full flex-col items-center justify-between">
        <layouts.BackBarLayout />
        <h1 className="mx-6 text-5xl font-bold">Create your Account</h1>
        <div className="flex w-full flex-col items-center gap-5 px-6">
          <layouts.InputLayout>
            <icons.Email color="fill-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="flex-1 border-0 bg-transparent text-sm font-regular leading-normal tracking-wider outline-none"
            />
          </layouts.InputLayout>
          <layouts.InputLayout>
            <icons.Lock color="fill-gray-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="flex-1 bg-transparent text-sm font-regular leading-normal tracking-wider outline-none"
            />
            <icons.Hide color="fill-gray-500" />
          </layouts.InputLayout>
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
            handleNextStep={handleSignUp}
          >
            Sign up
          </Button>
        </div>
        <div className="flex w-full flex-col items-center gap-5 px-6">
          <DividerWithText>or continue with</DividerWithText>
          <div className="flex w-full items-center gap-3 px-6">
            <SocialMediaButton>
              <icons.Facebook />
            </SocialMediaButton>
            <SocialMediaButton>
              <icons.Google />
            </SocialMediaButton>
            <SocialMediaButton>
              <icons.Apple />
            </SocialMediaButton>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="text-sm font-regular leading-normal tracking-wider text-gray-500">
            Already have an account?
          </span>
          <Link
            to="/signIn"
            className="text-sm font-regular leading-normal tracking-wider text-primary-500"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
