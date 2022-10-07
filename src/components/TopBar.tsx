import { Live, Search } from "./icons";

function TopBar() {
  return (
    <div className="fixed top-0 right-0 left-0 px-6 py-6">
      <div className="flex items-center justify-between gap-4">
        <Live />
        <div className="flex items-center justify-evenly gap-5">
          <div className="flex h-full flex-col gap-4">
            <span className="text-lg font-semi-bold capitalize leading-normal tracking-wide text-gray-200">
              following
            </span>
            <div className="h-0.5 w-full bg-gray-200" />
          </div>
          <div className="flex h-full flex-col gap-4">
            <span className="text-lg font-semi-bold capitalize leading-normal tracking-wide text-gray-200">
              friends
            </span>
            <div className="h-0.5 w-full bg-gray-200" />
          </div>
          <div className="flex h-full flex-col gap-4">
            <span className="text-lg font-semi-bold capitalize leading-normal tracking-wide text-primary-500">
              for you
            </span>
            <div className="h-1 w-full bg-primary-500" />
          </div>
        </div>
        <Search />
      </div>
    </div>
  );
}

export default TopBar;
