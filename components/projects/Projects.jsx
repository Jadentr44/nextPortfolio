import React,{useState} from 'react'
import ProjectCard from './ProjectCard'
import IsVisible from 'react-is-visible/lib/IsVisible'
export default function Projects() {
  const [seen,setSeen] =useState(false)
  
  return (
    <div className='flex justify-around lg:justify-between flex-wrap  mx-[10%] relative min-h-screen'>
      {/* <side style={{zIndex:3}} className="w-full bg-white">a</side> */}
      <ProjectCard tech={["Handlebars","Jquery","Express","MySQL","bootstrap"]} name={"Battle of the Shadow Tomb"} desc={"a game  that allows you and another Player to play online in a back and forth pvp game, you each have the ability to customize your characters fighting ability. "} path={"/botst.jpg"}  />

       <ProjectCard tech={["React","Next.js","Next-Auth","tailwind"]} name={"MyAniRank"} desc={"an app that allows you to log in and browse anime, that you can then rank. Your list will be saved to your account, that you can then share with your friends."}  />

      <ProjectCard tech={["React","Next.js","Next-Auth","tailwind"]} name={"MyAniRank"} desc={"an app that allows you to log in and browse anime, that you can then rank. Your list will be saved to your account, that you can then share with your friends."}  />
      
      <ProjectCard tech={["HTML","weather API","bulma","local storage"]} name={"Dart on the map"} desc={"an app that allows you to log in and browse anime, that you can then rank. Your list will be saved to your account, that you can then share with your friends."} path={"/DotM.jpg"}  /> 

      
      
      {/* <side style={{zIndex:3}} className="w-full bg-white"></side> */}
      
    </div>
  )
}
