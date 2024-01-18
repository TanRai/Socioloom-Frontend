import "./Comment.css";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";
import { Link } from "react-router-dom";
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
  avatar?: string;
  likeCount: number;
  liked: boolean;
  profileId: number;
}

function Comment({
  displayName,
  username,
  text,
  timestamp,
  liked,
  likeCount,
  avatar,
  profileId,
}: Props) {
  const dateTimeAgo = moment(timestamp).fromNow();

  console.log("From COMMENTS", likeCount);

  return (
    <div className="comment">
      <div className="comment__avatar">
        {avatar ? (
          <Avatar src={`data:image/png;base64,${avatar}`} />
        ) : (
          <Avatar />
        )}
      </div>
      <div className="comment__body">
        <div className="comment__header">
          <div className="comment__headerText">
            <h3>
              <Link
                to={`/profile/${profileId}`}
                className="comment__displayName"
              >
                {displayName}
              </Link>{" "}
              <span className="comment__headerSpecial">
                {/* <VerifiedUserIcon className="comment__badge" />  */}@
                {username} &#183;{" "}
                <span className="comment__headerTime">{dateTimeAgo}</span>
              </span>
            </h3>
          </div>
          <div className="comment__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <div className="comment__footer">
          {liked ? (
            <div className="post__footer__icon">
              <FavoriteIcon fontSize="small" />
              {likeCount > 0 ? <span>{likeCount}</span> : null}
            </div>
          ) : (
            <div className="post__footer__icon">
              <FavoriteBorderIcon fontSize="small" />
              {likeCount > 0 ? <span>{likeCount}</span> : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comment;
