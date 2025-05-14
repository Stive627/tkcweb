import fetchLink from '@/Functions/fetchLink'
import getImgName from '@/Functions/getImgName'
import Image from 'next/image'
import React, { useState } from 'react'
import './project.css'
import { useScreen } from '@/Hooks/useScreen'
import GalleryProject from '../GalleryProject/GalleryProject'

function ContentProject({project}) {
  const [showGallery, setShowGallery] = useState({status:false, imgIndx:''})
  const large = useScreen()
  return (
    <div className='w-full'>
      <div className=' w-full flex justify-center mb-5'>
        <div className={`flex justify-between items-center ${large?'w-2/3':'w-full'}`}>
          <p className=' text-[21px] font-bold'>{project.title}</p>
          <div style={{borderColor:'rgba(0, 0, 0, 0.3)'}} className={`px-7 py-1 rounded-sm flex justify-center items-center border ${large && 'relative right-5'}`}>
            <p style={{color:'rgba(0, 0, 0, 0.77)'}}>{project.department}</p>
          </div>
        </div>
      </div>
      <div className=' flex justify-center mb-3'><p className={`${large?'w-2/3':'w-full'}`}>{project.description}</p></div>
      <div style={{height:'590px'}} className=' w-full flex justify-center projetscroll'>
        <div className=' flex flex-col gap-2'>
          {
            project.images.map((elt, indx) =>(
              <div key={indx}>
                <p className=' text-[16px] mb-1'>{getImgName(elt)}</p>
                <Image onClick={()=> setShowGallery({status:true, imgIndx:indx})} src={elt} width={500} height={500} alt={`image of project ${elt.title} no${indx+1}`}/>
              </div>
            ))
          }
        </div>
        {showGallery.status && <GalleryProject setShowGallery={setShowGallery} clickIndx={showGallery.imgIndx} images={project.images}/>}
        </div>
    </div>
  )
}

export default ContentProject
