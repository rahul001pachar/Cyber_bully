import React from 'react'

const Navbar = () => {
    return (
        <div className='flex flex-auto justify-between bg-blue-800 items-center p-4'>
            <a className='font-bold text-slate-50 text-2xl hover:text-yellow-700 ' href='/'>BullShit</a>
            <div>
                <a className='text-xl text-yellow-600 p-2' href='/'>Home</a>
                <a className='text-xl text-slate-400 p-2' href='/'>Feed</a>
                <a className='text-xl text-slate-400 p-2' href='/'>Create a post</a>
                <a className='text-xl text-slate-400 p-2' href='/login'>Login</a>
            </div>
        </div>
    )
}

export default Navbar