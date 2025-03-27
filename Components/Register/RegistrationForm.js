import React from 'react'
import TkcInput from '../TkcInput'
import fetchLink from '@/Functions/fetchLink'
import Link from 'next/link'
import Image from 'next/image'

function RegistrationForm({username, password, repassword, setUsername, setPassword, setRePassword}) {
  return (
    <>
      <form className='flex flex-col gap-3'>
        <TkcInput placeholder={'Enter your username'} value={username} handleChange={setUsername}/>
        <TkcInput placeholder={'Enter your password'} value={password} handleChange={setPassword}/>
        <TkcInput placeholder={'Re-Enter your password'} value={repassword} handleChange={setRePassword}/>
        <div className=' flex justify-center'><button type='submit' className=' text-white font-semibold w-1/3 p-2 rounded-md cursor-pointer' style={{backgroundColor:'rgba(7, 60, 160, 1)'}} disabled={false}>Register</button></div>
      </form>
        <button style={{borderColor:'rgba(0, 0, 0, 0.27)'}} className=' border rounded-md w-full cursor-pointer my-3 flex justify-center py-2'> <div className=' flex flex-row gap-4'><Image width={25} height={25} src={fetchLink('logogoogle.png')} alt='logo google'/>{'  '} <p className=' text-[16px]'>Continue with Google</p></div></button>
        <p className=' text-center text-[16px]'>Already have an account? <Link className=' underline text-blue-600' href={'/login'}>Login here</Link> </p>
    </>
  )
}

export default RegistrationForm
