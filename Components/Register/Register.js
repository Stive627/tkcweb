import fetchLink from '@/Functions/fetchLink'
import Image from 'next/image'
import React from 'react'

function Register() {
  return (
    <div className=' flex w-full justify-center'>
        <div className=' mt-10'>
        <div className=' flex flex-row gap-1.5 items-center'>
            <Image src={fetchLink('logo.png')} width={100} height={100} alt='logo'/>
            <p className=' font-semibold text-[20px]'>TSA Knowledge Center</p>
        </div>
        <p className=' font-semibold text-[20px] text-center pt-7'>Register to continue</p>
        </div>
    </div>
  )
}

export default Register
