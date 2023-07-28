import React, { useEffect } from 'react'
//import "./style.css"
import home from "../images/home.png";
import Navbar from './Navbar';
const Home = () => {

    useEffect(() => {
        document.title = "Home";
    })

    return (
        <div className='h-screen flex flex-col'>
            <Navbar />
            <div className="flex flex-row my-auto h-full flex-grow">

                <div className='flex w-3/5 flex-col justify-center  px-36'>
                    <div className="flex flex-col">

                        <h1 className='text-5xl font-mono text-slate-500 font-semibold'>ABC_Media</h1>
                        <h1 className='text-xl font-mono text-slate-400 py-2'>A Social media platform for connecting people.</h1>
                        <div>
                            <button className='bg-blue-600 rounded-md text-white w-24 m-1'><a href='/'>View Feed</a></button>
                            <button className='text-blue-600 rounded-md w-28 border border-blue-600 hover:bg-blue-600 hover:text-white'><a href='/'>Create a Post</a></button>
                        </div>
                    </div>
                </div>

                <div className='w-2/5 flex flex-col justify-center'>
                    <img className='h-auto w-auto my-auto' src={home}></img>
                </div>

            </div>
        </div>
    )
}

export default Home