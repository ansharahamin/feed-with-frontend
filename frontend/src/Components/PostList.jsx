import React from 'react'
import PostItem from './PostItem'

const PostList = ({posts, onDeletePost, onEditPost}) => {

  return (
    <div className=" w-full md:w-[65%] p-5 bg-[linear-gradient(135deg,#ffe4e6_0%,#fed7aa_100%)] opacity-85 border-2 border-red-300 rounded-2xl shadow-lg shadow-gray-100">
        <h1 className='text-red-900 font-bold text-2xl p-4'>Notes:</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>{posts.map((post)=>(
        <PostItem key={post.id}  onDeletePost={onDeletePost} post={post} onEditPost={onEditPost} />
    ))}</div>
    </div>
  )
}

export default PostList