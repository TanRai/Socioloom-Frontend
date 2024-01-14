import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import SettingsIcon from "@mui/icons-material/Settings";
import InterestTweetBox from "./InterestTweetBox";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <button className="feed__buttons">
          <div className="feed__buttons__text">Following</div>
        </button>
        <button className="feed__buttons">
          <div className="feed__buttons__text">Interests</div>
        </button>
        <button className="feed__settings">
          <SettingsIcon className="feed__settings__icon" />
        </button>
      </div>
      <TweetBox />
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

export default Feed;
