import React, {useState} from 'react'

    function Project() {
        const [project, setProjects] = useState(undefined)
        const [addProject, setAddProject] = useState(false)
        if(project?.length === 0 || !project){
            return (
                <div className=' mt-4  h-96 flex justify-center items-center'>
                    { addProject ?
                    <></>:
                    <div >

                    </div>
                    }
                </div>
            )
        }
    }

export default Project
