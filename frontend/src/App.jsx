import { useState , useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import PostForm from './Components/PostForm'
import PostList from './Components/PostList'
import axios from 'axios'
function App() {
  const [posts, setPosts] = useState(()=>{
    const savedPosts = localStorage.getItem('posts')
    return savedPosts ? JSON.parse(savedPosts):[]
  })
  const [editingPost, setEditingPost] = useState(null)
  useEffect(() => {  
  localStorage.setItem('posts',JSON.stringify(posts))
  }, [posts])
  
  useEffect(()=>{
    axios.get("http://localhost:4000")
    .then((res => {
      setPosts(res.data.posts)
      console.log(posts);
      
    }
    ))
  },[])

  async function handleAddPost(e,newPost){

    setPosts([...posts,newPost])
  }
  function handleEditPost(post){
    setEditingPost(post)
  }
  function handleDeletePost(postId){
    setPosts(posts.filter(post => post.id
      !== postId
    ))
  }
  function handleUpdatePost(updatedPost){
    setPosts(posts.map((post)=>(post.id===updatedPost.id? updatedPost : post)))
    setEditingPost(null)
  }

  return (
<>  
<Navbar/>
<div className="container mx-auto p-4 flex flex-col gap-4 md:flex-row items-start">
  <PostForm onAddPost={handleAddPost} editingPost = {editingPost} onUpdatePost={handleUpdatePost}/>
  <PostList posts={posts.filter(post => post.id !== editingPost?.id)} onDeletePost={handleDeletePost} onEditPost={handleEditPost}/>
</div>
</>

  )
}

export default App
