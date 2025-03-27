"use client"
import fetchLink from '@/Functions/fetchLink'
import Image from 'next/image'
import React, { useState } from 'react'
import TkcInput from '../TkcInput'
import { useScreen } from '@/Hooks/useScreen'
import Link from 'next/link'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const large = useScreen()
  return (
    <div className=' flex w-full justify-center'>
        <div className={`mt-10 ${large && 'w-1/4'}`}>
        <div className=' flex justify-center'>
            <div className=' flex flex-row gap-1.5 items-center'>
                <Image src={fetchLink('logo.png')} width={100} height={100} alt='logo'/>
                <p className=' font-semibold text-[20px]'>TSA Knowledge Center</p>
            </div>
        </div>
        <p className=' font-semibold text-[20px] text-center pt-16 pb-2.5'>Login to continue</p>
        <form className='flex flex-col gap-3'>
            <TkcInput placeholder={'Username or email'} value={username} handleChange={setUsername}/>
            <TkcInput placeholder={'Password'} value={password} handleChange={setPassword}/>
            <div className=' flex justify-center'><button type='submit' className=' text-white font-semibold w-1/3 p-2 rounded-md cursor-pointer' style={{backgroundColor:'rgba(7, 60, 160, 1)'}} disabled={false}>Register</button></div>
        </form>
        <p className=' text-center text-[16px] py-4'>Don&#39;t have an account? <Link className=' underline text-blue-600' href={'/login'}>Sing Up</Link> </p>
        <p className=' text-center text-[16px]'>Forgot password? <Link className=' underline text-blue-600' href={'/login'}>Recover</Link> </p>
        </div>
    </div>
  )
}

export default Login
