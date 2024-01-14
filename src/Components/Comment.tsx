import "./Comment.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface Props {
  displayName: string;
  username: string;
  verified?: boolean;
  timestamp?: string;
  text: string;
  image?: string;
  avatar?: string;
}

function Comment({ displayName, username, text }: Props) {
  return (
    <div className="comment">
      <div className="comment__avatar">
        <Avatar />
      </div>
      <div className="comment__body">
        <div className="comment__header">
          <div className="comment__headerText">
            <h3>
              {displayName}{" "}
              <span className="comment__headerSpecial">
                {/* <VerifiedUserIcon className="comment__badge" />  */}@
                {username} &#183;{" "}
                <span className="comment__headerTime">48m</span>
              </span>
            </h3>
          </div>
          <div className="comment__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <div className="comment__footer">
          <FavoriteBorderIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Comment;
