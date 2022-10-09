import { At, Gift, HappyFace, Send, User } from "./icons";
import { InputLayout } from "./layouts";

function PostComment() {
  return (
    <div className="flex w-full items-center gap-3">
      <div className="w-full flex-1">
        <InputLayout>
          <User />
          <input
            type="text"
            name="comment"
            placeholder="Add comment"
            className="flex-1 border-0 bg-transparent text-sm font-regular leading-normal tracking-wider outline-none"
          />
          <At />
          <Gift />
          <HappyFace />
        </InputLayout>
      </div>
      <div className="flex h-14 w-14 flex-grow-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-200 to-primary-500">
        <Send />
      </div>
    </div>
  );
}

export default PostComment;
