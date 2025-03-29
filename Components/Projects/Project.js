import fetchLink from '@/Functions/fetchLink'
import { useScreen } from '@/Hooks/useScreen'
import Image from 'next/image'
import React, {useState} from 'react'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

    function Project() {
        const [project, setProjects] = useState(undefined)
        const [addProject, setAddProject] = useState(false)
        const large = useScreen()
        if(project?.length === 0 || !project){
            return (
                <div className=' mt-4'>
                    { addProject ?
                    <></>:
                    <>{large?
                        <div className = 'flex flex-row w-full gap-1' style={{height:'700px'}}>
                            <div className=' flex flex-col gap-3'>
                                <div className=' w-20 h-20 border flex justify-center items-center cursor-pointer' style={{borderStyle:'dashed', borderColor:'rgba(2, 72, 200, 0.54)', backgroundColor:'rgba(2, 72, 200, 0.14)'}}>
                                    <p className='text-[16px]' style={{color:'rgba(34, 13, 215, 1)'}}>Add</p>
                                </div>
                            </div>
                            <div style={{backgroundColor:'rgba(2, 72, 200, 0.21)'}} className=' h-full w-1'></div>
                            <div className=' grow w-full h-96  flex justify-center items-end'>
                                <div>
                                    <div className=' flex justify-center '><Image src={fetchLink('eproject.png')}  width={200} height={200} alt='empty project'/></div>
                                    <p>No Snippets or tips. Click here to <span className=' underline cursor-pointer' onClick={()=>setAddtips(true)}  style={{color:'rgba(2, 72, 200, 1)'}}>add</span></p>
                                </div>
                            </div>
                        </div>:
                        <div>
                            <p className=' px-3  mt-8 text-blue-700 text-[16px]'><AddCircleOutlineRoundedIcon style={{fontWeight:'bold', }} sx={{fontSize:30}}/> Add New project</p>
                            <div className=' flex justify-center mt-15'><Image src={fetchLink('eproject.png')}  width={200} height={200} alt='empty project'/></div>
                            <p className=' text-center'>No Snippets or tips. Click here to <span className=' underline cursor-pointer' onClick={()=>setAddtips(true)}  style={{color:'rgba(2, 72, 200, 1)'}}>add</span></p>
                        </div>
                    }</>
                    }
                </div>
            )
        }
    }

export default Project
