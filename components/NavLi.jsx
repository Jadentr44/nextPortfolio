import React from 'react'
import { motion,useCycle } from 'framer-motion'
export default function NavLi({name,location}) {
  const [width,toggleWidth] = useCycle("0","100%")
  return (
    <li className='mx-6' onMouseEnter={toggleWidth} onMouseLeave={toggleWidth}>
      <a href={location}>{name}</a>
      <motion.div transition={{type:"tween"}} animate={{width:width}} className='h-2   bg-red-500 rounded-full mx-auto'></motion.div>
    </li>
  )
}
