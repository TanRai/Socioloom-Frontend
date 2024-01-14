import "./Profile.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import cover from "./cover.jpg";
import profile from "./profile.jpg";
import Post from "./Post";

interface Props {}

function Profile() {
  return (
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
        <button className="edit-profile-btn">Edit Profile</button>
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
  );
}

export default Profile;
