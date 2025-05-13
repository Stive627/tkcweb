"use client"
import fetchLink from '@/Functions/fetchLink'
import Image from 'next/image'
import React, { useState } from 'react'
import { useScreen } from '@/Hooks/useScreen'
import RegistrationForm from './RegistrationForm'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { isValidateEmail } from '@/Functions/isValidateEmail'
import isValidatePassword from '@/Functions/isValidatePassword'

function Register() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')
    const [loading, setLoading] = useState(false)
    const large = useScreen()
    const validForm = isValidateEmail(email) && isValidatePassword(password) && (password === repassword)
    function handleSubmit(e){
      e.preventDefault()
      const formdata = new FormData()
      formdata.append('email', email)
      setLoading(true)
      axios({url:fetchLink('user/emailverification'), data:formdata, method:"POST", headers:{"Content-Type":"application/json"}})
      .then((value) => {
        console.log(value.data)
        router.push(`/EmailVerification?code=${value.data.code}&password=${password}&email=${email}`)
      })
      .catch(err => console.error(err))
      .finally(()=>setLoading(false))
    }
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
          <RegistrationForm loading={loading} handleSubmit={handleSubmit} validFom={validForm} email={email} password={password} repassword={repassword} setPassword={setPassword} setRePassword={setRePassword} setEmail={setEmail}/>
        </div>
    </div>
  )
}

export default Register
