import "./InterestTweetBox.css";
import { Avatar } from "@mui/material";

function InterestTweetBox() {
  return (
    <div className="interestTweetBox">
      <form action="">
        <div className="interestTweetBox__input">
          <Avatar />
          <input placeholder="What's happening 2?" type="text" />
        </div>
        <div className="interstTweetBox__option">
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <button className="interestTweetBox__tweetButton">Tweet</button>
        </div>
      </form>
    </div>
  );
}

export default InterestTweetBox;
