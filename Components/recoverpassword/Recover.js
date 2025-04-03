"use client"
import Image from 'next/image'
import React, { Suspense, useState } from 'react'
import { useScreen } from '@/Hooks/useScreen'
import axios from 'axios'
import fetchLink from '@/Functions/fetchLink'
import TkcInput from '../TkcInput'
import { isValidateEmail } from '@/Functions/isValidateEmail'
import Squares from '../EmailVerification/Squares'

function Recover() {
    const [email, setEmail] = useState('')
    const [errlog, setErrLog] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const [svalue, setSvalue] = useState(['', '', '', '', '', ''])
    const [code ,setCode] = useState(undefined)
    const large = useScreen()
    function handleSubmit(e){
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('email', email)
        setLoading(true)
        axios({url:fetchLink('user/login'), method:'POST', data:formdata, headers:{"Content-Type":"application/json"}})
        .then((value) => {
          console.log(value.data)
          setCode(value.data.code)
        })
        .catch(err => {console.error(err.response.data); setErrLog(err.response.data); setEmail()})
        .finally(()=>setLoading(false))
    }

  return (
    <>
        <div className=' flex w-full justify-center px-2'>
            <div className={`mt-10  `} style={{width:large?'400px':'340px'}}>
              <div>
                <div className=' flex justify-center'>
                    <div className=' flex flex-row gap-1.5 items-center'>
                        <Image src={fetchLink('logo.png')} width={100} height={100} alt='logo'/>
                        <p className=' font-semibold text-[20px]'>TSA Knowledge Center</p>
                    </div>
                </div>
                <div className='overflow-x-scroll flex flex-row gap-3' style={{width:large?'400px':'340px'}}> 
                  <form onSubmit={(e) => handleSubmit(e)}  className='flex flex-col gap-3 ' style={{width:large?'400px':'340px'}}>
                      <p style={{width:large?'400px':'340px'}} className=' font-semibold text-[20px] text-center pt-16 pb-2.5'>Let's recover your password</p>
                      <TkcInput placeholder={'Enter your email-id'} value={email} handleChange={setEmail}/>
                      <div className=' flex justify-center'><button type='submit' className=' text-white font-semibold w-full p-2 rounded-md cursor-pointer' style={{backgroundColor:isValidateEmail(email)? (loading?'rgba(2, 72, 200, 0.14)':'rgba(7, 60, 160, 1)'):'rgba(2, 72, 200, 0.14)'}} disabled={!isValidateEmail(email)}>Continue</button></div>
                      {errlog &&  <p className = ' text-center text-red-600'>{errlog}</p>}
                  </form>
                  <div className=' ' style={{width:large?'400px':'340px'}}>
                    <p className=' text-[12px] mt-18 font-semibold' style={{width:large?'400px':'340px', fontSize:large? '14px':'12px'}}>Enter the 6 digits code send to {email}</p>
                    <div className=' w-full flex flex-row gap-3 mt-3.5 '>
                      {svalue.map((elt, indx) => <Squares key={indx} />)}
                    </div>
                  </div>
                </div>
              </div>  
            </div>
        </div>
    </>
  )
}

export default Recover
