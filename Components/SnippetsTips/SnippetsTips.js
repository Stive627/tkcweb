import React, { useState } from 'react'
import { useScreen } from '@/Hooks/useScreen'
import Image from 'next/image'
import fetchLink from '@/Functions/fetchLink'
import AddSnippetTips from './AddSnipetTips'

function SnippetsTips() {
    const [tips, setTips] = useState(undefined)
    const [addtips, setAddtips] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imgfile, setImgFile] = useState(undefined)
    const large = useScreen()
  if(tips?.length === 0 || !tips){ 
    return (
            <div className={`mt-4  h-96 flex justify-center items-center ${!large && 'ml-2'}`}>
                { 
                addtips?
                    <AddSnippetTips handleDeleteImage={() => setImgFile(undefined)} handlCancel={()=>setAddtips(false)} title={title} description={description} imgfile={imgfile} setTitle={setTitle} setDescription={setDescription} setImgFile={setImgFile} domain={'UI/UX'}/>:
                    <div>
                        <div className=' flex justify-center'><Image src={fetchLink('esnippet.png')} width={250} height={250} alt='empty snippet'/></div>
                        <p>No Snippets or tips. Click here to <span className=' underline cursor-pointer' onClick={()=>setAddtips(true)}  style={{color:'rgba(2, 72, 200, 1)'}}>add</span></p>
                    </div>
                }
        </div>
    )
 }
 return(
    <p></p>
 )
}

export default SnippetsTips
