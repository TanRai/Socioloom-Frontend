import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import SettingsIcon from "@mui/icons-material/Settings";
import InterestTweetBox from "./InterestTweetBox";
import useLoadPosts from "../Hooks/useLoadPosts";
import { useState, useRef, useCallback } from "react";

function Feed() {
  const [pageNumber, setpageNumber] = useState(1);

  const { loading, error, posts, hasMore } = useLoadPosts(pageNumber);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastPostElementRef = useCallback(
    (node: any) => {
      // console.log("node", node);
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        // console.log("entries", entries);
        if (entries[0].isIntersecting && hasMore) {
          console.log("Visible");
          setpageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
      // console.log("node", node);
    },
    [loading, hasMore]
  );

  let n = 0;

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
      {posts.map((post, index) => {
        n++;
        if (posts.length === index + 1) {
          return (
            <div ref={lastPostElementRef}>
              <Post
                username={n.toString()}
                displayName="Tanvir Raiyan"
                verified={true}
                text={post.title}
              />
            </div>
          );
        } else {
          return (
            <div>
              <Post
                username={n.toString()}
                displayName="Tanvir Raiyan"
                verified={true}
                text={post.title}
              />
            </div>
          );
        }
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </div>
  );
}

export default Feed;

//{index === (posts.length - 1) ? { ref: lastPostElementRef } : null}
