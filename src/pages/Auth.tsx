import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  DividerWithText,
  icons,
  layouts,
  SocialMediaButton,
} from "../components";
import LetsIn from "../assets/lets-in.svg";

function Auth() {
  const navigate = useNavigate();
  const handleSignInPassword = () => {
    navigate("/signIn");
  };

  return (
    <div className="flex h-screen justify-center py-6">
      <div className="flex w-full flex-col items-center justify-between">
        <layouts.BackBarLayout />
        <div className="mx-20">
          <img src={LetsIn} alt="lets in" />
        </div>
        <h1 className="mx-6 text-center text-5xl font-bold">
          Let&apos;s you in
        </h1>
        <div className="flex w-full flex-col items-center gap-3 px-6">
          <SocialMediaButton>
            <icons.Facebook />
            <span className="text-base font-semi-bold leading-normal tracking-wider text-gray-900">
              Continue with Facebook
            </span>
          </SocialMediaButton>
          <SocialMediaButton>
            <icons.Google />
            <span className="text-base font-semi-bold leading-normal tracking-wider text-gray-900">
              Continue with Google
            </span>
          </SocialMediaButton>
          <SocialMediaButton>
            <icons.Apple />
            <span className="text-base font-semi-bold leading-normal tracking-wider text-gray-900">
              Continue with Apple
            </span>
          </SocialMediaButton>
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
