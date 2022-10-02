import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion'

export default function Bar({name,color}) {
  const [fill,setFill] = useState("0%")
  useEffect(() => {
    const time = Math.floor(Math.random() * 10) + 1;

    setTimeout(() => {
      console.log("ran fill")
      setFill('100%')
    }, (time*100+400))
  },[]);
  return (
    <div className='ml-2'>
        <p className='text-center'>{name}</p>
        <div onMount className=' relative border-2 w-[4.3rem] md:w-[6rem] xl-[7rem] border-black h-5 rounded-full'>
        <motion.div
        transition={{ ease: "easeOut", duration: .8 }}
        animate={{width:fill}}
        style={{backgroundColor:color}}
        className={` absolute left-0 h-full rounded-full`}></motion.div>
        </div>
        
        </div>
  )
}
