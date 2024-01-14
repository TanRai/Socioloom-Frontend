import React, { useRef, useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";
import CircularProgress from "./CircularProgress";

function TweetBox() {
  const [photo, setPhoto] = React.useState(null);
  const [preview, setPreview] = React.useState(null);
  const myComponentRef = useRef(null);
  const [percent, setPercent] = useState(0);

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar />
          <input
            placeholder="What's happening?"
            type="text"
            onChange={(data) => {
              setPercent((data.target.value.length / 300) * 100);
            }}
          />
        </div>
        <div className="tweetBox__footer">
          <div
            onClick={() => {
              console.log("clickaru");
              if (myComponentRef && myComponentRef.current) {
                (myComponentRef.current as HTMLInputElement).click();
              }
            }}
            className="tweetBox__photoIcon"
          >
            <PhotoIcon />
            <input
              style={{ display: "none" }}
              ref={myComponentRef}
              onChange={(data) => {
                // setPhoto(data.target.files[0]);
                // setPreview(URL.createObjectURL(data.target.files[0]));
              }}
              className="tweetBox__photoInput"
              type="file"
              accept="image/*"
            />
          </div>
          <CircularProgress percent={percent} />
          <button className="tweetBox__tweetButton">Tweet</button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
