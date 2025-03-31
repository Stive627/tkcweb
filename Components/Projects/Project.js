import fetchLink from '@/Functions/fetchLink'
import { useScreen } from '@/Hooks/useScreen'
import Image from 'next/image'
import React, {useState} from 'react'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import AddProject from './AddProject';
import axios from 'axios';

    function Project() {
        const [project, setProjects] = useState(undefined)
        const [addProject, setAddProject] = useState(false)
        const [title, setTitle] = useState('')
        const [description, setDescription] = useState('')
        const [imagefiles, setImageFiles] = useState([])
        const large = useScreen()
        function handleDeleteImage(indx){
            const indexedImg = imagefiles[indx]
            const newImgs = imagefiles.filter(img => img !== indexedImg)
            setImageFiles(newImgs)
        }
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
            axios({url:fetchLink('snippet/add'), data:imgfile? formdata : formdatawimg, method:'POST', headers:{"Content-Type":"application/json"}})
            .then((value) => console.log(value.data))
            .catch((error) => console.log(error))
        }
        if(project?.length === 0 || !project){
            return (
                <div className={`mt-4 ${!large && 'ml-2'}`}>
                    {large?
                        <div className = 'flex flex-row w-full gap-1' style={{height:'700px'}}>
                            <div className=' flex flex-col gap-3'>
                                <div className=' w-20 h-20 border flex justify-center items-center cursor-pointer' style={{borderStyle:'dashed', borderColor:'rgba(2, 72, 200, 0.54)', backgroundColor:'rgba(2, 72, 200, 0.14)'}}>
                                    <p className='text-[16px]' style={{color:'rgba(34, 13, 215, 1)'}}>Add</p>
                                </div>
                            </div>
                            <div style={{backgroundColor:'rgba(2, 72, 200, 0.21)'}} className=' h-full w-1'></div>
                            <div className=' grow w-full h-96  flex justify-center '>
                                <div>
                                    { 
                                    addProject ? <AddProject handlCancel={()=> setAddProject(false)} handleDeleteImage={handleDeleteImage} title={title} description={description} setTitle={setTitle} setDescription={setDescription} imagefiles={imagefiles} setImageFiles={setImageFiles} domain={'UI/UX'}/> :
                                    <>
                                        <div className=' flex justify-center '><Image src={fetchLink('eproject.png')}  width={200} height={200} alt='empty project'/></div>
                                        <p>No Snippets or tips. Click here to <span className=' underline cursor-pointer' onClick={()=>setAddProject(true)}  style={{color:'rgba(2, 72, 200, 1)'}}>add</span></p>
                                    </>
                                    }
                                </div>
                            </div>
                        </div>:
                        <div>
                            { 
                            addProject ? <AddProject handlCancel={()=> setAddProject(false)} handleDeleteImage={handleDeleteImage}  title={title} description={description} setTitle={setTitle} setDescription={setDescription} imagefiles={imagefiles} setImageFiles={setImageFiles} domain={'UI/UX'}/> :
                                <> 
                                    <p className=' px-3  mt-8 text-blue-700 text-[16px]'><AddCircleOutlineRoundedIcon style={{fontWeight:'bold', }} sx={{fontSize:30}}/> Add New project</p>
                                    <div className=' flex justify-center mt-15'><Image src={fetchLink('eproject.png')}  width={200} height={200} alt='empty project'/></div>
                                    <p className=' text-center'>No Snippets or tips. Click here to <span className=' underline cursor-pointer' onClick={()=>setAddProject(true)}  style={{color:'rgba(2, 72, 200, 1)'}}>add</span></p>
                                </>
                            }
                        </div>
                    }
                </div>
            )
        }
    }

export default Project
