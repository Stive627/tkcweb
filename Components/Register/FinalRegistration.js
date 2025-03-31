"use client"
import React, { useRef, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TkcInput from '../TkcInput';
import { useScreen } from '@/Hooks/useScreen';
import validatePassword from '@/Functions/validatePassword';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import validUsername from '@/Functions/validUsername';


const EnterPassword = ({password, setpassword, handleNext, passwordRef}) => {
    const large = useScreen()

    return(
        <div ref={passwordRef}>
            <p className=' text-[21px]'>Enter your password</p>
            <TkcInput  className={`  my-2.5 ${large ? 'w-96':'w-72'}`} value={password} handleChange={setpassword} placeholder={'Enter your password'}/>
            <p className='text-[11px]'>The password must contain at least six characters, a number, and a capital letter.</p>
            <div className=' flex justify-center'><button  onClick={()=> handleNext()} className={`text-white font-semibold ${large? 'w-1/3':'w-1/2' } p-2 rounded-md cursor-pointer`} style={{backgroundColor:validatePassword(password)?'rgba(7, 60, 160, 1)':'rgba(101, 137, 204, 1)'}} disabled={!validatePassword(password)}>Continue</button></div>
        </div>
    )
}

const VerifyPassword = ({repassword,password, setRepassword, repasswordRef, handleNext}) => {
    const large = useScreen()
    return(
        <div ref={repasswordRef}>
            <p className=' text-[21px]'>Verify your password</p>
            <TkcInput className={`  my-2.5 ${large ? 'w-96':'w-72'}`}  value={repassword} handleChange={setRepassword} placeholder={'Enter your password'}/>
            <p className='text-[11px]'>The password must be the one entered previously.</p>
            <div className=' flex justify-center mt-2'><button onClick={()=> handleNext()} className=' text-white font-semibold w-1/2 p-2 rounded-md cursor-pointer ' style={{backgroundColor:repassword === password ? 'rgba(7, 60, 160, 1)':'rgba(101, 137, 204, 1)'}} disabled={password !== repassword}>Continue</button></div>
        </div>
    )
}

const UsernameUX = ({username, setUsername, usernameRef, handleNext}) => {
    const large = useScreen()
    return(
        <div ref={usernameRef}>
            <p className=' text-[21px]'>Your username</p>
            <TkcInput className={`  my-2.5 ${large ? 'w-96':'w-72'}`} value={username} handleChange={setUsername} placeholder={'Enter your username'}/>
            <div className=' text-[10px] relative bottom-1' style={{color:'rgba(0, 0, 0, 0.78)'}}>
                  <p><ErrorOutlineIcon/>Please add your role after your name.</p>
                  <div className=' pl-5.5 relative bottom-1'><p>For example your name is abc and your role is uiux so your 
                  username will be @abcuiux</p>
                  </div>
            </div>
            <div className=' flex justify-center mt-3.5'><button  onClick={()=> handleNext()} className=' text-white font-semibold w-1/3 p-2 rounded-md cursor-pointer' style={{backgroundColor:validUsername(username)?'rgba(7, 60, 160, 1)':'rgba(101, 137, 204, 1)'}} disabled={!validUsername(username)}>Finish</button></div>
        </div>
    )
}

function FinalRegistration({password, repassword, handlePassword, handleSetpassword, username, handleUsername}) {
    const passwordRef = useRef(undefined)
    const repasswordRef = useRef(undefined)
    const usernameRef = useRef(undefined)
    const [currInterface, setCurrInterface] = useState(0)
    const refArr = [passwordRef,repasswordRef, usernameRef]
    const large = useScreen()
    const handlePrevious = () =>{
        if(currInterface === 0){
            return;
        }
        refArr[currInterface - 1].current.scrollIntoView({
            block:'center',
            inline:'nearest',
            behaviour:'smooth'
        })
        setCurrInterface(currInterface - 1)
    } 
    const handleNext = () => {
        if(currInterface === 2){
            return;
        }
        refArr[currInterface + 1].current.scrollIntoView({
            behaviour:'smooth',
            block:'center',
            inline:'nearest'
        })
        setCurrInterface(currInterface + 1)
    }
  return (
    <div className=' mt-4'>
      <div className=' flex flex-row my-3'>
       { <button onClick={() => handlePrevious()} className=' cursor-pointer'><ArrowBackIcon/></button>}
        <div className=' grow flex justify-center gap-2.5'>
            {['1', '2','3'].map((elt, indx) => <div style={{backgroundColor:currInterface >= indx ? 'black' : 'rgba(217, 217, 217, 1)'}} className=' flex justify-center items-center w-9 h-9 text-white rounded-full' key={indx}><p></p>{elt}</div>)}
        </div>
      </div>
      <div className=' flex justify-center'>
        <div className={`flex flex-row  gap-18 overflow-hidden  ${large ? 'w-96':'w-72'} `}>
            <EnterPassword passwordRef={passwordRef} password={password} setpassword={handlePassword} handleNext={handleNext}/>
            <VerifyPassword password={password} repasswordRef={repasswordRef} repassword={repassword} setRepassword={handleSetpassword} handleNext={handleNext}/>
            <UsernameUX usernameRef={usernameRef} username={username} setUsername={handleUsername} handleNext={handleNext}/>
        </div>
      </div>
    </div>
  )
}

export default FinalRegistration
