import { Heart, More } from "./icons";

type TCommentProps = {
  username: string;
  profilePicture: string;
  content: string;
  since: string;
  likes: number;
  isLiked?: boolean;
};

function Comment({
  username,
  profilePicture,
  content,
  since,
  likes,
  isLiked = false,
}: TCommentProps) {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex justify-between gap-3">
        <div className="flex flex-1 items-center gap-4">
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <img src={profilePicture} alt="comment one user profile pict" />
          </div>
          <span className="text-lg font-bold capitalize leading-normal tracking-wide text-gray-900">
            Kathryn Murphy
          </span>
        </div>
        <More />
      </div>
      <p className="text-sm font-regular leading-normal tracking-wide text-gray-900">
        {content}
      </p>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Heart className={isLiked ? "fill-primary-500" : "stroke-gray-900"} />
          <span className="text-xs font-medium tracking-wide text-gray-900">
            {likes}
          </span>
        </div>
        <span className="text-xs font-medium tracking-wide text-gray-700">
          {since}
        </span>
        <span className="text-xs font-medium capitalize tracking-wide text-gray-700">
          reply
        </span>
      </div>
    </div>
  );
}

export default Comment;
