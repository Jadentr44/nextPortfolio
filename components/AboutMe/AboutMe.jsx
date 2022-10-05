import React,{useState} from 'react'
import { motion } from 'framer-motion'
import IsVisible from 'react-is-visible/lib/IsVisible'
function EX(){
  const code = new Algorithm()
}
export default function AboutMe() {
  const [seen,setSeen] =useState(false)
  const stretched = {display:"inline-block",
    webkitTransform:"scale(2,1)", /* Safari and Chrome */
    mozTransform:"scale(2,1)", /* Firefox */
    msTransform:"scale(2,1)", /* IE 9 */
    oTransform:"scale(2,1)", /* Opera */
    transform:"scale(2,1)" /* W3C */
}

  return (
    <div className=' min-h-screen relative pt-12'>
 <div className='absolute top-[75%]'>
      <IsVisible once>
    {(isVisible) => <h1>{isVisible ? setSeen(true) : `I'm not visible!`}</h1>}
  </IsVisible>
      </div>


<div></div>

<div className="w-fit h-fit text-6xl p-5 pb-10 border-black text-center mx-auto relative">
        <motion.div
        transition={{left:{duration:.8}}}
        animate={{width:seen?"0%":"110%"}}
        className="bg-[#DFF1FF] h-[105%] absolute  right-0  bottom-0 top-0 ">

        </motion.div>
        <div className="w-full lg:w-[25vw] shadow-xl rounded-xl shadow-red-600       bg-red-500 text-white py-2 "><h2 className=''>About me</h2></div>
        
      </div>

      <div  className='mx-[10%] h-[85vh]  grid grid-cols-3 gap-2'>

        <div className='flex flex-col  justify-center items-center col-span-3 lg:col-span-1'>
          <div className='h-fit shadow-2xl shadow-red-600  w-1/2 lg:w-full  rounded-b-full bg-red-500'>
         <h2 className='text-center text-white text-xl lg:text-3xl pt-3'>Jaden Rodriguez</h2>
         <div style={{backgroundSize:"100% 100%"}}  className={`bg-[url('/me.png')] h-[20vh] lg:h-[45vh] w-full rounded-b-full`}></div>
          </div>
        </div>
        
        <div className=' col-span-3 lg:col-span-2 text-3xl lg:text-5xl text-center text-black  py-[10%] lg:px-[20%] '>
          <h3>I am Jaden Rodriguez</h3>
          <p className='text-xl mb-4'>A full-stack/mobile developer</p>
          <div className='min-h-[70%] h-fit flex flex-col justify-around '>
            <div>
            <p className='text-lg mb-5'>I&rsquo;m a <span className='px-7' style={stretched}>flexible</span> Developer who can add a nice UI to your front end, or a complex algorithm to your backend. I stress the small things, in order for a clean bigger picture.</p>
            </div>
            <div>
          <p className='text-xl '>Who am I off the Screen?</p>
              <p className='text-lg'>I was born and raised in texas, where growing up I was really intersted in videio games,which naturally led me to computers. My inrest in tech took off in highschool after I joined the robotics team, learning how to code.</p>
            </div>
          </div>
          
        </div>

      </div>

    </div>
  )
}
