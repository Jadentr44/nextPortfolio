import React, {useState} from 'react'
import Github from './icons/Github'
import Website from './icons/Website'
import { motion } from 'framer-motion'
export default function Links() {
  const[gitHover,setGit] = useState(false)
  const[visitHover,setVisit] = useState(false)
  return (
    <div className=' relative'>

      <motion.div style={{zIndex:2}} 
      onMouseOver={()=> setGit(true)}
      onMouseOut={()=>setGit(false)}
      whileHover={{x:"60%"}}
      className=' cursor-pointer flex justify-end absolute bottom-2 left-[-40%] px-2 py-1 rounded-r-full bg-red-500 w-[55%]'>
      <h1 className='mr-2 text-white'>{!gitHover?"":"Github"}</h1><Github />
      </motion.div>

      <motion.div style={{zIndex:2}} 
      whileHover={{x:"-60%"}}
      onMouseOver={()=> setVisit(true)}
      onMouseOut={()=>setVisit(false)}
      className=' cursor-pointer flex  absolute bottom-2 right-[-40%] px-2 py-1 rounded-l-full bg-red-500 w-[55%]'>
      <Website/><h1 className='ml-2 text-white'>{!visitHover?"":"Visit"}</h1>
      </motion.div>
    </div>
  )
}
{/* <Website /> */}