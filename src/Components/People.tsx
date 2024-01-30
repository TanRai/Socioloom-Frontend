import { Link } from "react-router-dom";
import "./People.css";
import { Avatar } from "@mui/material";
interface Props {
  displayName: string;
  username: string;
  bio: string;
  avatar?: string;
  profileId: number;
  followed: boolean;
}

function People({
  displayName,
  username,
  bio,
  avatar,
  profileId,
  followed,
}: Props) {
  return (
    <Link to={""} className="people">
      <div className="people__avatar">
        {avatar ? (
          <Avatar src={`data:image/png;base64,${avatar}`} />
        ) : (
          <Avatar />
        )}
      </div>
      <div className="people__body">
        <div className="people__header">
          <div className="people__info">
            <div className="people__displayName">{displayName}</div>
            <div className="people__username">@{username}</div>
          </div>
          <button className="people__follow">Follow</button>
        </div>
        <div>{bio}</div>
      </div>
    </Link>
  );
}

export default People;
