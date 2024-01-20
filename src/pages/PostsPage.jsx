import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const PostsPage = () => {
    const [ posts, setPosts] = useState([])

    useEffect(()=>{
        const fetch = async () =>{
            const request = await axios.get("https://dummyjson.com/posts")
            setPosts(request.data.posts)
        }
        fetch()
    },[])

    return ( 
        <> 
          <h1>Posts</h1> 
          {posts.map((item) => ( 
              <p>{item.id}
              <h2>{item.title}</h2> 
              <span>{item.body}</span> 
            </p> 
          ))} 
        </> 
      )
}



export default PostsPage