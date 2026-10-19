import React from 'react'

const PostItem = (props) => {
  return (
    <div className='bg-rose-50 text-rose-900 border-2 border-rose-300 p-3 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col gap-2'>
        <p className='text-rose-700 text-sm border-b border-rose-200 p-2 rounded'>ID: {props.post.id}</p>
      <h3 className='font-bold text-lg'>{props.post.title}</h3>
      <p className='text-rose-950'>{props.post.description}</p>
      <div className="btns flex justify-between mt-3 border-t border-rose-200 pt-2">
        <button className='bg-rose-900 text-rose-100 px-4 py-2 rounded-4xl hover:bg-rose-700 transition-colors' type="button" onClick={()=>props.onEditPost(props.post)}><i className="fa-solid fa-pen-to-square"></i></button>
        <button className='bg-rose-600 text-rose-100 px-4 py-2 rounded-4xl hover:bg-rose-700 transition-colors' type='button' onClick={() => props.onDeletePost(props.post.id)}><i className="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}

export default PostItem