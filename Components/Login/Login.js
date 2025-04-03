"use client"
import fetchLink from '@/Functions/fetchLink'
import Image from 'next/image'
import React, { Suspense, useEffect, useState } from 'react'
import TkcInput from '../TkcInput'
import { useScreen } from '@/Hooks/useScreen'
import Link from 'next/link'
import axios from 'axios'
import { usePathname, useRouter } from 'next/navigation'

function Login() {
    const [usernameoremail, setUsernameoremail] = useState('')
    const [password, setPassword] = useState('')
    const [errlog, setErrLog] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const large = useScreen()
    const pathname= usePathname()
    const router = useRouter()
    function handleSubmit(e){
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('usernameoremail', usernameoremail)
        formdata.append('password', password)
        setLoading(true)
        axios({url:fetchLink('user/login'), method:'POST', data:formdata, headers:{"Content-Type":"application/json"}})
        .then((value) => {
            console.log(value.data)
            if(typeof window !== 'undefined'){
                localStorage.setItem('tkc_token', value.data.token)
            }
            if(pathname === '/'){
                window.location.reload()
            }
            else{
                router.push('/')
            }
            
        })
        .catch(err => {console.error(err.response.data); setErrLog(err.response.data); setPassword(''); setUsernameoremail('')})
        .finally(()=>setLoading(false))
    }

  return (
    <Suspense>
        <div className=' flex w-full justify-center px-2'>
            <div className={`mt-10 ${large ? 'w-1/4': 'w-full'}`}>
            <div className=' flex justify-center'>
                <div className=' flex flex-row gap-1.5 items-center'>
                    <Image src={fetchLink('logo.png')} width={100} height={100} alt='logo'/>
                    <p className=' font-semibold text-[20px]'>TSA Knowledge Center</p>
                </div>
            </div>
            <p className=' font-semibold text-[20px] text-center pt-16 pb-2.5'>Login to continue</p>
            <form onSubmit={(e) => handleSubmit(e)}  className='flex flex-col gap-3'>
                <TkcInput placeholder={'Username or email'} value={usernameoremail} handleChange={setUsernameoremail}/>
                <TkcInput placeholder={'Password'} value={password} handleChange={setPassword}/>
                <div className=' flex justify-center'><button type='submit' className=' text-white font-semibold w-full p-2 rounded-md cursor-pointer' style={{backgroundColor:loading? 'rgba(2, 72, 200, 0.14)':'rgba(7, 60, 160, 1)'}} disabled={false}>Login</button></div>
            </form>
            {errlog &&  <p className = ' text-center text-red-600'>{errlog}</p>}
            <p className=' text-center text-[16px] py-4'>Don&#39;t have an account? <Link className=' underline text-blue-600' href={'/register'}>Sign Up</Link> </p>
            <p className=' text-center text-[16px]'>Forgot password? <Link className=' underline text-blue-600' href={'/recoverpassword'}>Recover</Link> </p>
            </div>
        </div>
    </Suspense>
  )
}

export default Login
