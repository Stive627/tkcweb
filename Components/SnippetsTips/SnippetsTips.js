import React, { useState} from 'react'
import { useScreen } from '@/Hooks/useScreen'
import Image from 'next/image'
import fetchLink from '@/Functions/fetchLink'
import AddSnippetTips from './AddSnipetTips'
import axios from 'axios'
import ContentSnippet from './ContentSnippet'
import useAuth from '@/Hooks/useAuth'
import getDepartment from '@/Functions/getDepartment'

function SnippetsTips({snippets, setSnippets}) {
    const [addtips, setAddtips] = useState(false)
    const [snip, setSnip] = useState({title:'', description:'', imgfile:undefined})
    const large = useScreen()
    const {username} = useAuth()
    const department = getDepartment(username)
    const handleAddTips = () => setAddtips(true)
    const handleSubmit = () => {
        const formdata = new FormData()
        formdata.append('title', snip.title)
        formdata.append('description', snip.description)
        formdata.append('department', department)
        formdata.append('image', snip.imgfile[0])
        axios({url:fetchLink('snippet/add'), data:formdata, method:'POST'})
        .then((value) => {console.log(value.data); setAddtips(false); setSnippets([...snippets, value.data]);})
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
  if(!snippets) return <div className='h-96 w-40 flex justify-center items-center'><div className=' w-10 h-10 border border-blue-500 border-t-white rounded-full'></div></div>  
  if(snippets?.length === 0){ 
    return (
            <div className={`mt-4  h-96 flex justify-center items-center ${!large && 'ml-2'}`}>
                { 
                addtips?
                    <AddSnippetTips handleSubmit={handleSubmit} handleDeleteImage={() => setImgFile(undefined)} handlCancel={()=>{setAddtips(false); setSnip({title:'', description:'', imgfile:undefined})}} snip={snip}  domain={department} setSnip={setSnip}/>:
                    <div>
                        <div className=' flex justify-center'><Image src={'https://bucket-tkc.s3.ap-south-1.amazonaws.com/esnippet.png'} width={250} height={250} alt='empty snippet'/></div>
                        <p>No Snippets or tips. Click here to <span className=' underline cursor-pointer' onClick={()=>setAddtips(true)}  style={{color:'rgba(2, 72, 200, 1)'}}>add</span></p>
                    </div>
                }
        </div>
    )
 }
 
 if(addtips) return <AddSnippetTips handleSubmit={handleSubmit} handleDeleteImage={() => setImgFile(undefined)} handlCancel={()=>{setAddtips(false); setSnip({title:'', description:'', imgfile:undefined})}} snip={snip}  domain={department} setSnip={setSnip}/>
 return <ContentSnippet handleAddTips={handleAddTips} tips={snippets} handleDeleteTips={handleDeleteSnippet}/>
}

export default SnippetsTips
