import React from 'react'
import TkcInput from '../TkcInput'
import fetchLink from '@/Functions/fetchLink'
import Link from 'next/link'
import Image from 'next/image'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function RegistrationForm({email, password, repassword, setEmail, setPassword, setRePassword, validFom, handleSubmit, code}) {
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-3'>
        <TkcInput placeholder={'Enter your email'} value={email} handleChange={setEmail}/>
        <TkcInput placeholder={'Enter your password'} value={password} handleChange={setPassword}/>
        <TkcInput placeholder={'Re-Enter your password'} value={repassword} handleChange={setRePassword}/>
        <div className=' relative bottom-2 flex items-center flex-row  gap-0.5' style={{color:'rgba(0, 0, 0, 0.59)'}}>
          <ErrorOutlineIcon sx={{fontSize:18}}/>
          <p className=' text-[9px]'>The password should contain at least 06 characters, and 1 uppercase character.</p>
        </div>
        <div className = 'flex justify-center'><button type='submit'  className={`text-white font-semibold w-full p-2 rounded-md cursor-pointer`} style={{backgroundColor:validFom?'rgba(7, 60, 160, 1)':'rgba(101, 137, 204, 1)', cursor:!validFom?'not-allowed':'pointer'}} disabled={!validFom}>Register</button></div>
      </form>
        <button style={{borderColor:'rgba(0, 0, 0, 0.27)'}} className=' border rounded-md w-full cursor-pointer my-3 flex justify-center py-2'> <div className=' flex flex-row gap-4'><Image width={25} height={25} src={fetchLink('logogoogle.png')} alt='logo google'/>{'  '} <p className=' text-[16px]'>Continue with Google</p></div></button>
        <p className=' text-center text-[16px]'>Already have an account? <Link className=' underline text-blue-600' href={'/login'}>Login here</Link> </p>
    </>
  )
}

export default RegistrationForm
