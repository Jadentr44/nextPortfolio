import React,{useState} from 'react'
import { motion } from 'framer-motion'
import IsVisible from 'react-is-visible/lib/IsVisible'
import Me from './Me'

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
    <div class="grid grid-cols-3  h-screen">
      <div style={{boxShadow:"inset 0 0 15px  black",backgroundImage:"url('/aboutMe.png')",backgroundSize:"auto 100%"}} className='bg-red-500 h-full shadow-blue-600 hidden lg:block'></div>



  <div className='lg:col-span-2 col-span-3   px-[10%] relative '>
    <div className='mt-10  w-fit mx-auto flex items-center'>
      <div className=''>
      <h2 className='text-2xl'>Hi I'm</h2>
      <h2 className='text-7xl '>Jaden Rodriguez </h2>
      <h2 className=' text-2xl flex justify-end  mt-3'>a web developer</h2>

      </div>
      <img className=' ml-3  h-[12vh]' src="/logo.png" alt="" />
    </div>
    <div>

    <p>I can code</p>
    </div>
    <Me  />
  </div>

  
</div>
  )
}
