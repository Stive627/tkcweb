"use client"
import fetchLink from '@/Functions/fetchLink'
import Image from 'next/image'
import React, { useState } from 'react'
import { useScreen } from '@/Hooks/useScreen'
import RegistrationForm from './RegistrationForm'
import { validateEmail } from '@/Functions/validateEmail'
import validatePassword from '@/Functions/validatePassword'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')
    const large = useScreen()
    const validForm = validateEmail(email) && validatePassword(password) && (password === repassword)
    function handleSubmit(e){
      e.preventDefault()
      const formdata = new FormData()
      formdata.append('')
    }
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
          <RegistrationForm validFom={validForm} email={email} password={password} repassword={repassword} setPassword={setPassword} setRePassword={setRePassword} setEmail={setEmail}/>
        </div>
    </div>
  )
}

export default Register
