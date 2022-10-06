import React,{useState} from 'react'
import Game from './icons/Game'
import Cooking from './icons/Cooking'
import Hiking from './icons/Hiking'
import WorkingOut from './icons/WorkingOut'
import { motion } from 'framer-motion'
import IsVisible from 'react-is-visible/lib/IsVisible'
import Me from './Me'

export default function AboutMe({scrollSkills}) {
  const [seen,setSeen] =useState(false)
  const [hovered,setHover] =useState(false)
  const stretched = {display:"inline-block",
    webkitTransform:"scale(2,1)", /* Safari and Chrome */
    mozTransform:"scale(2,1)", /* Firefox */
    msTransform:"scale(2,1)", /* IE 9 */
    oTransform:"scale(2,1)", /* Opera */
    transform:"scale(2,1)" /* W3C */
}

  return (
    <div class="grid grid-cols-3  h-[110vh]">
      <div style={{boxShadow:"inset 0 0 15px  black",backgroundImage:"url('/aboutMe.png')",backgroundSize:"auto 100%"}} className='bg-red-500 h-full shadow-blue-600 hidden lg:block'></div>



  <div className='lg:col-span-2 col-span-3 [95vh]   px-[10%] relative '>
    <div className='mt-10  w-fit mx-auto flex items-center'>
      <div className=''>
      <h2 className='text-2xl'>Hi I&rsquo;m</h2>
      <h2 className='text-7xl '>Jaden Rodriguez </h2>
      <h2 className=' text-2xl flex justify-end  mt-3'>a web developer</h2>

      </div>
      <img className=' ml-3  h-[12vh]' src="/logo.png" alt="" />
    </div>
    <div>

    <p className='text-xl mt-8   leading-8'>I am interested in all kinds of code. I was big into video games when I was younger, which lead me to having an interest in computers. I was first introduced to coding, when I joined my high schools robotics team. Since then I&rsquo;ve played with robot programming, game development, autimization, and now settling with web development.</p>
    <div className='grid grid-cols-2 mt-16'>
      <div className=''>
      <p className='text-xl    leading-8'>
    When working I focus on the details for a clean bigger picture. Every major idea I have comes from a good white board session, and reaserch to ensure what I am doing is effective.
    </p>
    <p className='mt-7 text-lg'>Some of my hobbies outside of coding are :
      <ol className=' leading-10'>
        <li className='flex items-center'><Game />Gaming</li>
        <li className='flex'><Cooking />Cooking</li>
        <li className='flex'><Hiking />Hiking</li>
        <li className='flex'><WorkingOut />Working out</li>
        
      </ol>
    </p>
    <button onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} onClick={()=> scrollSkills()} className={`${
            hovered && "animate-wiggle"
          } bg-red-500 py-2 px-3 mt-12 rounded-full text-white shadow-lg`}>See My Skills</button>
      </div>


      <div>

<Me  />
</div>
    </div>
    
    </div>
    
  </div>

  
</div>
  )
}
