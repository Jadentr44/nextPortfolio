import React,{useState} from 'react'
import ProjectCard from './ProjectCard'
import IsVisible from 'react-is-visible/lib/IsVisible'
import { motion } from 'framer-motion'
export default function Projects() {
  const [seen,setSeen] =useState(false)
  
  return (
    <div className='relative min-h-screen'>
      <div className='absolute top-[75%]'>
      <IsVisible once>
    {(isVisible) => <h1>{isVisible ? setSeen(true) : `I'm not visible!`}</h1>}
  </IsVisible>
      </div>
<div className="w-1/4  text-6xl text-center mx-auto relative">
        <motion.div
        transition={{left:{duration:.8}}}
        animate={{width:seen?"0%":"100%"}}
        className="bg-white h-full absolute  right-0 top-0">

        </motion.div>
        <div className="w-full bg-red-500 text-white py-2 mb-12"><h2>Projects</h2></div>
        
      </div>
   
    <div className='flex justify-around lg:justify-between flex-wrap  mx-[10%] relative h-fit '>
      {/* <side style={{zIndex:3}} className="w-full bg-white">a</side> */}
      <ProjectCard tech={["Handlebars","Jquery","Express","MySQL","bootstrap"]} name={"Battle of the Shadow Tomb"} desc={"a game  that allows you and another Player to play online in a back and forth pvp game, you each have the ability to customize your characters fighting ability. "} path={"/botst.jpg"}  />

       <ProjectCard tech={["React","Next.js","Next-Auth","tailwind"]} name={"MyAniRank"} desc={"an app that allows you to log in and browse anime, that you can then rank. Your list will be saved to your account, that you can then share with your friends."}  />

      <ProjectCard tech={["React","Next.js","Next-Auth","tailwind"]} name={"MyAniRank"} desc={"an app that allows you to log in and browse anime, that you can then rank. Your list will be saved to your account, that you can then share with your friends."}  />
      
      <ProjectCard tech={["HTML","weather API","bulma","local storage"]} name={"Dart on the map"} desc={"an app that allows you to log in and browse anime, that you can then rank. Your list will be saved to your account, that you can then share with your friends."} path={"/DotM.jpg"}  /> 
      <ProjectCard tech={["HTML","weather API","bulma","local storage"]} name={"Dart on the map"} desc={"an app that allows you to log in and browse anime, that you can then rank. Your list will be saved to your account, that you can then share with your friends."} path={"/DotM.jpg"}  /> 
      <ProjectCard tech={["HTML","weather API","bulma","local storage"]} name={"Dart on the map"} desc={"an app that allows you to log in and browse anime, that you can then rank. Your list will be saved to your account, that you can then share with your friends."} path={"/DotM.jpg"}  /> 

      
      
    
      
    </div>
    </div>
  )
}
