import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  DividerWithText,
  icons,
  layouts,
  screens,
  SocialMediaButton,
} from "../components";
import { useApp } from "../contexts/AppContext";
import LetsIn from "../assets/lets-in.svg";

function Auth() {
  const app = useApp();
  const navigate = useNavigate();

  const handleSignInPassword = () => {
    navigate("/signIn");
  };

  const logUser = () => {
    app.logUser();
  };

  if (app.isFirstTime) return <screens.OnboardingScreen />;

  return (
    <div className="flex justify-center px-6 pt-6 pb-12">
      <div className="flex w-full flex-col items-center justify-between gap-8">
        <layouts.BackBarLayout />
        <img src={LetsIn} alt="lets in" />
        <h1 className="text-center text-5xl font-bold">Let&apos;s you in</h1>
        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex w-full flex-col gap-4">
            <SocialMediaButton submitHandler={logUser}>
              <icons.Facebook />
              <span className="text-base font-semi-bold leading-normal tracking-wider text-gray-900">
                Continue with Facebook
              </span>
            </SocialMediaButton>
            <SocialMediaButton submitHandler={logUser}>
              <icons.Google />
              <span className="text-base font-semi-bold leading-normal tracking-wider text-gray-900">
                Continue with Google
              </span>
            </SocialMediaButton>
            <SocialMediaButton submitHandler={logUser}>
              <icons.Apple />
              <span className="text-base font-semi-bold leading-normal tracking-wider text-gray-900">
                Continue with Apple
              </span>
            </SocialMediaButton>
          </div>
          <DividerWithText>or</DividerWithText>
          <Button handleNextStep={handleSignInPassword}>
            Sign in with password
          </Button>
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
      </div>
    </div>
  );
}

export default Auth;
