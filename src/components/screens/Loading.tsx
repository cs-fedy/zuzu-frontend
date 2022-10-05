import { Logo, Loading } from "../icons";

function LoadingScreen() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-1/2 flex-col items-center justify-between">
        <Logo />
        <Loading />
      </div>
    </div>
  );
}

export default LoadingScreen;
