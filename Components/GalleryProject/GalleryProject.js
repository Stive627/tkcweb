import fetchLink from '@/Functions/fetchLink';
import { useScreen } from '@/Hooks/useScreen'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

function GalleryProject({setShowGallery, images, clickIndx}) {
    const imgRef = useRef(new Map())
    const [currIndx, setCurrIndx] = useState(0)
    const imglength = images.length
    console.log(images)
    const large = useScreen()
    useEffect(()=>{
        const node = imgRef.current.get(images[clickIndx])
        node.scrollIntoView({
            behaviour:'smooth',
            block:'nearest',
            inline:'center'
        })
    }, [])
    const handleClick = () => {
        const node = imgRef.current.get(images[currIndx + 1])
        node.scrollIntoView({
            behaviour:'smooth',
            block:'nearest',
            inline:'center'
        })
        setCurrIndx((currIndx + 1)%images.length)
    }


    const handleClickBack = () => {
        if(currIndx>0){
            const node = imgRef.current.get(images[currIndx - 1])
            node.scrollIntoView({
                behaviour:'smooth',
                block:'nearest',
                inline:'center'
            })
            setCurrIndx(currIndx -1)
        }
        else{
            return;
        }
    }
    return (
    <div onClick={()=> setShowGallery(false)} style={{backgroundColor:'rgba(0, 0, 0, 0.23)'}} className=' absolute top-0 left-0 right-0 bottom-0 w-full h-full '>
    <div className=' w-full h-full flex justify-center items-center'>
        <div onClick={(e)=> e.stopPropagation()} className={`${large? 'w-1/2 h-96 ':'w-full mx-2 h-80'}  border bg-white flex flex-row items-center p-2 justify-between gap-3`}>
        {imglength !==1 ?<button onClick={()=>handleClickBack()} className={` w-10 h-10 flex justify-center items-center rounded-full ${currIndx >0 && 'bg-black ' }`}><ArrowBackIosIcon className=' relative left-1' sx={{color:'white'}}/></button>:<p></p>}
        <div className={`h-full ${large? 'w-96':'w-65'}  flex flex-row overflow-hidden`}>
            {images?.map((elt, indx) => <Image ref={(node) => {imgRef.current.set(elt, node); return()=>imgRef.current.delete(elt)}} key={indx} src={fetchLink(elt.slice(7))} width={large? 385 : 265} height={400} alt={`image no${indx}`}/>)}
        </div>
        {imglength !==1 ?<button disabled={currIndx >= imglength -1} onClick={()=> handleClick()} style={{backgroundColor:currIndx === imglength -1 ? 'rgba(217, 217, 217, 1)':'black'}} className=' w-10 h-10 flex justify-center items-center rounded-full'><ArrowForwardIosIcon className=' relative left-0.5' sx={{color:'white'}}/></button>:<p></p>}
        </div>
    </div>
    </div>
  )
}

export default GalleryProject
