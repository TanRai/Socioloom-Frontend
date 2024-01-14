import PostAlt from "./PostAlt";
import "./PostView.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReplyBox from "./ReplyBox";
import Comment from "./Comment";

function PostView() {
  return (
    <div className="postView">
      <div className="postView__header">
        <button className="postView__back__button">
          <ArrowBackIcon />
        </button>
        <h2>Post</h2>
      </div>
      <PostAlt
        displayName="Tanvir Raiyan"
        username="tanrai"
        verified={true}
        text="Hello from tanrai"
      />
      <ReplyBox />
      <Comment text="Kill" displayName="kill2" username="kill3"></Comment>
    </div>
  );
}

export default PostView;
