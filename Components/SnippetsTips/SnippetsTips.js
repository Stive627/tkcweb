import React, { useState, useEffect } from 'react'
import { useScreen } from '@/Hooks/useScreen'
import Image from 'next/image'
import fetchLink from '@/Functions/fetchLink'
import AddSnippetTips from './AddSnipetTips'
import axios from 'axios'
import ContentSnippet from './ContentSnippet'

function SnippetsTips() {
    const [snippets, setSnippets] = useState(undefined)
    useEffect(() => {
        axios({url:fetchLink('snippet/'), method:'GET', headers:{"Content-Type":"application/json"}})
        .then((value) => {setSnippets(value.data); console.log(value.data)})
        .catch(err => console.log(err))
    },[])
    const [addtips, setAddtips] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imgfile, setImgFile] = useState(undefined)
    const large = useScreen()
    const handleAddTips = () => setAddtips(true)
    const handleSubmit = () => {
        const formdata = new FormData()
        formdata.append('title', title)
        formdata.append('description', description)
        formdata.append('department', 'UI/UX')
        formdata.append('image', imgfile[0])
        axios({url:fetchLink('snippet/add'), data:formdata, method:'POST'})
        .then((value) => {console.log(value.data); console.log(imgfile[0]); setAddtips(false); setSnippets(snippets? [...snippets, {title:title, description:description, image:imgfile}] : [{title:title, description:description, image:imgfile}]); setTitle(''); setDescription(''); setImgFile(undefined)})
        .catch((error) => console.log(error))
    }
    const handleDeleteSnippet = (id) => {
        console.log('clicked')
        axios({url:fetchLink(`snippet/delete/${id}`),method:'DELETE'}).then((val) => {
            console.log('done')
            console.log(val.data)
            const newSnippet = [...snippets]
            const updatedSnippet = newSnippet.filter(elt => elt._id !== id)
            console.log(updatedSnippet)
            setSnippets(updatedSnippet)
        })
        .catch(err => {console.error(err); console.log('err')})
    }

  if(snippets?.length === 0 || !snippets){ 
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
 if(addtips) return <AddSnippetTips handleSubmit={handleSubmit} handleDeleteImage={() => setImgFile(undefined)} handlCancel={()=>{setAddtips(false); setTitle(''); setDescription(''); setImgFile(undefined)}} title={title} description={description} imgfile={imgfile} setTitle={setTitle} setDescription={setDescription} setImgFile={setImgFile} domain={'UI/UX'}/>
 return <ContentSnippet handleAddTips={handleAddTips} tips={snippets} handleDeleteTips={handleDeleteSnippet}/>
}

export default SnippetsTips
