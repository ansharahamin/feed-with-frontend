import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
const PostForm = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    useEffect(() => {
        if (props.editingPost) {
            setTitle(props.editingPost.title)
            setDescription(props.editingPost.description)
        }
    }, [props.editingPost])
    return (
        <form className='flex flex-col gap-3  border-3 shadow-gray-100 border-rose-200  rounded-2xl p-5 shadow-lg bg-[linear-gradient(160deg,#fdf2f8_0%,#ffffff_100%)] w-full md:w-[35%] h-[calc(100vh-200px)]'
            onSubmit={(e) => {
                e.preventDefault()
               
   
                console.log(title, description);
                if (props.editingPost) {
                    props.onUpdatePost({ id: props.editingPost.id, title, description })
                    setTitle('')
                    setDescription('')
                } else {
                    props.onAddPost({ id: Date.now(), title, description })
                    setTitle('')
                    setDescription('')
                }

            }}>
            <h2 className='text-xl font-bold text-rose-800 border-b border-rose-200 pb-2'>Create Notes</h2>
            <label htmlFor="title" className='font-bold text-red-900'>Title:</label>
            <input className='focus:outline-none border border-rose-200 focus:border-rose-500 p-2 rounded-2xl text-rose-900' placeholder='Enter title' type='text' value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
            <label htmlFor="description" className='font-bold text-red-900'>Description:</label>
            <textarea className='focus:outline-none border border-rose-200 focus:border-rose-500 p-2 rounded-2xl text-rose-900' placeholder='Enter description' type='text' value={description} onChange={(e) => {
                setDescription
                    (e.target.value)
            }}></textarea>
            <button className='bg-red-900 opacity-90 text-white font-bold text-lg px-3 py-2 rounded-4xl hover:opacity-75 transition-colors transform-3d' type='submit'>{props.editingPost ? 'Update Note' : 'Add Note'}</button>
        </form>
    )
}

export default PostForm