import React,{useEffect,useState} from 'react'
import { FadeIn } from 'react-slide-fade-in'
import TextTransition, { presets } from "react-text-transition";
import { motion } from 'framer-motion';
export default function Splash() {
  const words = ["Front-end ", "Back-end ", "Mobile "];
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2500 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div style={{backgroundSize:"100% 100%"}} className='bg-[url(https://images.pexels.com/photos/93405/pexels-photo-93405.jpeg?auto=compress&cs=tinysrgb&w=1600)]  bg-no-repeat h-screen flex justify-center  items-center w-screen z-10 relative'>
      <div className=' absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white  h-36'></div>
      <motion.div
      animate={{
        scale: [0, 1, 1,1, 0],
      rotate: [0, 0, 360,360, 360],
      }}
      transition={{
        duration:3,
        times: [0, 0.2, 0.6, 0.8, 1],
      }}
      className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center"
      >
        <img className='w-[20%]' src="/logo.svg" alt="" />
      </motion.div>
      <div className='max-w-[63rem]'>
      <FadeIn
      from="bottom"
      positionOffset={'5vw'}
      triggerOffset={0}
      delayInMilliseconds={3500}
    >
      
      <h1 className='text-9xl font-semibold'>Jaden Rodriguez</h1>
        
      
    <h2 className=' flex text-4xl font-semibold justify-end mt-5'>
       
    <TextTransition direction={"down"} springConfig={presets.wobbly}>
                {words[index % words.length]}
              </TextTransition>
              <span className='ml-2'>Developer</span>
    </h2>
    
    </FadeIn>
    <FadeIn
    from="bottom"
    positionOffset={'5vw'}
    triggerOffset={0}
    delayInMilliseconds={4000}>
      <p className='w-[75%] mt-12 text-2xl font-semibold'>I am a full stack web developer, based in Texas. I can build responsive layouts, effectively manage a database, and almost anything in between.</p>
    </FadeIn>
      </div>
      
    </div>
  )
}
