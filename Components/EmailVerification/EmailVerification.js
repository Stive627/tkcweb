"use client"
import { useScreen } from '@/Hooks/useScreen'
import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import fetchLink from '@/Functions/fetchLink';
import Image from 'next/image';
import Link from 'next/link';
import Squares from './Squares';

function EmailVerification() {
    const [svalue, setSvalue] = useState(['', '', '', '', '', ''])
    const handleSvalue = (indx, val) => {
      const newArrValue = [...svalue]
        newArrValue[indx] = val
        setSvalue(newArrValue)
    }
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
          <div className=' mt-15 flex flex-row items-center text-[20px] font-semibold'>
            <Link href={'/register'}><ArrowBackIcon/></Link>
            <div className=' grow'><p className=' text-center'>E-Mail Verification</p></div>
          </div>
          <div className={`${large? 'text-[17px]':'text-[13px]'} px-2  mt-10 mb-10`}>
            <p>Enter the 06-digit code sent to <span className=' font-bold'>fossistive627@gmail.com</span></p>
          </div>
          <div className=' flex justify-between w-full px-5 gap-1'>
            {svalue.map((elt, indx) => <Squares key={indx} indx={indx} setValue={handleSvalue} val={elt}/>)}
          </div>
          <p className=' mt-5 px-9' style={{color:'rgba(2, 72, 200, 1)'}}>Resend Code</p>
          <div className=' flex justify-center mt-7' ><button style={{backgroundColor:svalue.join('').length === 6 ? 'rgba(2, 72, 200, 1)':'rgba(93, 125, 186, 1)'}} className=' text-white text-[16px] rounded-sm w-1/2 border-black font-semibold p-2 cursor-pointer'>Continue</button></div>
        </div>
    </div>
  )
}

export default EmailVerification
