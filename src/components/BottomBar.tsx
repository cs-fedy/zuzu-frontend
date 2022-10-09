import { Discover, Home, Inbox, Plus, Profile } from "./icons";

function BottomBar() {
  return (
    <div className="w-full bg-dark-1 bg-opacity-90 py-2">
      <div className="flex items-center justify-between gap-5 px-8">
        <div className="flex flex-col items-center py-2">
          <Home color="fill-primary-500" />
          <span className="text-xs font-bold capitalize tracking-wide text-primary-500">
            home
          </span>
        </div>
        <div className="flex flex-col items-center py-2">
          <Discover />
          <span className="text-xs font-bold capitalize tracking-wide text-gray-500">
            discover
          </span>
        </div>
        <div className="flex flex-col items-center rounded-full bg-primary-500 py-2 px-2">
          <Plus />
        </div>
        <div className="flex flex-col items-center py-2">
          <Inbox />
          <span className="text-xs font-bold capitalize tracking-wide text-gray-500">
            inbox
          </span>
        </div>
        <div className="flex flex-col items-center py-2">
          <Profile />
          <span className="text-xs font-bold capitalize tracking-wide text-gray-500">
            profile
          </span>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
