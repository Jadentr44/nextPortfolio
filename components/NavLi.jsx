import React,{useRef} from 'react'
import { motion,useCycle } from 'framer-motion'
import { Link } from "react-scroll";
export default function NavLi({name,location}) {
  const [width,toggleWidth] = useCycle("0","100%")

  const transitionTime = name.length *.04
  
  return (
    <li activeClass="active" smooth spy to="about" className='mx-6 cursor-pointer' onMouseEnter={toggleWidth} onMouseLeave={toggleWidth}>
      <Link activeClass="active" smooth spy to={location}>
                {name}
              </Link>
      <motion.div transition={{type:"tween",duration:transitionTime}} animate={{width:width}} className='h-2 w-0  bg-red-500 rounded-full mx-auto'></motion.div>
    </li>
  )
}
