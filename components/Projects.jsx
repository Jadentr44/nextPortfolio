import React from 'react'
import ProjectCard from './ProjectCard'
export default function Projects() {
  return (
    <div className=" lg:px-[10%] px-[5%] mt-14 lg:pt-48" id='projects'>
      
      <div className='w-full '>
      <div className="flex items-center  ">
        
        <div className='h-1 my-auto w-full bg-black'></div>
        <h1 className=" mx-2 lg:text-4xl text-3xl   ">Projects</h1>
        <div className='h-1 w-full bg-black'></div>
      </div>
        <div className='flex flex-wrap w-full'>
          <ProjectCard index={0} github={"https://github.com/Jadentr44/AniRank"} live={"https://myanirank.vercel.app/"}  desc={"A full stack website that allows you to browse and search anime. With the ability to save your favorite titles to you account, making a list you can keep updated, and share with friends."} img={"MyAniRank.png"} tech={["Next JS","React","Next Auth", "MongoDb","Tailwind"]} name={"MyAniRank"} />
          <ProjectCard index={1} live={"https://www.houseruled.com/"} github={"https://github.com/Fighting-Mongooses-pro3/supreme-pancake"} desc={" A one Stop DND one shot builder. You have the ability to create a completely customizable one shot, with custom or 5e monsters, A text editor, and encounter balancer. You can save your monster and one shot for later use, or further development."} img={"houseRuled.png"} tech={["Next JS","React","Auth-0", "MongoDb","Tailwind"]} name={"House Ruled"} />
          <ProjectCard index={2} github={"https://github.com/toddayres06/Project2"} live={"https://the-shadow-tome.herokuapp.com/"} desc={"An online retro themed game, that allows you and another player to play in a back and forth pvp text based game. You can customize your fighter to help aid his attack, or better his deference. "} img={"botst.jpg"} tech={["Handlebars","Html","Bootstrap", "Javascript","Jquery","express","SQL"]} name={"Battle of the Shadow Tomb"} />
          {/* <ProjectCard desc={"An online text-based pvp game, that allows you an another payer to customize a fighter, then take turn based attacks on one another."} img={"botst.jpg"} tech={["Handlebars","Html","Bootstrap", "Javascript","Jquery","express","SQL"]} name={"Saidy Salon"} /> */}
          <ProjectCard index={3} github={"https://github.com/Jadentr44/Dart-On-The-Map"} live={"https://jadentr44.github.io/Dart-On-The-Map/"} desc={"A website that allows you to search a city or location, and get local data on activities, weather, and exchange rate. perfect for a planned out trip, or last minute get away."} img={"DotM.jpg"} tech={["Html","Javascript","Jquery", "Bulma","Weather API","express"]} name={"Dart On The Map"} />
          
          <div className='w-[40%] mx-auto'></div>
        </div>
      </div>
    </div>
  )
}
