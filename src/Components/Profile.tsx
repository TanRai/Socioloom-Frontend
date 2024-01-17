import "./Profile.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Post from "./Post";
import { useEffect, useState } from "react";
import EditProfileModal from "./EditProfileModal";
import axios from "axios";
import userPlaceholder from "../assets/user.jpg";

function Profile() {
  const [user, setUser] = useState({
    username: "",
    displayName: "",
    bio: "",
    profilePicture: "",
    coverPicture: "",
  });
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUser({
          username: res.data.username,
          displayName: res.data.displayName,
          bio: res.data.bio,
          profilePicture: res.data.profilePicture,
          coverPicture: res.data.coverPicture,
        });
      });
  }, []);

  const [openEditModal, setOpenEditModal] = useState(false);
  return (
    <>
      <div className="profile">
        <div className="profile__header">
          <button className="profile__back__button">
            <ArrowBackIcon />
          </button>
          <h2>{user.displayName}</h2>
        </div>
        <div className="profile__section">
          {user.coverPicture ? (
            <img
              className="cover__photo"
              src={`data:image/png;base64,${user.coverPicture}`}
              alt=""
            />
          ) : (
            <div className="cover__photo__placeholder"></div>
          )}
          {user.profilePicture ? (
            <img
              className="profile__photo"
              src={`data:image/png;base64,${user.profilePicture}`}
              alt=""
            />
          ) : (
            <img className="profile__photo" src={userPlaceholder} alt="" />
          )}
          <button
            className="edit-profile-btn"
            onClick={() => {
              console.log("clicked");
              setOpenEditModal(true);
            }}
          >
            Edit Profile
          </button>
          <div className="user__details">
            <h1>{user.displayName}</h1>
            <p className="profile__username">@{user.username}</p>
            <p>{user.bio}</p>
          </div>
        </div>
        <div className="profile__post__header">Posts</div>
        <Post
          displayName="Tanvir Raiyan"
          username="tanrai"
          text="Hello from tanrai"
        />
      </div>
      {openEditModal && (
        <EditProfileModal
          bio={user.bio}
          displayName={user.displayName}
          coverPhoto={user.coverPicture}
          profilePhoto={user.profilePicture}
          setOpenModal={setOpenEditModal}
        />
      )}
    </>
  );
}

export default Profile;
