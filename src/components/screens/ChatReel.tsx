import Comment from "../Comment";
import { ReelPanelLayout } from "../layouts";
import CommentOne from "../../assets/comment-1.png";
import CommentTwo from "../../assets/comment-2.png";
import CommentThree from "../../assets/comment-3.png";
import PostComment from "../PostComment";

type TChatReelProps = {
  handleClose: () => void;
};

function ChatReel({ handleClose }: TChatReelProps) {
  return (
    <ReelPanelLayout handleClose={handleClose} title="24.8K Comments">
      <Comment
        username="Kristin Watson"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        likes={938}
        since="3 days ago"
        profilePicture={CommentOne}
        isLiked
      />
      <Comment
        username="Ralph Edwards"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        likes={847}
        since="2 days ago"
        profilePicture={CommentTwo}
      />
      <Comment
        username="Kathryn Murphy"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        likes={534}
        since="4 days ago"
        profilePicture={CommentThree}
        isLiked
      />
      <PostComment />
    </ReelPanelLayout>
  );
}

export default ChatReel;
