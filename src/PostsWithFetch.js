import React, {useState, useEffect} from 'react'

function PostsWithFetch() {
  const [posts, setPosts] = useState( [] );
  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const postsData = await response.json();
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

const usePosts = posts.map((post)=>{
  return <div>
              <h3>{post.id}</h3>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div> 
  })

  return (
    <>
      <h1>Fetch API With UseState and UseEffect</h1>
      <h2>Dummy API - https://jsonplaceholder.typicode.com/posts</h2>
      <div className="container">
          {posts && usePosts}
      </div>
    </>
  );
}

export default PostsWithFetch;
