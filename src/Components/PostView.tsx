import PostAlt from "./PostAlt";
import "./PostView.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReplyBox from "./ReplyBox";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PostView() {
  const token = localStorage.getItem("token");
  const { postId } = useParams();
  const [post, setPost] = useState<any>({});
  const [replies, setReplies] = useState<any>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/personal/${postId}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/replies/personal/${postId}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setReplies(response.data);
      });
  }, []);

  return (
    <div className="postView">
      <div className="postView__header">
        <button className="postView__back__button">
          <ArrowBackIcon />
        </button>
        <h2>Post</h2>
      </div>
      <PostAlt
        username={post.username}
        displayName={post.display_name}
        text={post.post_text}
        timestamp={post.time_posted}
        liked={post.user_liked}
        likeCount={post.like_count}
        replyCount={post.reply_count}
        image={post.post_image}
        avatar={post.profile_picture}
        profileId={post.user_id}
        postId={post.post_id}
        // {...(feedType === "interests" && {
        //   interest: post.interest_type,
        // })}
      />
      <ReplyBox postId={post.post_id} postType="personal" />
      <div className="postView__replies">
        {replies &&
          replies.map((reply: any, index: any) => (
            <Comment
              key={index}
              username={reply.username}
              displayName={reply.display_name}
              text={reply.reply_text}
              timestamp={reply.time_replied}
              liked={reply.user_liked}
              likeCount={reply.like_count}
              avatar={reply.profile_picture}
              profileId={reply.user_id}
            />
          ))}
      </div>
    </div>
  );
}

export default PostView;
