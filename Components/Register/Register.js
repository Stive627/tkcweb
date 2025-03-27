"use client"
import fetchLink from '@/Functions/fetchLink'
import Image from 'next/image'
import React, { useState } from 'react'
import TkcInput from '../TkcInput'
import { useScreen } from '@/Hooks/useScreen'
import Link from 'next/link'

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')
    const large = useScreen()
  return (
    <div className=' flex w-full justify-center'>
        <div className={`mt-10 ${large && 'w-1/3'}`}>
        <div className=' flex justify-center'>
            <div className=' flex flex-row gap-1.5 items-center'>
                <Image src={fetchLink('logo.png')} width={100} height={100} alt='logo'/>
                <p className=' font-semibold text-[20px]'>TSA Knowledge Center</p>
            </div>
        </div>
        <p className=' font-semibold text-[20px] text-center pt-7 pb-2.5'>Register to continue</p>
        <form className='flex flex-col gap-3'>
            <TkcInput placeholder={'Enter your username'} value={username} handleChange={setUsername}/>
            <TkcInput placeholder={'Enter your password'} value={password} handleChange={setPassword}/>
            <TkcInput placeholder={'Re-Enter your password'} value={repassword} handleChange={setRePassword}/>
            <div className=' flex justify-center'><button type='submit' className=' text-white font-semibold w-1/3 p-2 rounded-md cursor-pointer' style={{backgroundColor:'rgba(7, 60, 160, 1)'}} disabled={false}>Register</button></div>
        </form>
        <button style={{borderColor:'rgba(0, 0, 0, 0.27)'}} className=' border rounded-md w-full cursor-pointer my-3 flex justify-center py-2'> <div className=' flex flex-row gap-4'><Image width={25} height={25} src={fetchLink('logogoogle.png')} alt='logo google'/>{'  '} <p className=' text-[16px]'>Continue with Google</p></div></button>
        <p className=' text-center text-[16px]'>Already have an account? <Link className=' underline text-blue-600' href={'/login'}>Login here</Link> </p>
        </div>
    </div>
  )
}

export default Register
