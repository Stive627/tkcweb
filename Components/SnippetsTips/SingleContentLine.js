import Image from 'next/image'
import React, { useState } from 'react'
import './snippet.css'
import fetchLink from '@/Functions/fetchLink'
import { useScreen } from '@/Hooks/useScreen'

function SingleContentLine({indx, handlOpen, openTip, elt}) {
  console.log(elt.image)
  const large = useScreen()
  return (
    <div onClick={()=> handlOpen(indx)} style={{backgroundColor:indx%2 === 1 ? 'rgba(0, 0, 0, 0.04)':'white'}} className='cursor-pointer pb-2'>
      <div className=' w-full flex flex-row  items-center gap-3.5'>
        <div style={{borderColor:'rgba(46, 123, 253, 1)', backgroundColor:'rgba(151, 189, 253, 0.27)'}} className=' w-8 h-8 flex justify-center items-center border rounded-full'><p>{indx + 1}</p></div>
        <p className='text-[16px]'>{elt.title}</p>
      </div>
      <div className={`${(indx === openTip) ? 'show':'hidden'}`}>
          <div className={`border border-gray-50 `}>
              <p>{elt.description}</p>
          </div>
          <div className=' flex justify-center'>{elt.image && <Image src={typeof elt.image === 'string' ? fetchLink(elt.image.slice(6)) : URL.createObjectURL(elt.image[0])} width={200} height={200} alt={`Snippet image no${indx}`}/>}</div>    
      </div>
    </div>
  )
}

export default SingleContentLine
