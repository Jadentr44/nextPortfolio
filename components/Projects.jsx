import React from 'react'
import ProjectCard from './ProjectCard'
export default function Projects() {
  return (
    <div className="flex lg:px-[10%] px-[5%] mt-14 lg:pt-48" id='projects'>
      <div className='w-1/3 lg:block hidden'><img src="projects.svg" alt="" /></div>
      <div className='lg:w-2/3 '>
      <div className="flex items-center  ">
        <img className='w-1/3 lg:hidden block' src="/projects.svg" alt="" />
        <div className='h-1 my-auto w-full bg-black'></div>
        <h1 className=" mx-2 lg:text-4xl text-3xl   ">Projects</h1>
        <div className='h-1 w-full bg-black'></div>
      </div>
        <div className='flex flex-wrap w-full'>
          <ProjectCard github={"https://github.com/Jadentr44/AniRank"} live={"https://myanirank.vercel.app/"}  desc={"A full stack website, that allows you to view, and search popular anime. As well as login and save a list of your favorite anime, that you can share with your friends."} img={"MyAniRank.png"} tech={["Next JS","React","Next Auth", "MongoDb","Tailwind"]} name={"MyAniRank"} />
          <ProjectCard live={"https://www.houseruled.com/"} github={"https://github.com/Fighting-Mongooses-pro3/supreme-pancake"} desc={"a one stop DND one shot builder. This website includes a monster maker, encounter balancer, and story layout for your next DND session"} img={"houseRuled.png"} tech={["Next JS","React","Auth-0", "MongoDb","Tailwind"]} name={"House Ruled"} />
          <ProjectCard github={"https://github.com/toddayres06/Project2"} live={"https://the-shadow-tome.herokuapp.com/"} desc={"An online text-based pvp game, that allows you an another payer to customize a fighter, then take turn based attacks on one another."} img={"botst.jpg"} tech={["Handlebars","Html","Bootstrap", "Javascript","Jquery","express","SQL"]} name={"Battle of the Shadow Tomb"} />
          {/* <ProjectCard desc={"An online text-based pvp game, that allows you an another payer to customize a fighter, then take turn based attacks on one another."} img={"botst.jpg"} tech={["Handlebars","Html","Bootstrap", "Javascript","Jquery","express","SQL"]} name={"Saidy Salon"} /> */}
          <ProjectCard github={"https://github.com/Jadentr44/Dart-On-The-Map"} live={"https://jadentr44.github.io/Dart-On-The-Map/"} desc={"A website that allows you to search cities, and get back data on local activities as well as currency exchange rate, and weather"} img={"DotM.jpg"} tech={["Html","Javascript","Jquery", "Bulma","Weather API","express"]} name={"Dart On The Map"} />
          
          <div className='w-[40%] mx-auto'></div>
        </div>
      </div>
    </div>
  )
}
