import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WatchPosts = () => {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.posts))
  }, [])

  return (
    <div>
      <h1> Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      <button onClick={() => navigate('/create')}>Create a Post</button>
    </div>
  )
}

export default WatchPosts;