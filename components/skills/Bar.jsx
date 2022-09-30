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
    <div>
        {name}
        <div onMount className='w-[100px] relative border-2 border-black h-5 rounded-full'>
        <motion.div
        transition={{ ease: "easeOut", duration: .8 }}
        animate={{width:fill}}
        style={{backgroundColor:color}}
        className={` absolute left-0 h-full rounded-full`}></motion.div>
        </div>
        
        </div>
  )
}
