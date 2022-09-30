import React,{useState} from 'react'
import Typewriter from 'typewriter-effect';
import { Down } from './icons';
export default function Splash() {
  const [main,setMain] = useState(null)
  const [seeArrow,setArrow] = useState(false)
  const easeIn = {opacity: 1, transition: "opacity 500ms ease-in"};
    const empty = {opacity: 0};
  return (
    <div style={{backgroundSize:"100% 100%"}}  className="relative flex justify-center items-center  h-screen w-screen bg-opacity-10 bg-splash bg-no-repeat overflow-x-hidden">
      <div className='text-white'>
      <h1 className='text-6xl '>
        {main
        ?main
      :
      <Typewriter 
  onInit={(typewriter) => {
    typewriter.pause(500)
    .typeString('Jaden Rodriguez')
    .callFunction(() => {
      setMain("Jaden Rodriguez")
    })
      .start();
  }}/>
      }
       </h1> 

        <div className='w-full text-center '>
      {!main
      ?<div className=' invisible'>filler</div>
    :
    <Typewriter 
    options={{skipAddStyles:false}}
  onInit={(typewriter) => {
    typewriter.pause(800)
    .typeString('A full-stack developer')
    .pauseFor(1000)
    .changeDeleteSpeed(5)
    .deleteChars(20)
    .typeString("mobile developer")
    .pauseFor(1000)
    .deleteChars(16)
    .typeString("new colleague???")
    .pauseFor(1000)
    .deleteAll()
    .typeString("come find out")
    .callFunction(() => {
      setTimeout(() => {
        setArrow(true)
      }, 500)
      
      
    })
      .start();
  }}
/>
    
    }
      

        </div>
      </div>
      
      
      <div style={seeArrow?easeIn:empty} className='absolute animate-bounce bottom-[5vw] opacity-0 transition-opacity'><Down size={"3vw"} /></div>
      
    </div>
  )
}