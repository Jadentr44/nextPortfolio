import React,{useState,useEffect} from 'react'
import TextTransition, { presets } from "react-text-transition";
export default function Splash({scrollAbout}) {
  const words = ["Front-end ","Back-end ","Mobile "]
  const [index,setIndex]= useState(0)
  const [hovered,setHover]= useState(false)

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      2500 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div class="grid grid-cols-3  h-screen">
  <div className='lg:col-span-2 col-span-3 flex justify-center items-center px-[25%]'>
    <div>
    <h1 className='text-7xl'>
      Jaden Rodriguez
    </h1>
    <h2 className='flex text-3xl mt-2 mb-[15%]'>
      <div>

    <TextTransition  direction={"down"} springConfig={presets.wobbly}>
        {words[index % words.length]} 
      </TextTransition>
      </div>
      <span className='ml-2'>

      Developer
      </span>
    </h2>
    <p className='mb-[10%] text-xl'>
    I am a web developer ready to do work in front-end and back-end, designing mobile first, responsive applications.
    </p>
    <button onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} onClick={()=> scrollAbout()} className={`${
            hovered && "animate-wiggle"
          } bg-red-500 py-2 px-3 rounded-full text-white shadow-lg`}>Learn More</button>
    </div>
    
  </div>

  <div  style={{boxShadow:"inset 0 0 15px  black",zIndex:100}} className='bg-red-500 h-full shadow-blue-600 hidden lg:block relative '>
    
    </div>
    
</div>
  )
}
