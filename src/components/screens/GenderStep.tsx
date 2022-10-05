import { Female, Male } from "../icons";

function GenderStep() {
  return (
    <>
      <p className="px-6 text-lg font-medium leading-normal tracking-wider">
        Choose your identity & help us to find accurate content for you.
      </p>
      <div className="flex w-full flex-col items-center gap-9">
        <div className="flex h-52 w-52 flex-col items-center justify-center gap-2 rounded-full bg-gradient-to-br from-primary-300 to-primary-500">
          <Male />
          <span className="text-2xl font-bold leading-normal tracking-wider text-white">
            Male
          </span>
        </div>
        <div className="flex h-52 w-52 flex-col items-center justify-center gap-2 rounded-full bg-gray-400">
          <Female />
          <span className="text-2xl font-bold leading-normal tracking-wider text-white">
            Female
          </span>
        </div>
      </div>
    </>
  );
}

export default GenderStep;
