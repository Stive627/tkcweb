import React, { useState } from 'react'
import AddContent from '../Home/AddContent'

function SnippetsTips() {
    const [tips, setTips] = useState(undefined)
    const [addtips, setAddtips] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imgfile, setImgFile] = useState(undefined)
  if(tips?.length === 0 || !tips){ 
    return (
        <div className=' mt-4  h-96 flex justify-center items-center'>
            { 
            addtips?
            <AddContent handlCancel={()=>setAddtips(false)} title={title} description={description} imgfile={imgfile} setTitle={setTitle} setDescription={setDescription} setImgFile={setImgFile} domain={'UI/UX'}/>:
            <p>No Snippets or tips. Click here to <span className=' underline cursor-pointer' onClick={()=>setAddtips(true)}  style={{color:'rgba(2, 72, 200, 1)'}}>add</span></p>
            }
        </div>
    )
 }
 return(
    <p></p>
 )
}

export default SnippetsTips
