import React, {useState} from 'react'
import Github from './icons/Github'
import Website from './icons/Website'
import { motion } from 'framer-motion'
export default function Links() {
  const[gitHover,setGit] = useState('0%')
  return (
    <div className=' relative'>

      <motion.div style={{zIndex:2}} 
      whileHover={{x:"60%"}}
      className=' cursor-pointer flex justify-end absolute bottom-2 left-[-40%] px-2 py-1 rounded-r-full bg-red-500 w-[55%]'>
      <h1 className='mr-2 text-white'>Github</h1><Github />
      </motion.div>

      <motion.div style={{zIndex:2}} 
      whileHover={{x:"-60%"}}
      className=' cursor-pointer flex  absolute bottom-2 right-[-40%] px-2 py-1 rounded-l-full bg-red-500 w-[55%]'>
      <Website/><h1 className='ml-2 text-white'>visit</h1>
      </motion.div>
    </div>
  )
}
{/* <Website /> */}