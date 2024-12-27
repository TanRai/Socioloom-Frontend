import { useEffect, useState } from "react";
import API from "../services/axios";
import axios from "axios";

function useLoadPosts(pageNumber: number, postType: string, userId?: number) {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(false);

  const type = postType === "following" ? "personal" : postType;

  const url =
    postType === "personal" ? "/api/posts/personal/user" : `/api/posts/${type}`;

  const params =
    postType === "personal"
      ? {
          pageNumber: pageNumber,
          userId: userId,
        }
      : {
          pageNumber: pageNumber,
        };

  // console.log("URL", url);
  // console.log("PARAMS", params);
  useEffect(() => {
    setPosts([]);
  }, [postType]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const cancelTokenSource = axios.CancelToken.source();
    API.get(url, {
      cancelToken: cancelTokenSource.token,
      headers: {
        "x-auth-token": token,
      },
      params: params,
    })
      .then((res) => {
        // console.log("RESPONSE HEADER", res.data);
        setPosts((prevPosts) => {
          return [...new Set([...prevPosts, ...res.data])];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          // console.log("Request canceled:", error.message);
        } else {
          setError(true);
          console.error("Error from load posts:", error.message);
        }
      });
    return () => {
      cancelTokenSource.cancel();
    };
  }, [postType, pageNumber]);

  return { loading, error, posts, hasMore };
}

export default useLoadPosts;
