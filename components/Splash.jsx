import React,{useEffect,useState} from 'react'
import { FadeIn } from 'react-slide-fade-in'
import {IoIosArrowDown} from 'react-icons/io'
import TextTransition, { presets } from "react-text-transition";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
export default function Splash() {
  const words = ["Front-end ", "Back-end ", "Mobile "];
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div id='home' style={{backgroundSize:"100% 100%"}} className='bg-[url(https://images.pexels.com/photos/93405/pexels-photo-93405.jpeg?auto=compress&cs=tinysrgb&w=1600)]  bg-no-repeat h-screen flex justify-center  items-center w-screen z-10 relative'>
      <div className=' absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-100  h-36'></div>
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
        <img className='w-[50%]' src="/logo.svg" alt="" />
      </motion.div>
      <div className='max-w-[63rem]'>
      <h1 className='lg:text-8xl md:text-6xl text-5xl font-semibold flex'>{"Jaden Rodriuez".split("").map((e,i)=>{
        return <FadeIn key={i} from="bottom"
        positionOffset={'5vw'}
        triggerOffset={0}
        delayInMilliseconds={i*100+3000}>{e}</FadeIn>
      })}</h1>
      <FadeIn
      from="bottom"
      positionOffset={'5vw'}
      triggerOffset={0}
      delayInMilliseconds={4900}
    >
      
      
        
      
    <h2 className=' flex text-2xl font-semibold justify-end mt-5'>
       
    <TextTransition direction={"down"} springConfig={presets.wobbly}>
                {words[index % words.length]}
              </TextTransition>
              <span className='ml-2'>Developer</span>
    </h2>
    
    </FadeIn>
    <div className='absolute left-0 right-0 flex justify-center bottom-[5rem]'>

    <FadeIn
    from="bottom"
    positionOffset={'5vw'}
    triggerOffset={0}
    delayInMilliseconds={6500}>
      <Link 
      smooth
      to='about'
      >
      <div className=' animate-bounce'>
        <p className='text-2xl'>
        learn more
        </p>
        <IoIosArrowDown size={"100%"} className='w-16 mx-auto' />
      </div>
      </Link>
      
    </FadeIn>
    </div>
      </div>
      
    </div>
  )
}
