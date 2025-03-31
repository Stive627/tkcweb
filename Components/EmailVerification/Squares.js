import { useScreen } from '@/Hooks/useScreen'
import React from 'react'

function Squares({val, setValue, indx}) {
    const large = useScreen()
  return (
    <input type={large? 'text':'number'} value={val ?? ''}  placeholder='' onChange={(e) => setValue(indx, e.target.value[0])} className=' outline-blue-600 border w-13 h-13 rounded-md  p-4' style={{borderColor:'rgba(115, 115, 115, 1)'}}/>
  )
}

export default Squares
