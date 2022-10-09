import {
  OutlineBrokenHeart,
  OutlineDownload,
  OutlineFlag,
  OutlineGIF,
  OutlinePaperPlus,
  OutlineSave,
  OutlineUsers,
  OutlineVideo,
  Search,
  Swap,
} from "../icons";
import ShareToProfile from "../../assets/share-to-profile.png";
import WhatsApp from "../../assets/whats-app.png";
import Twitter from "../../assets/twitter.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Yahoo from "../../assets/yahoo.png";
import Chat from "../../assets/chat.png";
import WeChat from "../../assets/we-chat.png";
import Slack from "../../assets/slack.png";
import { ReelPanelLayout } from "../layouts";

type TShareReelProps = {
  handleClose: () => void;
};

function ShareReel({ handleClose }: TShareReelProps) {
  return (
    <ReelPanelLayout handleClose={handleClose} title="send to">
      <div className="flex w-full justify-start gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-300 to-primary-500">
            <Swap />
          </div>
          <span className="text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            repost
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <img src={ShareToProfile} alt="share to profile" />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            Andrew Ainsley
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red bg-opacity-10">
            <Search color="stroke-primary-500" />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            search
          </span>
        </div>
      </div>
      <div className="w-full border-t border-gray-600/30" />
      <div className="flex w-full flex-wrap justify-start gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <img src={WhatsApp} alt="share to whatsApp" />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            WhatsApp
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <img src={Twitter} alt="share to twitter" />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            Twitter
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <img src={Facebook} alt="share to Facebook" />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            Facebook
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <img src={Instagram} alt="share to Instagram" />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            Instagram
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <img src={Yahoo} alt="share to Yahoo" />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            Yahoo
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <img src={Chat} alt="share to Chat" />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            Chat
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <img src={WeChat} alt="share to We chat" />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            WeChat
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <img src={Slack} alt="share to slack" />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            Slack
          </span>
        </div>
      </div>
      <div className="w-full border-t border-gray-600/30" />
      <div className="flex w-full flex-wrap justify-start gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red bg-opacity-10">
            <OutlineFlag />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            report
          </span>
        </div>
        <div className="flex max-w-sm flex-col items-center gap-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red bg-opacity-10">
            <OutlineBrokenHeart />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            Not interested
          </span>
        </div>
        <div className="flex max-w-sm flex-col items-center gap-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red bg-opacity-10">
            <OutlineDownload />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            save video
          </span>
        </div>
        <div className="flex max-w-sm flex-col items-center gap-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red bg-opacity-10">
            <OutlineVideo />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            watch later
          </span>
        </div>
        <div className="flex max-w-sm flex-col items-center gap-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red bg-opacity-10">
            <OutlineUsers />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            duet
          </span>
        </div>
        <div className="flex max-w-sm flex-col items-center gap-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red bg-opacity-10">
            <OutlinePaperPlus />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            stitch
          </span>
        </div>
        <div className="flex max-w-sm flex-col items-center gap-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red bg-opacity-10">
            <OutlineSave />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            save
          </span>
        </div>
        <div className="flex max-w-sm flex-col items-center gap-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red bg-opacity-10">
            <OutlineGIF />
          </div>
          <span className="truncate text-center text-xs font-medium capitalize tracking-wide text-gray-900">
            share as GIF
          </span>
        </div>
      </div>
    </ReelPanelLayout>
  );
}

export default ShareReel;
