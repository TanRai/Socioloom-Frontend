import React from "react";
import "./Explore.css";
import SearchIcon from "@mui/icons-material/Search";
import Post from "./Post";

function Explore() {
  return (
    <div className="explore">
      <div className="explore__header">
        <div className="explore__input">
          <SearchIcon className="explore__searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>
      </div>
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

export default Explore;
