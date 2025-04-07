import Image from 'next/image'
import React, { useState } from 'react'
import './snippet.css'
import fetchLink from '@/Functions/fetchLink'
import CloseIcon from '@mui/icons-material/Close';
import GalleryProject from '../GalleryProject/GalleryProject';

function SingleContentLine({indx, handlOpen, openTip, elt, setOpenTip, handleDeleteTips}) {
  const [show, setShow] = useState('false')
  const [showGallery, setShowGallery] = useState(false)
  return (
    <div onClick={()=>{if(show){setOpenTip(''); setShow('')}else{handlOpen(indx); setShow(String(indx))}}} style={{backgroundColor:indx%2 === 1 ? 'rgba(0, 0, 0, 0.04)':'white'}} className='cursor-pointer pb-2'>
      <div className=' w-full flex flex-row justify-between  items-center gap-3.5'>
        <div className=' flex flex-row gap-3 items-center'>
          <div style={{borderColor:'rgba(46, 123, 253, 1)', backgroundColor:'rgba(151, 189, 253, 0.27)'}} className=' w-8 h-8 flex justify-center items-center border rounded-full'><p>{indx + 1}</p></div>
          <p className='text-[16px]'>{elt.title}</p>
        </div>
        {indx === openTip && <div className=' flex flex-row'>
          <button onClick={()=> handleDeleteTips(elt._id)} className=' text-red-600'><CloseIcon/></button>
          </div>}
      </div>
      <div className={`${(indx === openTip) ? 'show':'hidden'}`}>
          <div className={`border border-gray-50 `}>
              <p>{elt.description}</p>
          </div>
          {elt.image !== 'undefined' && elt.image && <div className=' flex justify-center'><Image onClick={(e)=> { e.stopPropagation(); setShowGallery(true)}} src={typeof elt.image === 'string' ? fetchLink(elt.image.slice(6)) : URL.createObjectURL(elt.image[0])} width={200} height={200} alt={`Snippet image no${indx}`}/></div>} 
      </div>
      {showGallery && <GalleryProject setShowGallery={setShowGallery} clickIndx={0} images={[elt.image]}/>}
    </div>
  )
}

export default SingleContentLine
