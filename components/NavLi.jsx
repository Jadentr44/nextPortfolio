import React,{useRef} from 'react'
import { motion,useCycle } from 'framer-motion'
export default function NavLi({name,location}) {
  const [width,toggleWidth] = useCycle("0","100%")
  
  const transitionTime = name.length *.04
  
  return (
    <li className='mx-6' onMouseEnter={toggleWidth} onMouseLeave={toggleWidth}>
      <a href={location}>{name}</a>
      <motion.div transition={{type:"tween",duration:transitionTime}} animate={{width:width}} className='h-2 w-0  bg-red-500 rounded-full mx-auto'></motion.div>
    </li>
  )
}
