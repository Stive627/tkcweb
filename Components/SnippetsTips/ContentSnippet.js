import React, { useState } from 'react'
import SingleContentLine from './SingleContentLine'
import { useScreen } from '@/Hooks/useScreen'
import AddIcon from '@mui/icons-material/Add';

function ContentSnippet({tips, handleAddTips, handleDeleteTips}) {
    const [openTip, setOpenTip] = useState('')
    const handleOpen = (indx) => setOpenTip(indx)
    const large = useScreen()
  return (
      <div style={{height:large?'780px':'530px', }} className=' w-full flex justify-center snippetscroll'>
        <div className={`${large? 'w-2/3':'w-full'}`}>
          <div className={`mt-7 flex flex-col gap-3 divide-y divide-gray-300 ml-3 `}>
            {
              tips.map((elt, indx) => <SingleContentLine key={indx} elt={elt} indx={indx} handlOpen={handleOpen} openTip={openTip} setOpenTip={setOpenTip} handleDeleteTips={handleDeleteTips}/>)
            }
          </div>
     
          <div className=' flex justify-end mt-3'>
            <button onClick={() => handleAddTips()} style={{borderColor:'rgba(46, 123, 253, 1) ', color:'rgba(46, 123, 253, 1)'}} className=' border rounded-full cursor-pointer'><AddIcon/></button>
          </div>
        </div>
      </div>
  )
}

export default ContentSnippet
