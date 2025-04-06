"use client"
import fetchLink from '@/Functions/fetchLink'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Image from 'next/image'
import React, { useState } from 'react'
import './home.css'
import { useScreen } from '@/Hooks/useScreen';
import Content from './Content';
import Avatar from '../Avatar/Avatar';

function HOmeTKC() {
  const [section, setSection] = useState(undefined)
  const [showAvatar, setShowAvatar] = useState(false)
  const large = useScreen()
  return (
    <div onClick={()=>{if(showAvatar){setShowAvatar(false)}else{return;}}} className=' w-screen flex justify-center '>
      <div className={`${large ? 'w-1/2 mt-5': 'w-full pr-2.5 mt-2'}  h-full`}>
        <div className={`flex flex-row justify-between`}>
          <div className=' flex flex-row  items-center'>
              <Image src={fetchLink('logo.png')} width={80} height={80} alt='logo tkc'/>
              <p className={`font-semibold ${large ? 'text-[20px]':'text-[17px] top-1'} relative right-1 `}>TSA Knowledge Center</p>
          </div>
          <div className=' flex flex-row gap-2 items-center'>
            <NotificationsNoneIcon sx={{fontSize:large? 40 : 25}}/>
            <Avatar show={showAvatar} handleShow={()=>setShowAvatar(!showAvatar)}/>
          </div>
        </div>
        <div className={`flex justify-center ${large? 'mt-12':'mt-10'}`}>
          <div className=' w-3/4'>
            <div className=' flex flex-row gap-10'>
              <button onClick={() =>{if(section === 0){return;} setSection(0)}} className=' border-none text-[16px] cursor-pointer'>Snippets & tips</button>
              <button onClick={() =>{if(section === 1){return;} setSection(1)}} className='border-none text-[16px] cursor-pointer'>Projects</button>
            </div>
            <hr className={`${section === 1 ? 'w-16' : 'w-27'} ${section === 1 && 'scrollgo'} ${section === 0 && 'scrollback'}`}/>
          </div>
        </div>
        <Content section={section}/>
      </div>
    </div>
  )
}

export default HOmeTKC
