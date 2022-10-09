import { Chat, Flag, Heart, Music, Save, Share } from "../icons";
import ReelAction from "../ReelAction";
import ReelThumbnail from "../../assets/reel-thumbnail.png";
import JennyProfilePicture from "../../assets/jenny-profile-picture.png";
import MusicAvatar from "../../assets/music-avatar.png";
import TopBar from "../TopBar";
import ShareReel from "./ShareReel";
import ChatReel from "./ChatReel";
import { useStack } from "../../contexts/StackContext";

function Reel() {
  const stack = useStack();

  const handleShareReel = () => {
    stack.push(<ShareReel handleClose={() => stack.pop()} />);
  };

  const handleSaveReel = () => {};

  const openReelChat = () => {
    stack.push(<ChatReel handleClose={() => stack.pop()} />);
  };

  const toggleReelLike = () => {};
  const reportReel = () => {};

  return (
    <div className="relative h-screen w-full">
      <img
        src={ReelThumbnail}
        alt="reel thumbnail"
        className="h-full w-full object-cover"
      />
      <div className="absolute top-0 right-0 left-0 bottom-20 flex flex-col justify-between px-6 py-4">
        <TopBar />
        <div className="flex items-end justify-between">
          {/* reel metadata */}
          <div className="flex w-full flex-col gap-5">
            {/* reel owner profile details */}
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
            {/* reel description */}
            <p className="text-sm font-medium leading-4 tracking-wide text-white">
              Hi everyone, in this video I will sing a song <br /> #song #music
              #love #beauty
            </p>
            {/* reel related music */}
            <div className="flex items-center gap-2">
              <div className="overflow-hidden rounded-full">
                <img src={MusicAvatar} alt="music avatar" />
              </div>
              <Music />
              <p className="text-xs font-medium tracking-wide text-white">
                Favorite Girl by Justin Bieber
              </p>
            </div>
          </div>
          {/* reel actions */}
          <div className="flex flex-col-reverse gap-6">
            <ReelAction
              icon={<Share />}
              content="20.7k"
              action={handleShareReel}
            />
            <ReelAction
              icon={<Save />}
              content="15.6k"
              action={handleSaveReel}
            />
            <ReelAction icon={<Chat />} content="24.8k" action={openReelChat} />
            <ReelAction
              icon={<Heart />}
              content="225.9k"
              action={toggleReelLike}
            />
            <ReelAction icon={<Flag />} action={reportReel} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reel;
