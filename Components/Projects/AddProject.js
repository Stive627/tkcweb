"use client"
import React, { useEffect } from 'react'
import TkcInput from '../TkcInput'
import TkcTextArea from '../TkcTexArea'
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { useScreen } from '@/Hooks/useScreen';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';

function AddProject({domain, proj, setProj, handlSubmit,  handlCancel, handleDeleteImage }) {
    const large = useScreen()
    const validAdd = proj.title && proj.description
    useEffect(() =>{
        console.log(proj.imagefiles)
    },[])
  return (
    <form onSubmit={handlSubmit} className={`border p-3 rounded-md  flex flex-col gap-2.5 relative  w-full`} style={{borderColor:'rgba(0, 0, 0, 0.22)'}}>
        <div className='flex justify-between gap-2.5'>
            <TkcInput borderColor={'rgba(0, 0, 0, 0.3)'} value={proj.title} handleChange={(val)=>setProj({...proj, title:val})} placeholder={'Enter the title of project'} className={'w-full'}/>
            <button type='button' style={{borderColor:'rgba(0, 0, 0, 0.3)'}} className=' border w-full rounded-md'>{domain}</button>
        </div>
        <TkcTextArea value={proj.description} setvalue={(val)=>setProj({...proj, description:val})} placeholder={'Add the description of project'}/>
        {
            proj.img.length>0 && 
                        <div>
                            {
                                proj.img.map((elt, indx) => (
                                    <div key={indx} className = 'flex justify-center border py-1 relative' style={{borderStyle:'dashed', borderColor:'rgba(0, 0, 0, 0.3)'}}>
                                        <button type='button'  onClick={()=> handleDeleteImage(indx)} className=' w-7 h-7  absolute right-5 rounded-full text-white' style={{backgroundColor:'rgba(0, 0, 0, 0.78)'}}><CloseIcon/></button>
                                        <Image  src={URL.createObjectURL(elt[0])} width={100} height={100} alt='tips images'/> 
                                        <p className=' absolute bottom-0 right-0'>{elt[0].name}</p>
                                    </div>
                                ))
                            }
                        </div>
        }
        <div>
            <input  type='file' onChange={(e)=>{setProj({...proj, img:[...proj.img, e.target.files]}); console.log(e.target.files[0])}} className=' hidden' id='fileimages'/>
            <label htmlFor='fileimages'>
                <div className=' w-full rounded-md h-32 border flex justify-center items-center cursor-pointer' style={{borderStyle:'dashed',borderColor:'rgba(0, 0, 0, 0.22)'}}>
                    <InsertPhotoRoundedIcon sx={{fontSize:50, color:'blue'}}/>
                </div>
            </label>
        </div>
        
        <div className=' flex flex-row gap-2  items-center relative bottom-2' style={{color:'rgba(0, 0, 0, 0.59)'}}>
            <ErrorOutlineIcon />
            <p className=' text-[9px]'>Rename the image names as their descriptions</p>
        </div>
        <div className=' flex justify-end items-center'>
            <div className=' flex flex-row gap-2 text-[16px]'>
                <button type='button' onClick={()=>handlCancel()}  className=' border w-20 rounded-md py-1 cursor-pointer' style={{borderColor:'rgba(2, 72, 200, 1)', color:'rgba(2, 72, 200, 1)'}}>Cancel</button>
                <button type='submit' className='text-white border w-20 py-1 rounded-md cursor-pointer' style={{backgroundColor:validAdd?'rgba(2, 72, 200, 1)':'rgba(94, 140, 225, 1)', borderColor:'rgba(2, 72, 200, 0.54)'}} disabled={!validAdd}>Add</button>
            </div>
        </div>
      
    </form>
  )
}

export default AddProject
