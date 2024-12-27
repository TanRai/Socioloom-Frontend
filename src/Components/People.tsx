import { Link } from "react-router-dom";
import "./People.css";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import API from "../services/axios";
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
  const [follow, setFollow] = useState(false);
  useEffect(() => {
    API.get(`/api/follow/${profileId}`, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }).then((res) => {
      console.log(res.data);
      setFollow(res.data.following);
    });
  }, [profileId]);

  return (
    <Link to={`/profile/${profileId}`} className="people">
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
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("clicked IN FOLLOW");
              API.post(
                `/api/follow/${profileId}`,
                { follow: !follow },
                {
                  headers: {
                    "x-auth-token": localStorage.getItem("token"),
                  },
                }
              ).then((res) => {
                console.log(res);
                setFollow(!follow);
              });
            }}
            className={follow ? "people__followed" : "people__follow"}
          >
            {follow ? "Unfollow" : "Follow"}
          </button>
        </div>
        <div>{bio}</div>
      </div>
    </Link>
  );
}

export default People;
