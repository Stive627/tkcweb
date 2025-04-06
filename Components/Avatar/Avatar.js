import { useScreen } from '@/Hooks/useScreen'
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SwitchAccessShortcutIcon from '@mui/icons-material/SwitchAccessShortcut';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Avatar({handleShow, show}) {
    const handleLogout = ()=>{
        localStorage.removeItem('tkc_token')
        if(typeof window !== 'undefined'){
            window.location.reload()
        }
    }
    const large = useScreen()
  return (
    <div className=' relative'>
      <button onClick={()=> handleShow()} className={`${large? 'w-9 h-9':'w-8 h-8'} flex items-center justify-center border-2 rounded-full`} style={{borderColor:'rgba(85, 17, 168, 0.95)', backgroundColor:'rgba(85, 17, 168, 0.07)', color:'rgba(85, 17, 168, 1)'}}>
              <p>S</p>
        </button>
    {show && <div style={{borderColor:'rgba(0, 0, 0, 0.22)'}} className={`border-2 rounded-sm bg-white absolute  divide-gray-400 cursor-pointer flex flex-col divide-y w-54 h-50 ${large? 'left-11 top-0':'right-1 top-9'}`}>
                <div className=' p-2 w-full flex flex-row items-center gap-3'>
                    <button className={`${large? 'w-9 h-9':'w-8 h-8'} flex items-center justify-center border-2 rounded-full`} style={{borderColor:'rgba(85, 17, 168, 0.95)', backgroundColor:'rgba(85, 17, 168, 0.07)', color:'rgba(85, 17, 168, 1)'}}><p>S</p></button>
                    <div>
                        <p className=' font-bold'>fossisti</p>
                        <p>Username</p>
                    </div>
                </div>
                <button className=' flex justify-between flex-row p-1 items-center'>
                    <div className=' flex flex-row gap-4 '>
                        <DarkModeIcon/>
                        <p>Theme</p>
                    </div>
                   <div>
                    <KeyboardArrowRightIcon/>
                   </div>
                </button>
                <button className=' flex justify-between flex-row p-1 items-center'>
                    <div className=' flex flex-row gap-4'>
                        <SwitchAccessShortcutIcon/>
                        <p>Switch account</p>
                    </div>
                   <div>
                    <KeyboardArrowRightIcon/>
                   </div>
                </button>
                <button className=' flex flex-row gap-4 p-1 items-center'>
                    <SettingsIcon/>
                    <p>Settings</p>                   
                </button>
                <button onClick={()=> handleLogout()} className=' flex flex-row gap-4 text-red-600 p-1 items-center'>
                    <LogoutIcon/>
                    <p>Logout</p>
                </button>
            </div>
    }
    </div>
  )
}

export default Avatar
