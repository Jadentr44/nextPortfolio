import React from 'react'
import ProjectCard from './ProjectCard'
export default function Projects() {
  const zCounter =1

  return (
    <div className='flex  mx-[10%]'>
      <side style={{zIndex:3}} className="w-full bg-white">a</side>
      <ProjectCard name={"MyAniRank"} z={zCounter} type={"website"}/>
      <side style={{zIndex:3}} className="w-full bg-white"></side>
      
    </div>
  )
}
