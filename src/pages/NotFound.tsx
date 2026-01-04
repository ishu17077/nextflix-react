import React from 'react'
import backgroundImg from '../../public/404-background.png'
import { Link } from 'react-router-dom'


const NotFound = () => {
    return (
        <>
            <div>
                <img src={backgroundImg} alt="404" className='bg-cover absolute w-full h-full' />
                <div className='fixed bg-black/10 top-0 left-0 w-full h-screen'></div>
                <div className='fixed flex flex-col text-white justify-center items-center h-full w-full'>
                    <div className='min-w-[800px] justify-center items-center text-center'>
                        <h1 className='text-7xl font-bold' style={{ fontFamily: 'sans-serif' }}>Lost Your Way?</h1>
                        <p className='my-10 text-3xl text-shadow-fuchsia-50'>Sorry, we can't find that page. You will find lots to explore on the home page.</p>

                        <Link to="/">   <button type='button' className='bg-white py-4 px-8 text-black text-2xl tracking-tight rounded font-medium cursor-pointer'>Netflix Home</button></Link>

                        <div className='flex flex-row text-center items-center justify-center'>
                            <div className='w-[2px] h-[60px] bg-red-600 my-10 mr-4'>    </div>
                            <div className='flex flex-row text-white'>
                                <span className='text-4xl font-extralight tracking-widest '>Error Code</span>
                                <span className='whitespace-pre-wrap'>{'      '}</span>
                                <span className='text-4xl font-bold tracking-widest'>NSEC-404</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound