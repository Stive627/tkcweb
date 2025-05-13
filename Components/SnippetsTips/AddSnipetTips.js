import React from 'react'
import TkcInput from '../TkcInput'
import TkcTextArea from '../TkcTexArea'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { useScreen } from '@/Hooks/useScreen';

function AddSnippetTips({domain,  handlCancel, handleDeleteImage, handleSubmit, setSnip, snip}) {
    const large = useScreen()
    const validAdd = snip.title && snip.description
    console.log(snip.imgfile)
  return (
    <div className=' flex justify-center relative top-8 ml-1.5 '>
        <div className={`border p-3 rounded-md  flex flex-col  gap-2.5 relative ${large ? 'w-2/3':'w-full'}`} style={{borderColor:'rgba(0, 0, 0, 0.22)'}}>
            <div className='flex justify-between gap-2.5'>
                <TkcInput borderColor={'rgba(0, 0, 0, 0.3)'} value={snip.title} handleChange={(val)=>setSnip({...snip, title:val})} placeholder={'Enter the title of tip'} className={'w-full'}/>
                <button style={{borderColor:'rgba(0, 0, 0, 0.3)'}} className=' border w-full rounded-md'>{domain}</button>
            </div>
            <TkcTextArea value={snip.description} setvalue={val => setSnip({...snip, description:val})} placeholder={'Add the description'}/>
            {}
            {
                snip.imgfile && <div className = 'flex justify-center border py-1 relative' style={{borderStyle:'dashed', borderColor:'rgba(0, 0, 0, 0.3)'}}>
                            <button  onClick={()=> handleDeleteImage()} className=' w-7 h-7  absolute right-5 rounded-full text-white' style={{backgroundColor:'rgba(0, 0, 0, 0.78)'}}><CloseIcon/></button>
                            <Image  src={URL.createObjectURL(snip.imgfile[0])} width={100} height={100} alt='tips images'/> 
                            </div>
            }
            <div className=' flex justify-between items-center'>
                <div>
                    <input type='file' multiple  id='tipfile' className=' hidden'  onChange={(e)=>setSnip({...snip, imgfile:e.target.files})}/>
                    <label className={`${snip.imgfile && 'hidden'}`}  htmlFor='tipfile'><AttachFileIcon className=' cursor-pointer' style={{color:'rgba(2, 72, 200, 1)'}}/></label>
                </div>
                <div className=' flex flex-row gap-2 text-[16px]'>
                    <button onClick={()=>handlCancel()}  className=' border w-20 rounded-md py-1 cursor-pointer' style={{borderColor:'rgba(2, 72, 200, 1)', color:'rgba(2, 72, 200, 1)'}}>Cancel</button>
                    <button onClick={() =>handleSubmit()} className='text-white border w-20 py-1 rounded-md cursor-pointer' style={{backgroundColor:validAdd?'rgba(2, 72, 200, 1)':'rgba(94, 140, 225, 1)', borderColor:'rgba(2, 72, 200, 0.54)'}} disabled={!validAdd}>Add</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddSnippetTips
