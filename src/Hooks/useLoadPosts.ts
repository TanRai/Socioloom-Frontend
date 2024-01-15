import { useEffect, useState } from 'react';
import axios from 'axios';
import { set } from 'react-hook-form';

function useLoadPosts(pageNumber: number) {
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
    axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=10`, {
      cancelToken: cancelTokenSource.token,
    })
      .then((res) => {
        setPosts((prevPosts) => {
          return [...new Set([...prevPosts, ...res.data])];
        });
        setHasMore(true); // res.data.length > 0 , Something like this
        setLoading(false);
        console.log(res.data);
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
