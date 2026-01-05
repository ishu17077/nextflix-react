import type { User } from 'firebase/auth'
import image from '../../public/netflix-background.png'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth, type AuthContextType } from '../contexts/AuthContext'
import React, { useState } from 'react'

const Login = () => {
    const { logIn }: { user: User | null, logIn: AuthContextType['logIn'] } = UserAuth()
    const [error, setError] = useState<string>("")
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        try {
            await logIn(email, password)
            navigate("/")
        } catch (error: Error | unknown) {
            console.log(error)
            setError((error as Error)?.message ?? '')
        }
    }


    return (
        <>
            <div className='w-full h-screen'>
                <img src={image} alt="Netflix Background" className='hidden sm:block absolute w-full h-full object-cover items-center justify-center' />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Log In</h1>
                            {error ? (<p className='p-5 bg-red-300'>{error}</p>) : null}
                            <form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
                                <input className='p-3 my-3 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' onChange={(e) => setEmail(e.target.value)} />
                                <input className='p-3 my-3 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password' onChange={(e) => setPassword(e.target.value)} />
                                <button className='bg-red-600 py-3 my-6 rounded font-bold' onClick={handleSubmit}>Log In</button>
                                <div className='flex items-center justify-between text-sm text-gray-600'>
                                    <p><input title='Remember Me' type='checkbox' className='mr-2 justify-center items-center cursor-pointer' />Remember Me</p>
                                    <p className='cursor-pointer'>Need Help?</p>
                                </div>
                                <p className='py-4'><span className='text-gray-600'>New to Netflix?</span>{' '}<Link to='/signup' className='cursor-pointer'>Sign Up</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login