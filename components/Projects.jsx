import React from 'react'
import ProjectCard from './ProjectCard'
export default function Projects() {
  return (
    <div className="flex px-[10%] pt-48" id='projects'>
      <div className='w-1/3'><img src="projects.svg" alt="" /></div>
      <div className='w-2/3'>
      <div className="flex items-center">
          <div className="h-1 w-full bg-black"></div>
        <h1 className=" mx-2 text-5xl   ">Projects</h1>
          <div className="h-1 w-full bg-black"></div>
        </div>
        <div className='flex flex-wrap w-full'>
          <ProjectCard desc={"A full stack website, that allows you to view, and search popular anime. As well as login and save a list of your favorite anime, that you can share with your friends."} img={"MyAniRank.png"} tech={["Next JS","React","Next Auth", "MongoDb","Tailwind"]} name={"MyAniRank"} />
          <ProjectCard desc={"a one stop DND one shot builder. This website includes a monster maker, encounter balancer, and story layout for your next DND session"} img={"houseRuled.png"} tech={["Next JS","React","Auth-0", "MongoDb","Tailwind"]} name={"House Ruled"} />
          <ProjectCard desc={"An online text-based pvp game, that allows you an another payer to customize a fighter, then take turn based attacks on one another."} img={"botst.jpg"} tech={["Handlebars","Html","Bootstrap", "Javascript","Jquery","express","SQL"]} name={"Battle of the Shadow Tomb"} />
          <ProjectCard desc={"A website that allows you to search cities, and get back data on local activities as well as currency exchange rate, and weather"} img={"DotM.jpg"} tech={["Html","Javascript","Jquery", "Bulma","Weather API","express"]} name={"Dart On The Map"} />
          
          <div className='w-[40%] mx-auto'></div>
        </div>
      </div>
    </div>
  )
}
