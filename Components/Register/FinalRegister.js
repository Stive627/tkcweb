"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { useScreen } from '@/Hooks/useScreen'
import FinalRegistration from './FinalRegistration'
import {useSearchParams } from 'next/navigation'

function FInalRegister() {
  const params = useSearchParams()
  const emailParams = params.get('email')
  const [username, setUsername] = useState(/[^@]*/.exec(emailParams)[0])
  const [password, setPassword] = useState('')
  const [repassword, setRePassword] = useState('')
  const large = useScreen()
  return (
    <div className=' flex w-full justify-center'>
        <div className={`mt-10 ${large && 'w-1/4'}`}>
        <div className=' flex justify-center'>
            <div className=' flex flex-row gap-1.5 items-center'>
                <Image src={'https://bucket-tkc.s3.ap-south-1.amazonaws.com/logo.png'} width={100} height={100} alt='logo'/>
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