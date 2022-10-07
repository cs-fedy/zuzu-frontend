import { BottomBar, TopBar, icons } from "../components";
import ReelThumbnail from "../assets/reel-thumbnail.png";
import JennyProfilePicture from "../assets/jenny-profile-picture.png";
import MusicAvatar from "../assets/music-avatar.png";

function Home() {
  return (
    <div className="h-screen w-full">
      <div className="relative">
        <img src={ReelThumbnail} alt="reel thumbnail" />
        <div className="absolute bottom-20 right-0 left-0 flex items-end justify-between px-6 py-4">
          <div className="flex w-full flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="overflow-hidden rounded-full">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={JennyProfilePicture} alt="jenny profile picture" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <h6 className="leading-2 text-lg font-bold text-white">
                  Jenny Wilson
                </h6>
                <span className="text-sm font-medium leading-3 tracking-wide text-gray-300">
                  Actress & Singer
                </span>
              </div>
            </div>
            <p className="text-sm font-medium leading-4 tracking-wide text-white">
              Hi everyone, in this video I will sing a song <br /> #song #music
              #love #beauty
            </p>
            <div className="flex items-center gap-2">
              <div className="overflow-hidden rounded-full">
                <img src={MusicAvatar} alt="music avatar" />
              </div>
              <icons.Music />
              <p className="text-xs font-medium tracking-wide text-white">
                Favorite Girl by Justin Bieber
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse gap-6">
            <div className="flex flex-col items-center gap-2">
              <icons.Share />
              <span className="text-xs font-medium tracking-wide text-white">
                20.7k
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <icons.Save />
              <span className="text-xs font-medium tracking-wide text-white">
                15.6k
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <icons.Chat />
              <span className="text-xs font-medium tracking-wide text-white">
                24.8k
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <icons.Heart />
              <span className="text-xs font-medium tracking-wide text-white">
                225.9k
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <icons.Flag />
            </div>
          </div>
        </div>
      </div>
      <TopBar />
      <BottomBar />
    </div>
  );
}

export default Home;
