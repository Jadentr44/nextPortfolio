import React from 'react'
import { motion,useCycle } from 'framer-motion'
import NavLi from './NavLi'
import { FadeIn } from 'react-slide-fade-in'

export default function Nav() {
  const [width,toggleWidth] = useCycle("0%","100%")
  return (
    <nav className='px-[10%] fixed top-0 left-0 right-0 backdrop-blur-sm z-50'>
      <FadeIn
      from="top"
      positionOffset={0}
      triggerOffset={0}
      delayInMilliseconds={6500}
    >
      <div className='flex justify-between items-center'>
        <div className='flex  items-center relative pb-2 my-2' >
          <img className='h-[3rem] mr-2' src="/logo.svg" alt="" />
          <div onMouseEnter={toggleWidth} onMouseLeave={toggleWidth} className='relative py-3'>
          <h1 className='cursor-pointer z-10 text-3xl font-bold '>Jaden Rodriguez</h1>
          <motion.div transition={{seconds:2}} animate={{width:width}} className='h-2 absolute bottom-0 left-0 right-0 w-0 bg-red-500 rounded-full mx-auto'></motion.div>
          </div>
          
        </div>
        <div>
          <ul className="flex text-xl">
            <NavLi offset={-100} name={"About"} location={"about"} />
            <NavLi offset={-100} name={"Skills"} location={"skills"} />
            <NavLi offset={-100} name={"Project"} location={"projects"} />
            <NavLi offset={-100} name={"Contact"} location={"contact"} />
            
          </ul>
        </div>
      </div>
      </FadeIn>
    </nav>
  )
}
