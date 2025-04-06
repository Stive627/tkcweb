import { useScreen } from '@/Hooks/useScreen'
import React, { useEffect, useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SwitchAccessShortcutIcon from '@mui/icons-material/SwitchAccessShortcut';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import axios from 'axios';
import fetchLink from '@/Functions/fetchLink';

function Avatar({handleShow, show}) {
    const [profile, setProfile] = useState({username:'', email:''})
    useEffect(() => {
        const token = localStorage.getItem('tkc_token')
        axios({url:fetchLink('user/connect'), method:'GET', headers:{"Content-Type":"application/json", Authorization:`${token}`}})
        .then((value)=> {setProfile({username:value.data.data.username, email:value.data.data.email}); console.log(value.data.data)})
        .catch(err => {console.log(err.response); setProfile(err.response.data.authenticated)})
    },[])
    const handleLogout = ()=>{
        localStorage.removeItem('tkc_token')
        if(typeof window !== 'undefined'){
            window.location.reload()
        }
    }
    const large = useScreen()
  return (
    <div className=' relative'>
      <button onClick={()=> handleShow()} className={`${large? 'w-11 h-11':'w-8 h-8'} flex items-center justify-center border-2 rounded-full`} style={{borderColor:'rgba(85, 17, 168, 0.95)', backgroundColor:'rgba(85, 17, 168, 0.07)', color:'rgba(85, 17, 168, 1)'}}>
              <p>S</p>
        </button>
    {show && <div style={{borderColor:'rgba(0, 0, 0, 0.22)'}} className={`border-2 rounded-md bg-white absolute  divide-gray-400 cursor-pointer flex flex-col divide-y w-67 h-52 ${large? 'left-14 -top-0':'right-1 top-9'}`}>
                <div className=' p-2 w-full flex flex-row items-center gap-3'>
                    <button className={`${large? 'w-9 h-9':'w-8 h-8'} flex items-center justify-center border-2 rounded-full`} style={{borderColor:'rgba(85, 17, 168, 0.95)', backgroundColor:'rgba(85, 17, 168, 0.07)', color:'rgba(85, 17, 168, 1)'}}><p>S</p></button>
                    <div>
                        <p className=' font-bold text-[16px]'>{profile.email}</p>
                        <p className='text-[16px]'>{profile.username}</p>
                    </div>
                </div>
                <button className=' flex justify-between flex-row py-1 px-3 items-center'>
                    <div className=' flex flex-row gap-4 items-center'>
                        <DarkModeIcon sx={{fontSize:28, color:'rgba(95, 99, 104, 1)'}}/>
                        <p className=' text-[16px]'>Theme</p>
                    </div>
                   <div>
                    <KeyboardArrowRightIcon sx={{fontSize:28, color:'rgba(95, 99, 104, 1)'}}/>
                   </div>
                </button>
                <button className=' flex justify-between flex-row py-1 px-3 items-center'>
                    <div className=' flex flex-row gap-4 items-center'>
                        <SwitchAccessShortcutIcon sx={{fontSize:28, color:'rgba(95, 99, 104, 1)'}}/>
                        <p className=' text-[16px]'>Switch account</p>
                    </div>
                   <div>
                    <KeyboardArrowRightIcon sx={{color:'rgba(95, 99, 104, 1)'}}/>
                   </div>
                </button>
                <button className=' flex flex-row gap-4 items-center py-1 px-3'>
                    <SettingsIcon sx={{color:'rgba(95, 99, 104, 1)'}}/>
                    <p>Settings</p>                   
                </button>
                <button onClick={()=> handleLogout()} className=' flex flex-row gap-4 py-1 px-3 text-red-700 items-center'>
                    <LogoutIcon/>
                    <p className=' text-[16px]'>Logout</p>
                </button>
            </div>
    }
    </div>
  )
}

export default Avatar
