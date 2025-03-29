import React, {useState} from 'react'

    function Project() {
        const [project, setProjects] = useState(undefined)
        const [addProject, setAddProject] = useState(false)
        if(project?.length === 0 || !project){
            return (
                <div className=' mt-4  h-96 flex justify-center items-center'>
                    { addProject ?
                    <></>:
                    <p>No Project. Click here to <span className=' underline cursor-pointer' onClick={()=>setAddProject(true)} style={{color:'rgba(2, 72, 200, 1)'}}>add</span></p>
                    }
                </div>
            )
        }
    }

export default Project
