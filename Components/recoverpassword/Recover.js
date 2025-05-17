"use client"
import Image from 'next/image'
import React, { Suspense, useRef, useState } from 'react'
import { useScreen } from '@/Hooks/useScreen'
import axios from 'axios'
import fetchLink from '@/Functions/fetchLink'
import TkcInput from '../TkcInput'
import { isValidateEmail } from '@/Functions/isValidateEmail'
import Squares from '../EmailVerification/Squares'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useRouter } from 'next/navigation'
import useVisible from '@/Hooks/useVisible'
import isValidatePassword from '@/Functions/isValidatePassword'

function Recover() {
    const [email, setEmail] = useState('')
    const [errlog, setErrLog] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const [loading1, setLoading1] = useState(false)
    const [svalue, setSvalue] = useState(['', '', '', '', '', ''])
    const [codeErr, setCodeErr] = useState('')
    const [currIndx, setCurrIndx] = useState(0)
    const [code ,setCode] = useState('111111')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')
    const router = useRouter()
    const large = useScreen()
    const codeRef = useRef(undefined)
    const finishRef = useRef(undefined)
    const visible = useVisible(codeRef.current)
    console.log(visible)
    function handleSubmit(e){
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('email', email)
        setLoading(true)
        axios({url:fetchLink('user/passwordRecovery'), method:'POST', data:formdata, headers:{"Content-Type":"application/json"}})
        .then((value) => {
          console.log(value.data)
          setCode(value.data.code)
          codeRef.current.scrollIntoView({
            behaviour:"smooth",
            block:"center",
            inline:"nearest"
          })
        })
        .catch(err => {console.error(err.response.data); setErrLog(err.response.data); setEmail()})
        .finally(()=>setLoading(false))
    }
    const handleValue = (indx, val) => {
      const newSvalue = [...svalue]
      newSvalue[indx] = val
      console.log(newSvalue)
      setSvalue(newSvalue)
      setCurrIndx(currIndx + 1)
      console.log(currIndx)
    }
    const handleLastStep = () => {
      console.log(+svalue.join('') === code)
      if(+svalue.join('') === code){
        console.log('hi')
        finishRef.current.scrollIntoView({
          behaviour:"smooth",
          block:"center",
          inline:"nearest"
        })
      }
      else{
        console.log('clicked')
        const newSval = Array(6).fill('')
        setSvalue(newSval)
        setCodeErr('The code is wrong!')

      }
    }

    const handleFinish = (e) => {
      e.preventDefault()
      setLoading1(true)
      const formData = new FormData()
      formData.append('email', email)
      formData.append('password', password)
      axios({url:fetchLink('user/passwordChange'), data:formData, method:'POST', headers:{"Content-Type":'application/json'}})
      .then((value) => {
        console.log(value.data)
        router.push(`/login`)
      })
      .catch((err)=> console.error(err.response.data))
      .finally(() => setLoading1(true))
    }

  return (
    <Suspense>
        <div className=' flex w-full justify-center px-2'>
            <div className={`mt-10`} style={{width:large?'400px':'340px'}}>
              <div>
                <div className=' flex justify-center'>
                    <div className=' flex flex-row gap-1.5 items-center'>
                        <Image src={'https://bucket-tkc.s3.ap-south-1.amazonaws.com/logo.png'} width={100} height={100} alt='logo'/>
                        <p className=' font-semibold text-[20px]'>TSA Knowledge Center</p>
                    </div>
                </div>
                <div className='overflow-x-hidden flex flex-row gap-3' style={{width:large?'400px':'340px'}}> 
                  <form onSubmit={(e) => handleSubmit(e)}  className='flex flex-col gap-3 ' style={{width:large?'400px':'340px'}}>
                      <p style={{width:large?'400px':'340px'}} className=' font-semibold text-[20px] text-center pt-16 pb-2.5'>Let's recover your password</p>
                      <TkcInput name='email' type='email' autocomplete='email' placeholder={'Enter your email-id'} value={email} handleChange={setEmail}/>
                      <div className=' flex justify-center'><button type='submit' className=' text-white font-semibold w-full p-2 rounded-md cursor-pointer' style={{backgroundColor:isValidateEmail(email)? (loading?'rgba(2, 72, 200, 0.14)':'rgba(7, 60, 160, 1)'):'rgba(2, 72, 200, 0.14)'}} disabled={!isValidateEmail(email)}>Continue</button></div>
                      {errlog &&  <p className = ' text-center text-red-600'>{errlog}</p>}
                  </form>
                  <div ref={codeRef} className={visible? '':'hidden'} style={{width:large?'400px':'340px'}}>
                    <p className=' text-[12px] mt-18 font-semibold' style={{width:large?'400px':'340px', fontSize:large? '14px':'12px'}}>Enter the 6 digits code send to {email}</p>
                    { codeErr && <p className='text-[13px] text-red-600 text-center'>{codeErr}</p>}
                    <div className=' flex justify-center w-full'>
                      <div className=' flex flex-row gap-1 mt-3.5 '>
                        {svalue.map((elt, indx) => <Squares setCurrIndx={setCurrIndx} key={indx} indx={indx} val={elt} setValue={handleValue} currIndx={currIndx}/>)}
                      </div>
                    </div>
                    <div className=' flex justify-center mt-2.5'><button onClick={()=> handleLastStep()} className=' text-white font-semibold w-2/3 p-2 rounded-md cursor-pointer' style={{backgroundColor:svalue.join('').length >= 6? 'rgba(7, 60, 160, 1)':'rgba(2, 72, 200, 0.14)'}} disabled={svalue.join('').length < 6}>Continue</button></div>
                  </div>
                  <form onSubmit={handleFinish} ref={finishRef} className=' flex flex-col gap-2' style={{width:large?'400px':'340px'}}>
                    <p className=' mt-18' style={{width:large?'400px':'340px'}}></p>
                    <TkcInput name='password' type='password' autocomplete='password' value={password} handleChange={setPassword} placeholder={'Enter your new password'} className={'w-full'}/>
                    <TkcInput name='password1' type='password' autocomplete='password1' value={repassword} handleChange={setRePassword} placeholder={'Verify your new password'} className={'w-full'}/>
                    <p style={{color:'rgba(0, 0, 0, 0.78)', fontSize:'11px'}}><ErrorOutlineIcon sx={{fontSize:20}}/>{' '}The password must contain at least six characters, a number, and a capital letter.</p>
                    <div className=' flex justify-center'><button type='submit' className=' text-white font-semibold w-full p-2 rounded-md cursor-pointer' style={{backgroundColor:password === repassword && isValidatePassword(password)? (loading1?'rgba(2, 72, 200, 0.14)':'rgba(7, 60, 160, 1)'):'rgba(2, 72, 200, 0.14)'}} disabled={(password !== repassword) && !isValidatePassword(password)}>Finish</button></div>
                  </form>
                </div>
              </div>  
            </div>
        </div>
    </Suspense>
  )
}

export default Recover
