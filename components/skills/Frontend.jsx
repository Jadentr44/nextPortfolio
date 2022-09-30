import React from 'react'
import { Html,Css,Javascript,Bootstrap,SJquery,TailWind, FaReact } from './icons/frontend'
export default function Frontend({size}) {
  return (
    <div>
    <h1>Front-End Skills</h1>
    <div className='flex w-[30vw] border-2 justify-between flex-wrap'>
      <Html size={size} />
      <Css size={size} />
      <Javascript size={size}/>
      <Bootstrap size={size} />
       <SJquery size={size} />
      <TailWind size={size} /> 
      <FaReact size={size} /> 
      </div>
      </div>
  )
}
