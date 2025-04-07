import fetchLink from '@/Functions/fetchLink'
import { useScreen } from '@/Hooks/useScreen'
import Image from 'next/image'
import React, {useState} from 'react'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import AddProject from './AddProject';
import axios from 'axios';
import ContentProject from './ContentProject';

    function Project({projects, setProjects}) {
        const [addProject, setAddProject] = useState(false)
        const [title, setTitle] = useState('')
        const [description, setDescription] = useState('')
        const [imagefiles, setImageFiles] = useState([])
        const [indxProject, setIndxProject] = useState(0)
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
            return (
                <div className={`mt-4 ${!large && 'ml-2'}`}>
                    {large?
                        <div className = 'flex flex-row w-full gap-1 mt-10' style={{height:'700px'}}>
                            <div className=' flex flex-col gap-3'>
                                {projects?.map((elt, indx) => <Image key={indx} onClick={()=> setIndxProject(indx)} src={fetchLink(elt.images[0].slice(7))} alt={`project no${indx+1}`} width={80} height={80}/>)}
                                <button onClick={()=> setAddProject(true)} className=' w-20 h-20 border flex justify-center items-center cursor-pointer' style={{borderStyle:'dashed', borderColor:'rgba(2, 72, 200, 0.54)', backgroundColor:'rgba(2, 72, 200, 0.14)'}}>
                                    <p className='text-[16px]' style={{color:'rgba(34, 13, 215, 1)'}}>Add</p>
                                </button>
                            </div>
                            <div style={{backgroundColor:'rgba(2, 72, 200, 0.21)'}} className=' h-full w-1'></div>
                            <div className=' grow w-full  items-start  flex justify-center '>
                                <div className=' w-full flex justify-center items-center   px-3'>
                                    { 
                                    addProject ? <AddProject handlCancel={()=> setAddProject(false)} handleDeleteImage={handleDeleteImage} title={title} description={description} setTitle={setTitle} setDescription={setDescription} imagefiles={imagefiles} setImageFiles={setImageFiles} domain={'UI/UX'}/> :
                                    <>{ projects ? 
                                        <ContentProject project={projects[indxProject]}/> :
                                        <>
                                            <div className=' flex justify-center '><Image src={fetchLink('eproject.png')}  width={200} height={200} alt='empty project'/></div>
                                            <p>No Snippets or tips. Click here to <span className=' underline cursor-pointer' onClick={()=>setAddProject(true)}  style={{color:'rgba(2, 72, 200, 1)'}}>add</span></p>
                                        </>
                                    }
                                    </>
                                    }
                                </div>
                            </div>
                        </div>:
                        <div>
                            { 
                            addProject ? <AddProject handlCancel={()=> setAddProject(false)} handleDeleteImage={handleDeleteImage}  title={title} description={description} setTitle={setTitle} setDescription={setDescription} imagefiles={imagefiles} setImageFiles={setImageFiles} domain={'UI/UX'}/> :
                                <> 
                                { projects ? 
                                <ContentProject project={projects[indxProject]}/> :
                                <>
                                    <p className=' px-3  mt-8 text-blue-700 text-[16px]'><AddCircleOutlineRoundedIcon style={{fontWeight:'bold', }} sx={{fontSize:30}}/> Add New project</p>
                                    <div className=' flex justify-center mt-15'><Image src={fetchLink('eproject.png')}  width={200} height={200} alt='empty project'/></div>
                                    <p className=' text-center'>No Snippets or tips. Click here to <span className=' underline cursor-pointer' onClick={()=>setAddProject(true)}  style={{color:'rgba(2, 72, 200, 1)'}}>add</span></p>
                                </>}
                                </>
                            }
                        </div>
                    }
                </div>
            )
        }


export default Project
