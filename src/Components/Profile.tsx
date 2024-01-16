import "./Profile.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import cover from "./cover.jpg";
import profile from "./profile.jpg";
import Post from "./Post";
import { useEffect, useState } from "react";
import EditProfileModal from "./EditProfileModal";
import axios from "axios";

interface Props {}

function Profile() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
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
          <h2>Tanvir Raiyan</h2>
        </div>
        <div className="profile__section">
          <img className="cover__photo" src={cover} alt="" />
          <img className="profile__photo" src={profile} alt="" />
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
            <h1>John Doe</h1>
            <p className="profile__username">@johndoe</p>
            <p>Web Developer</p>
          </div>
        </div>
        <div className="profile__post__header">Posts</div>
        <Post
          displayName="Tanvir Raiyan"
          username="tanrai"
          verified={true}
          text="Hello from tanrai"
        />
        <Post
          displayName="Tanvir Raiyan"
          username="tanrai"
          verified={true}
          text="Hello from tanrai"
        />
        <Post
          displayName="Tanvir Raiyan"
          username="tanrai"
          verified={true}
          text="Hello from tanrai"
        />
        <Post
          displayName="Tanvir Raiyan"
          username="tanrai"
          verified={true}
          text="Hello from tanrai"
        />
      </div>
      {openEditModal && <EditProfileModal setOpenModal={setOpenEditModal} />}
    </>
  );
}

export default Profile;
