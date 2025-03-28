"use client"
import fetchLink from '@/Functions/fetchLink'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Image from 'next/image'
import React, { useState } from 'react'
import './home.css'
import { useScreen } from '@/Hooks/useScreen';

function HOmeTKC() {
  const [section, setSection] = useState(0)
  const large = useScreen()
  return (
    <div className=' w-screen flex justify-center '>
      <div className={`${large && 'w-1/2'}  mt-5 h-full`}>
        <div className={`flex flex-row ${large?'justify-between':'gap-5'}`}>
          <div className=' flex flex-row  items-center'>
              <Image src={fetchLink('logo.png')} width={80} height={80} alt='logo tkc'/>
              <p className=' font-semibold text-[20px]'>TSA Knowledge Center</p>
          </div>
          <div className=' flex flex-row gap-2 items-center'>
            <NotificationsNoneIcon sx={{fontSize:35}}/>
            <div className=' w-9 h-9 flex items-center justify-center border rounded-full' style={{borderColor:'rgba(0, 0, 0, 0.4)'}}>
              <p>S</p>
            </div>
          </div>
        </div>
        <div className=' flex justify-center mt-18'>
          <div className=' w-3/4'>
            <div className=' flex flex-row gap-10'>
              <button onClick={() => setSection(section === 0 ? section : 1)} className=' border-none text-[16px]'>Snippets & tips</button>
              <button onClick={() => setSection(section === 1 ? section : 0)} className='border-none text-[16px]'>Projects</button>
            </div>
            <hr className={`w-27 ${section === 0 &&'scrollgo'} ${section === 1 &&'scrollback'}`}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HOmeTKC
