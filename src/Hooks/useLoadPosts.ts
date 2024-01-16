import { useEffect, useState } from 'react';
import axios from 'axios';

function useLoadPosts(pageNumber: number) {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(false);


  // useEffect(() => {
  //   setPosts([]); // Clearing the posts array
  // }, [something]); //DO this if you want to clear the posts for some reason


  useEffect(() => {
    setLoading(true);
    setError(false);
    const cancelTokenSource = axios.CancelToken.source();
    axios.get(`http://localhost:3000/api/posts/`, {
      cancelToken: cancelTokenSource.token,
      headers: {
        "x-auth-token": token,
      },
      params: {
        "pageNumber": pageNumber,
      },
    })
      .then((res) => {
        console.log("RESPONSE HEADER", res.headers);
        setPosts((prevPosts) => {
          return [...new Set([...prevPosts, ...res.data])];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          setError(true);
          console.error('Error:', error.message);
        }
      });
    return () => {
      cancelTokenSource.cancel();
    };
  }, [pageNumber]);

  return {loading, error, posts, hasMore};
}

export default useLoadPosts;
