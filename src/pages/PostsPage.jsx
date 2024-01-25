import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { DammyjsonAPI } from "../api";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let url
    const userId = searchParams.get("user");
    if (userId) {
      url = `/posts?userId=${userId}`;
    } else {
      url = "/posts";
    }
    const getPosts = async () => {
      const response = await  DammyjsonAPI.get(url);
      setPosts(response.data.posts);
    };
    getPosts();
  }, []);

  const changeUserFilter = (userId) => {
    console.log(userId);
    setSearchParams({ user: userId });
    const getPosts = async () => {
        const response = await  DammyjsonAPI.get("/posts?limit=10&skip=10" + userId);
        setPosts(response.data.posts);
      };
    getPosts();
  };

  const resetUserFilter = () => {
    setSearchParams({});
    const getPosts = async () => {
        const response = await  DammyjsonAPI.get("/posts");
        setPosts(response.data.posts);
      };
    getPosts();
  };

  return (
    <div>
      <div className="userFilter">
        {[1, 2, 3,4,5].map((userId) => (
          <button key={userId} onClick={() => changeUserFilter(userId)}>
            User:{userId}
          </button>
        ))}
      </div>
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default PostsPage;