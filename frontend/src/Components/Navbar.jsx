import React from 'react'
import { useState } from 'react'
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <nav className='bg-rose-50 text-rose-900 border-b border-rose-100 flex justify-between items-center p-3 gap-3 border-2 rounded shadow-lg shadow-gray-100'>

            <h1 className='text-xl font-bold'>Notes App</h1>

            <ul className='flex space-x-4 hidden md:flex'>
                <li><a href="#" className='hover:text-rose-600 cursor-pointer transition-colors'>Home</a></li>
                <li><a href="#" className='hover:text-rose-600 cursor-pointer transition-colors'>About</a></li>
                <li><a href="#" className='hover:text-rose-600 cursor-pointer transition-colors'>Contact</a></li>
            </ul>
            <div className="search-wrapper relative hidden md:flex">
                <input type="text" placeholder='Search... ' className='border border-rose-200 rounded-2xl px-2 py-1 outline-rose-200 focus:ring-2 focus:ring-rose-500  pr-8' />
                <i className="fa-solid fa-magnifying-glass absolute right-2.5 top-1/2 transform -translate-y-1/2"></i>
            </div>
            <div className="circle w-10 h-10 bg-rose-300 rounded-full border border-rose-400 text-center flex justify-center items-center hidden md:flex">N</div>
            <i className="fa-solid fa-bars md:hidden!" onClick={() => { setIsOpen(!isOpen) }}></i>

        </nav>
             {  isOpen &&    ( <ul className='flex flex-col md:hidden justify-center
             items-center gap-3 bg-linear-30 text-rose-900 border-2 border-rose-900 p-3 mt-1 rounded-2xl shadow-lg bg-rose-50'>
                <li><a href="" className='hover:text-rose-600 cursor-pointer transition-colors'>Home</a></li>
                <li><a href="" className='hover:text-rose-600 cursor-pointer transition-colors'>About</a></li>
                <li><a href="" className='hover:text-rose-600 cursor-pointer transition-colors'>Contact</a></li>
                 <div className="search-wrapper relative">
                <input type="text" placeholder='Search... ' className='border border-rose-300 rounded-2xl px-2 py-1 outline-rose-200 focus:ring-2 focus:ring-rose-500  pr-8 mt-0.5' />
                <i class="fa-solid fa-magnifying-glass absolute right-2.5 top-1/2 transform -translate-y-1/2"></i>
            </div>
                <div className="circle w-10 h-10 bg-rose-300 rounded-full border border-rose-400 text-center flex justify-center items-center">N</div>
            </ul>)}
            </>
    )
}

export default Navbar