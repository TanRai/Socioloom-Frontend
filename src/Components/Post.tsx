import "./Post.css";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PublishIcon from "@mui/icons-material/Publish";
import moment from "moment";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
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
  interest?: string;
  profileId: number;
  postId: number;
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
  interest,
  profileId,
  postId,
}: Props) {
  const [likeStatus, setLikeStatus] = useState(liked ? true : false);
  const dateTimeAgo = moment(timestamp).fromNow();
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <Link to={`/post/personal/${postId}`} className="post">
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
              <Link to={`/profile/${profileId}`} className="post__displayName">
                {displayName}
              </Link>{" "}
              <span className="post__headerSpecial">
                @{username} &#183;{" "}
                <span className="post__headerTime">{dateTimeAgo}</span>
              </span>
            </h3>
            {interest && (
              <div className="post__headerInterest">
                {capitalizeFirstLetter(interest)}
              </div>
            )}
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
          <div className="post__footer__info">
            {likeStatus ? (
              <div
                className="post__footer__like"
                onClick={(likeStatus) => {
                  setLikeStatus(!likeStatus);
                  axios.post(
                    `http://localhost:3000/api/likes/personal/${postId}`,
                    { likeStatus: !likeStatus }
                  );
                }}
              >
                <FavoriteIcon fontSize="small" />
              </div>
            ) : (
              <div className="post__footer__like">
                <FavoriteBorderIcon fontSize="small" />
              </div>
            )}
            {likeCount > 0 ? <span>{likeCount}</span> : null}
          </div>
          <div className="post__footer__icon">
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Post;
