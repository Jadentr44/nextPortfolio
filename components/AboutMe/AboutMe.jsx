import React,{useState} from 'react'
import { motion } from 'framer-motion'
import IsVisible from 'react-is-visible/lib/IsVisible'
export default function AboutMe() {
  const [seen,setSeen] =useState(false)
  return (
    <div className='min-h-screen relative'>
 <div className='absolute top-[75%]'>
      <IsVisible once>
    {(isVisible) => <h1>{isVisible ? setSeen(true) : `I'm not visible!`}</h1>}
  </IsVisible>
      </div>
<div className="w-1/4 mt  text-6xl text-center mx-auto relative">
        <motion.div
        transition={{left:{duration:.8}}}
        animate={{width:seen?"0%":"100%"}}
        className="bg-white h-full absolute  right-0 top-0">

        </motion.div>
        <div className="w-full bg-red-500 text-white py-2 mb-12"><h2>About me</h2></div>
        
      </div>

    </div>
  )
}
