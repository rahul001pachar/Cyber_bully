import React, { useEffect } from 'react'
import Navbar from './Navbar'
//import "../style.css"

const Signup = () => {
    useEffect(() => {
        document.title = "Signup";
    })
    return (
        <>
            <Navbar />

            <div className='flex flex-row my-auto h-full flex-grow'>
                <div className='w-3/5'></div>
                <div className='w-2/5 flex flex-col justify-center my-20 border border-indigo-600 rounded py-20 m-8 bg-indigo-100'>
                    <h1 className='text-bold text-4xl text-indigo-600 underline underline-decoration-10 py-1 ml-6'>Login to ABC_Media</h1>
                    <input className='bg-indigo-200 rounded-md flex flex-auto m-2 border border-indigo-300 py-1 ml-6' type='text' placeholder='Email'></input>
                    <input className='bg-indigo-200 rounded-md flex flex-auto m-2 border border-indigo-300 py-1 ml-6' type='text' placeholder='Password'></input>
                    <div className='flex flex-auto'>
                        <input className='bg-indigo-200 rounded-md flex flex-auto border border-indigo-300 py-1 ml-6' type='text' placeholder='First Name'></input>
                        <input className='bg-indigo-200 rounded-md flex flex-auto border border-indigo-300 py-1 ml-1 mr-2' type='text' placeholder='Last Name'></input>
                    </div>

                    <div>
                        <a className='text-sm text-indigo-400 hover:underline decoration-indigo-400 mr-72 ml-7'>Already have an account?</a>
                        <button className='bg-indigo-600 text-white rounded-md mx-1 my-1 w-16 h-8 mt-8'><a href='/signup'>Signup</a></button>
                    </div>

                    <a className='font-bold text-indigo-800 ml-7' href='/login'>Login</a>

                </div>
            </div>

        </>
    )
}

export default Signup