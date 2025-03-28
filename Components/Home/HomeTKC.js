"use client"
import fetchLink from '@/Functions/fetchLink'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Image from 'next/image'
import React, { useState } from 'react'
import './home.css'
import { useScreen } from '@/Hooks/useScreen';

function HOmeTKC() {
  const [section, setSection] = useState(undefined)
  const large = useScreen()
  return (
    <div className=' w-screen flex justify-center '>
      <div className={`${large && 'w-1/2'}  mt-5 h-full`}>
        <div className={`flex flex-row ${large?'justify-between':'gap-5'}`}>
          <div className=' flex flex-row  items-center'>
              <Image src={fetchLink('logo.png')} width={80} height={80} alt='logo tkc'/>
              <p className={`font-semibold ${large ? 'text-[20px]':'text-[15px]'}`}>TSA Knowledge Center</p>
          </div>
          <div className=' flex flex-row gap-2 items-center'>
            <NotificationsNoneIcon sx={{fontSize:large? 35 : 25}}/>
            <div className={`${large? 'w-9 h-9':'w-8 h-8'} flex items-center justify-center border rounded-full`} style={{borderColor:'rgba(0, 0, 0, 0.4)'}}>
              <p>S</p>
            </div>
          </div>
        </div>
        <div className=' flex justify-center mt-18'>
          <div className=' w-3/4'>
            <div className=' flex flex-row gap-10'>
              <button onClick={() =>{if(section === 0){return;} setSection(0)}} className=' border-none text-[16px] cursor-pointer'>Snippets & tips</button>
              <button onClick={() =>{if(section === 1){return;} setSection(1)}} className='border-none text-[16px] cursor-pointer'>Projects</button>
            </div>
            <hr className={`${section === 1 ? 'w-16' : 'w-27'} ${section === 1 && 'scrollgo'} ${section === 0 && 'scrollback'}`}/>
          </div>
        </div>
        <div className=' mt-4  h-96 flex justify-center items-center'><p>No content. Click here to <span style={{color:'rgba(2, 72, 200, 1)'}}>add</span></p></div>
      </div>
    </div>
  )
}

export default HOmeTKC
