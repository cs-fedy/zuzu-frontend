import { Logo, Loading } from "../icons";

function LoadingScreen() {
  return (
    <div className="flex h-screen justify-center pb-20 pt-52">
      <div className="flex flex-col items-center justify-between">
        <Logo />
        <Loading />
      </div>
    </div>
  );
}

export default LoadingScreen;
