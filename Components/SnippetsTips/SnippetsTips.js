import React, { useState } from 'react'
import { useScreen } from '@/Hooks/useScreen'
import Image from 'next/image'
import fetchLink from '@/Functions/fetchLink'
import AddSnippetTips from './AddSnipetTips'
import axios from 'axios'
import ContentSnippet from './ContentSnippet'
import useSnippet from '@/Hooks/useSnippet'

function SnippetsTips() {
    const tips = useSnippet()
    const [addtips, setAddtips] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imgfile, setImgFile] = useState(undefined)
    const large = useScreen()
    const handleAddTips = () => setAddtips(true)
    const handleSubmit = () => {
        const formdatawimg = new FormData()
        formdatawimg.append('title', title)
        formdatawimg.append('description', description)
        formdatawimg.append('department', 'UI/UX')

        const formdata = new FormData()
        formdata.append('title', title)
        formdata.append('description', description)
        formdata.append('department', 'UI/UX')
        formdata.append('image', imgfile)
        axios({url:fetchLink('snippet/add'), data:formdata, method:'POST', headers:{"Content-Type":"application/json"}})
        .then((value) => {console.log(value.data); setTips(tips? [... tips, {title:title, description:description, imgfile:imgfile}] : [{title:title, description:description, image:imgfile}])})
        .catch((error) => console.log(error))
    }

  if(tips?.length === 0 || !tips){ 
    return (
            <div className={`mt-4  h-96 flex justify-center items-center ${!large && 'ml-2'}`}>
                { 
                addtips?
                    <AddSnippetTips handleSubmit={handleSubmit} handleDeleteImage={() => setImgFile(undefined)} handlCancel={()=>setAddtips(false)} title={title} description={description} imgfile={imgfile} setTitle={setTitle} setDescription={setDescription} setImgFile={setImgFile} domain={'UI/UX'}/>:
                    <div>
                        <div className=' flex justify-center'><Image src={fetchLink('esnippet.png')} width={250} height={250} alt='empty snippet'/></div>
                        <p>No Snippets or tips. Click here to <span className=' underline cursor-pointer' onClick={()=>setAddtips(true)}  style={{color:'rgba(2, 72, 200, 1)'}}>add</span></p>
                    </div>
                }
        </div>
    )
 }
 return <ContentSnippet handleAddTips={handleAddTips} tips={tips}/>
}

export default SnippetsTips
