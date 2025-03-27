"use client"
import fetchLink from '@/Functions/fetchLink'
import Image from 'next/image'
import React, { useState } from 'react'
import TkcInput from '../TkcInput'
import { useScreen } from '@/Hooks/useScreen'
import Link from 'next/link'
import RegistrationForm from './RegistrationForm'
import FinalRegistration from './FinalRegistration'

function FInalRegister() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')
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
        <p className=' font-semibold text-[20px] text-center pt-7 pb-2.5'>Register to continue</p>
            <FinalRegistration password={password} repassword={repassword} username={username} handlePassword={setPassword} handleSetpassword={setRePassword} handleUsername={setUsername}/>
     </div>
    </div>
  )
}

export default FInalRegister