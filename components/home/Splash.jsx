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
    <div class=" h-screen">
  <div className=' flex justify-center items-center px-[15%] h-full'>
    <div>
    <h1 className='lg:text-8xl text-5xl'>
      Jaden Rodriguez
    </h1>
    <h2 className='flex text-3xl lg:text-5xl mt-2 mb-[10%]'>
      <div>

    <TextTransition  direction={"down"} springConfig={presets.wobbly}>
        {words[index % words.length]} 
      </TextTransition>
      </div>
      <span className='ml-2'>

      Developer
      </span>
    </h2>
    <p className='mb-[5%] text-lg lg:text-xl mr-[25%]'>
    I am a web developer ready to do work in front-end and back-end, designing mobile first, responsive applications.
    </p>
    <button onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} onClick={()=> scrollAbout()} className={`${
            hovered && "animate-wiggle"
          } bg-red-500 py-2 px-3 rounded-full text-white shadow-lg`}>Learn More</button>
    </div>
    
  </div>

  
    
</div>
  )
}
