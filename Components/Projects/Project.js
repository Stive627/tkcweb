import fetchLink from '@/Functions/fetchLink'
import { useScreen } from '@/Hooks/useScreen'
import Image from 'next/image'
import React, {useState} from 'react'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import AddProject from './AddProject';
import axios from 'axios';
import ContentProject from './ContentProject';
import useAuth from '@/Hooks/useAuth';
import getDepartment from '@/Functions/getDepartment';

    function Project({projects, setProjects}) {
        const [addProject, setAddProject] = useState(false)
        const [proj, setProj] = useState({title:'', description:'', img:[]})
        const [indxProject, setIndxProject] = useState(0)
        const {username} = useAuth()
        const department = getDepartment(username)
        const large = useScreen()
        console.log(projects)
        function handleDeleteImage(indx){
            const indexedImg = proj.img[indx]
            const newImgs = proj.img.filter(img => img !== indexedImg)
            setImageFiles(newImgs)
        }
        const handleSubmit = (e) => {
            e.preventDefault()
            const formdata = new FormData()
            formdata.append('title', proj.title)
            formdata.append('description', proj.description)
            formdata.append('department', department)
            formdata.append('images', proj.img)
            axios({url:fetchLink('project/add'), data:formdata, method:'POST'})
            .then((value) => setProjects(projects? [...projects, ...value.data]: [{...value.data}]))
            .catch((error) => console.log(error))
        }
            return (
                <div className={`mt-4 ${!large && 'ml-2'}`}>
                    {large?
                        <div className = 'flex flex-row w-full gap-1 mt-10' style={{height:'700px'}}>
                            <div className=' flex flex-col gap-3'>
                                {projects?.map((elt, indx) => <Image key={indx} onClick={()=> setIndxProject(indx)} src={fetchLink(elt.images[0].slice(7))} alt={`project no${indx+1}`} width={80} height={80} style={{borderStyle:'dashed', borderColor:'rgba(2, 72, 200, 0.54)'}} className={`w-20 h-20 ${indxProject === indx && 'border border-black'}`}/>)}
                                <button onClick={()=> setAddProject(true)} className=' w-20 h-20 border flex justify-center items-center cursor-pointer' style={{borderStyle:'dashed', borderColor:'rgba(2, 72, 200, 0.54)', backgroundColor:'rgba(2, 72, 200, 0.14)'}}>
                                    <p className='text-[16px]' style={{color:'rgba(34, 13, 215, 1)'}}>Add</p>
                                </button>
                            </div>
                            <div style={{backgroundColor:'rgba(2, 72, 200, 0.21)'}} className=' h-full w-1'></div>
                            <div className=' grow w-full  items-start  flex justify-center '>
                                <div className=' w-full flex justify-center items-center   px-3'>
                                    { 
                                    addProject ? <AddProject handlCancel={()=> setAddProject(false)} handleDeleteImage={handleDeleteImage} domain={department} proj={proj} setProj={setProj} handlSubmit={handleSubmit}/> :
                                    <>{ projects?.length>0 ? 
                                        <ContentProject project={projects[indxProject]}/> :
                                        <div className=' flex flex-col gap-4'>
                                            <div className=' flex justify-center '><Image src={'https://bucket-tkc.s3.ap-south-1.amazonaws.com/eproject.png'}  width={200} height={200} alt='empty project'/></div>
                                            <p>No Snippets or tips. Click here to <span className=' underline cursor-pointer' onClick={()=>setAddProject(true)}  style={{color:'rgba(2, 72, 200, 1)'}}>add</span></p>
                                        </div>
                                    }
                                    </>
                                    }
                                </div>
                            </div>
                        </div>:
                        <div>
                            { 
                            addProject ? <AddProject handlCancel={()=> setAddProject(false)} handleDeleteImage={handleDeleteImage}  proj={proj} setProj={setProj} domain={department}  handlSubmit={handleSubmit}/> :
                                <> 
                                { projects?.length > 0 ? 
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
