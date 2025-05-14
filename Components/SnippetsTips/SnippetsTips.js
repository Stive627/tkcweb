import React, { useState} from 'react'
import { useScreen } from '@/Hooks/useScreen'
import Image from 'next/image'
import fetchLink from '@/Functions/fetchLink'
import AddSnippetTips from './AddSnipetTips'
import axios from 'axios'
import ContentSnippet from './ContentSnippet'
import useAuth from '@/Hooks/useAuth'
import getDepartment from '@/Functions/getDepartment'
import { useData } from '@/Hooks/useDataContext'

function SnippetsTips() {
    const {snippets, addSnippet} = useData()
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
        formdata.append('image', snip.imgfile? snip.imgfile[0] : undefined)
        axios({url:fetchLink('snippet/add'), data:formdata, method:'POST'})
        .then((value) => {setAddtips(false); addSnippet(value.data);})
        .catch((error) => console.log(error))
    }

  if(snippets=== undefined) return <div className='h-96 w-40 flex justify-center items-center'><div className=' w-10 h-10 border border-blue-500 animate-spin border-t-white rounded-full'></div></div>  
  if(snippets?.length === 0){ 
    return (
            <div className={`mt-4  h-96 flex justify-center items-center ${!large && 'ml-2'}`}>
                { 
                addtips?
                    <AddSnippetTips handleSubmit={handleSubmit} handleDeleteImage={() => setSnip({...snip, imgfile:undefined})} handlCancel={()=>{setAddtips(false); setSnip({title:'', description:'', imgfile:undefined})}} snip={snip}  domain={department} setSnip={setSnip}/>:
                    <div>
                        <div className=' flex justify-center'><Image src={'https://bucket-tkc.s3.ap-south-1.amazonaws.com/esnippet.png'} width={250} height={250} alt='empty snippet'/></div>
                        <p>No Snippets or tips. Click here to <span className=' underline cursor-pointer' onClick={()=>setAddtips(true)}  style={{color:'rgba(2, 72, 200, 1)'}}>add</span></p>
                    </div>
                }
        </div>
    )
 }
 
 if(addtips) return <AddSnippetTips handleSubmit={handleSubmit} handleDeleteImage={() => setSnip({...snip, imgfile:undefined})} handlCancel={()=>{setAddtips(false); setSnip({title:'', description:'', imgfile:undefined})}} snip={snip}  domain={department} setSnip={setSnip}/>
 return <ContentSnippet handleAddTips={handleAddTips}/>
}

export default SnippetsTips
