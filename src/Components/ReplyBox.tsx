import "./ReplyBox.css";
import { Avatar } from "@mui/material";
import CircularProgress from "./CircularProgress";
import { useState } from "react";

function ReplyBox() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="replyBox">
      <form action="">
        <div className="replyBox__input">
          <Avatar />
          <input
            onChange={(data) => {
              setProgress((data.target.value.length / 300) * 100);
            }}
            placeholder="Post your reply"
            type="text"
          />
        </div>
        <div className="replyBox__footer">
          <CircularProgress percent={progress} />
          <button className="replyBox__tweetButton">Reply</button>
        </div>
      </form>
    </div>
  );
}

export default ReplyBox;
