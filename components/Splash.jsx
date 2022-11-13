import React,{useEffect,useState} from 'react'
import { FadeIn } from 'react-slide-fade-in'
import TextTransition, { presets } from "react-text-transition";
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
    <div style={{backgroundSize:"100% 100%"}} className='bg-[url(https://images.pexels.com/photos/93405/pexels-photo-93405.jpeg?auto=compress&cs=tinysrgb&w=1600)]  bg-no-repeat h-screen flex justify-center  items-center w-screen'>
      <div className='max-w-[63rem]'>
      <FadeIn
      from="bottom"
      positionOffset={'5vw'}
      triggerOffset={0}
      delayInMilliseconds={500}
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
    delayInMilliseconds={1500}>
      <p className='w-[75%] mt-12 text-2xl font-semibold'>I am a full stack web developer, based in Texas. I can build responsive layouts, effectively manage a database, and almost anything in between.</p>
    </FadeIn>
      </div>
      
    </div>
  )
}
