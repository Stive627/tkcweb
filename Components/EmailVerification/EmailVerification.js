"use client"
import { useScreen } from '@/Hooks/useScreen'
import React, { useRef, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import fetchLink from '@/Functions/fetchLink';
import Image from 'next/image';
import Link from 'next/link';
import Squares from './Squares';
import { useRouter, useSearchParams } from 'next/navigation';
import TkcInput from '../TkcInput';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import axios from 'axios';
import isValidUsername from '@/Functions/isValidUsername';


function EmailVerification() {
    const [svalue, setSvalue] = useState(['', '', '', '', '', ''])
    const searchparams = useSearchParams()
    const code = searchparams.get('code')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const usernameRef = useRef(undefined)
    const [currIndx, setCurrIndx] = useState(0)
    const email = searchparams.get('email')
    const [username, setUsername] = useState(/[^@]*/.exec(email)[0])
    const [err, setErr] = useState('')
    const password = searchparams.get('password')
    const handleSvalue = (indx, val) => {
      const newArrValue = [...svalue]
        newArrValue[indx] = val
        setSvalue(newArrValue)
        setCurrIndx(currIndx + 1)
    }
    const large = useScreen()
    const handleVerify = () => {
      usernameRef.current.scrollIntoView({
        behaviour:'smooth',
        block:'center',
        inline:'nearest'
      })
    }
    const handleFinish = () => {
      const formdata = new FormData()
      formdata.append('username', username)
      formdata.append('email', email)
      formdata.append('password', password)
      setLoading(true)
      axios({url:fetchLink('user/register'), method:'POST', data:formdata, headers:{"Content-Type":"application/json"}})
      .then((value) => {
        console.log(value.data)
        router.push('/')
      })
      .catch(err => {console.error(err.response.data); setErr(err.response.data)})
      .finally(()=>setLoading(false))
    }
  return (
    <div className=' flex w-full justify-center'>
        <div className={`mt-10 `} style={{width:'450px'}}>
          <div className=' flex justify-center'>
              <div className=' flex flex-row gap-1.5 items-center'>
                  <Image src={fetchLink('logo.png')} width={100} height={100} alt='logo'/>
                  <p className=' font-semibold text-[20px]'>TSA Knowledge Center</p>
              </div>
          </div>
            <div className=' flex justify-center'>
            <div className=' flex flex-row gap-5 overflow-hidden' style={{width:large?'450px':'350px'}}>
            <div className=' ' style={{width:large?'450px':'350px'}}>
              <div style={{width:large?'450px':'350px'}} className='  mt-15  flex flex-row items-center text-[20px] font-semibold'>
                <Link href={'/register'}><ArrowBackIcon/></Link>
                <div className=' grow'><p className=' text-center'>E-Mail Verification</p></div>
              </div>
              <div className={`${large? 'text-[17px]':'text-[13px]'} px-2  mt-10 mb-10`}>
                <p>Enter the 06-digits code sent to <span className=' font-bold'>{email}</span></p>
              </div>
              <div className={`flex justify-between w-full  gap-1 ${large && 'px-4'}`}>
                {svalue.map((elt, indx) => <Squares currIndx={currIndx} setCurrIndx={setCurrIndx} key={indx} indx={indx} setValue={handleSvalue} val={elt}/>)}
              </div>
              <p className=' mt-5 px-9 cursor-pointer' style={{color:'rgba(2, 72, 200, 1)'}}>Resend Code</p>
              <div className=' flex justify-center mt-7' ><button onClick={()=> handleVerify()} style={{backgroundColor:svalue.join('').length === 6 && svalue.join('') === code ? 'rgba(2, 72, 200, 1)':'rgba(93, 125, 186, 1)'}} disabled={!(svalue.join('').length === 6 && svalue.join('') === code)} className=' text-white text-[16px] rounded-sm w-1/2 border-black font-semibold p-2 cursor-pointer'>Continue</button></div>
            </div>
            <div className='  flex justify-center items-center' style={{width:large?'450px':'350px'}} ref={usernameRef}>
              <div className=''>
                {err &&<p className=' text-center text-red-600'>{err}</p>}
                <p className=' text-[21px] ' style={{width:large?'450px':'350px'}}>Your username</p>
                <TkcInput name={'username'} autocomplete={'username'} type={'text'} className={'w-3/4 my-3 '} value={username} handleChange={setUsername} placeholder={'Enter the username'}/>
                <div className=' text-[10px] relative' style={{color:'rgba(0, 0, 0, 0.78)'}}>
                  <p><ErrorOutlineIcon/>Please add your role after your name.</p>
                  <div className=' pl-5.5 relative bottom-1'><p>For example your name is abc and your role is uiux so your 
                  username will be @abcuiux</p>
                  </div>
                </div>
                <div className=' flex justify-center mt-4 text-white'><button onClick={() => handleFinish()} disabled={!isValidUsername(username)} className=' p-2 rounded-md w-1/2 cursor-pointer' style={{borderColor:'rgba(2, 72, 200, 1)', backgroundColor:isValidUsername(username)?(loading? 'rgba(2, 72, 200, 0.14)':'rgba(7, 60, 160, 1)'):'rgba(101, 137, 204, 1)'}}>Finish</button></div>
              </div>
            </div>
          </div>
            </div>
        </div>
    </div>
  )
}

export default EmailVerification
