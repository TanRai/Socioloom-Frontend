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
        if (posts.length === index + 1) {
          return (
            <div key={index} ref={lastPostElementRef}>
              <Post
                username={post.username}
                displayName={post.display_name}
                text={post.post_text}
                timestamp={post.time_posted}
                liked={post.user_liked}
                likeCount={post.like_count}
                replyCount={post.reply_count}
                image={post.post_image}
                avatar={post.profile_picture}
              />
            </div>
          );
        } else {
          return (
            <div key={index}>
              <Post
                username={post.username}
                displayName={post.display_name}
                text={post.post_text}
                timestamp={post.time_posted}
                liked={post.user_liked}
                likeCount={post.like_count}
                replyCount={post.reply_count}
                image={post.post_image}
                avatar={post.profile_picture}
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
