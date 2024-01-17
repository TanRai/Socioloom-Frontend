import "./Post.css";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PublishIcon from "@mui/icons-material/Publish";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import moment from "moment";
moment.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s",
    s: "%ds",
    m: "%dm",
    mm: "%dm",
    h: "%dh",
    hh: "%dh",
    d: "%dd",
    dd: "%dd",
    M: "%dm",
    MM: "%dm",
    y: "%dy",
    yy: "%dy",
  },
});

interface Props {
  displayName: string;
  username: string;
  timestamp: string;
  text: string;
  image?: string;
  avatar?: string;
  likeCount: number;
  liked: boolean;
  replyCount: number;
}

function Post({
  displayName,
  username,
  text,
  timestamp,
  liked,
  likeCount,
  replyCount,
  image,
  avatar,
}: Props) {
  const dateTimeAgo = moment(timestamp).fromNow();
  return (
    <div className="post">
      <div className="post__avatar">
        {avatar ? (
          <Avatar src={`data:image/png;base64,${avatar}`} />
        ) : (
          <Avatar />
        )}
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                @{username} &#183;{" "}
                <span className="post__headerTime">{dateTimeAgo}</span>
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        {image && <img src={`data:image/png;base64,${image}`} alt="" />}
        <div className="post__footer">
          <div className="post__footer__icon">
            <ChatBubbleOutlineIcon fontSize="small" />
            {replyCount > 0 ? <span>{replyCount}</span> : null}
          </div>
          {liked ? (
            <div className="post__footer__icon">
              <FavoriteIcon fontSize="small" />
              {likeCount > 0 ? <span>{likeCount}</span> : null}
            </div>
          ) : (
            <div className="post__footer__icon">
              <FavoriteBorderIcon fontSize="small" />
            </div>
          )}
          <div className="post__footer__icon">
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
