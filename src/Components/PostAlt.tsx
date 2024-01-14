import "./PostAlt.css";
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

function PostAlt({ displayName, username, text }: Props) {
  return (
    <div className="postAlt">
      <div className="postAlt__body">
        <div className="postAlt__header">
          <div className="postAlt__avatar">
            <Avatar />
          </div>
          <div className="postAlt__headerText">
            <div>{displayName}</div>
            <div className="postAlt__headerSpecial">@{username}</div>
          </div>
        </div>
        <div className="postAlt__postContent">
          <p>{text} lorem200</p>
        </div>
        <div className="postAlt__time">8:08 PM &#183; Jan 13, 2024</div>
        <img
          src="https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif"
          alt=""
        />
        <div className="postAlt__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <BookmarkBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default PostAlt;
