import React, { useState } from 'react'
import TkcInput from '../TkcInput'
import TkcTextArea from '../TkcTexArea'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Image from 'next/image';

function AddTips({domain, title, setTitle, description, setDescription}) {
    const [addImage, setAddImage] = useState(false)
    const [imgfile, setImgFile] = useState(undefined)
  return (
    <div className=' border  p-3 w-full flex flex-col gap-2.5 relative'>
        <div className='flex justify-between '>
            <TkcInput value={title} handleChange={setTitle} placeholder={'Enter the title of tip'} className={'w-full'}/>
            <button className=' border'>{domain}</button>
        </div>
        <TkcTextArea value={description} setvalue={setDescription}/>
        {
            imgfile && <div className = ' absolute'>
                           <Image src={URL.createObjectURL(imgfile)} width={200} height={200} alt='tips images'/> 
                        </div>
        }
        <div className=' flex justify-between'>
            <div>
                <input type='file' id='tipfile' className=' hidden' value={imgfile} onChange={(e)=>e.target.files}/>
                <label onClick={()=>setAddImage(true)} htmlFor='tipfile'><AttachFileIcon style={{color:'rgba(2, 72, 200, 1)'}}/></label>
            </div>
            <div className=' flex flex-row gap-2'>
                <button className='' style={{borderColor:'rgba(2, 72, 200, 1)', color:'rgba(2, 72, 200, 1)'}}>Cancel</button>
                <button className='text-white border' style={{backgroundColor:'rgba(2, 72, 200, 1)', borderColor:'rgba(2, 72, 200, 0.54)'}}>Add</button>
            </div>
        </div>
      
    </div>
  )
}

export default AddTips
