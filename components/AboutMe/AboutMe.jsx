import React, { useState } from "react";
import Game from "./icons/Game";
import Cooking from "./icons/Cooking";
import Hiking from "./icons/Hiking";
import WorkingOut from "./icons/WorkingOut";
import Music from "./icons/Music";
import Chess from "./icons/Chess";
import { motion } from "framer-motion";
import IsVisible from "react-is-visible/lib/IsVisible";
import Me from "./Me";

export default function AboutMe({ scrollSkills }) {
  const [seen, setSeen] = useState(false);
  const [hovered, setHover] = useState(false);
  const stretched = {
    display: "inline-block",
    webkitTransform: "scale(2,1)" /* Safari and Chrome */,
    mozTransform: "scale(2,1)" /* Firefox */,
    msTransform: "scale(2,1)" /* IE 9 */,
    oTransform: "scale(2,1)" /* Opera */,
    transform: "scale(2,1)" /* W3C */,
  };

  return (
    <div className="h-screen ">
      <div className="  mx-[10%] flex flex-col lg:justify-around">
        <header className="mt-20 lg:mt-5 w-full flex justify-center items-center ">
          <div className="  w-fit">
            <div className="text-lg lg:text-2xl">Hi im</div>
            <div className="text-2xl lg:text-6xl xl:text-7xl">
              Jaden Rodriguez
            </div>
            <div className=" float-right  lg:mt-4 text-lg lg:text-2xl">
              a web developer
            </div>
          </div>
          <div className="w-[40%] lg:hidden block">
            <Me />
          </div>
        </header>
        <main className="flex">
          <div className=" w-1/3 flex items-end">
            <Me />
          </div>
          <div className=" w-2/3 h-[70vh] mt-5  mx-[5%] relative">
          <button
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                onClick={() => scrollSkills()}
                className={`${
                  hovered && "animate-wiggle"
                } bg-red-500 py-2 px-3 mt-12 rounded-full text-white shadow-lg w-fit absolute bottom-0 left-0`}
              >
                See My Skills
              </button>
              <div className="flex justify-around mt-10">
                <div className="w-[10vw] h-[10vw] rounded-xl  bg-red-500 text-center text-white">
                  <p className="text-xl">hobbies:</p>
                  <ol className="flex flex-col items-center ">
                  <li className="flex items-center my-[3%]">
                    <Game />
                    <p className="ml-2 "> Gaming</p>
                  </li>
                  <li className="flex items-center my-[3%]">
                    <Chess />
                    <p className="ml-2">Chess</p> 
                  </li>
                  <li className="flex items-center my-[3%]">
                    <Hiking />
                   <p className="ml-2">  Hiking</p>
                  </li>
                  </ol>
                </div>
                <div className="w-[10vw] h-[10vw] rounded-xl  bg-red-500 text-center text-white">
                  <p className="text-xl">Interests:</p>
                  <ol className="flex flex-col items-center ">
                  <li className="flex items-center my-[3%]">
                    <Cooking />
                    <p className="ml-2"> Cooking</p>
                  </li>
                  <li className="flex items-center my-[3%]">
                    <Music />
                    <p className="ml-2"> Music</p>
                  </li>
                  <li className="flex items-center my-[3%]">
                    <WorkingOut />
                    <p className="ml-2">Fitness</p> 
                  </li>
                  </ol>
                </div>
                <div className="w-[10vw] h-[10vw] rounded-xl  bg-red-500"></div>
              </div>
            <p className="text-xl mt-12 ">
            I am interested in all kinds of code. I was a huge video game
            enthusiast when i was younger which translated into my interested in
            computers. I was first introduced to coding when I joined the
            robotics team at my high school. Since then, I have played with
            programming robotics, game development, automation, and now web
            development
            </p>
            <p className="text-xl mt-5">
                Moving forward I am investing my time and energy into mastering
                thew craft of web development. I like to focus on the details
                for a cleaner, bigger picture. Every major idea I have comes
                from a good white boarding session and research to ensure my
                plan will be effective
              </p>
          </div>
        </main>
      </div>
    </div>
  );
}
{
  /* <div className="h-full mt-5  lg:h-[70%]  ">
          <p>
            I am interested in all kinds of code. I was a huge video game
            enthusiast when i was younger which translated into my interested in
            computers. I was first introduced to coding when I joined the
            robotics team at my high school. Since then, I have played with
            programming robotics, game development, automation, and now web
            development
          </p>
          <div className="grid grid-cols-2">
            <div className="h-full flex flex-col justify-around col-span-2 lg:col-span-1">
              <p className="mt-6">
                Moving forward I am investing my time and energy into mastering
                thew craft of web development. I like to focus on the details
                for a cleaner, bigger picture. Every major idea I have comes
                from a good white boarding session and research to ensure my
                plan will be effective
              </p>
              <div className="mt-4">
                Some of my hobbies outside of coding are:
                <div className="grid grid-cols-2">
                <div className="lg:col-span-2">
                <ol className=" leading-10">
                  <li className="flex items-center">
                    <Game />
                    <p className="ml-2"> Gaming</p>
                  </li>
                  <li className="flex">
                    <Cooking />
                    <p className="ml-2"> Cooking</p>
                  </li>
                  <li className="flex">
                    <Hiking />
                   <p className="ml-2">  Hiking</p>
                  </li>
                  <li className="flex">
                    <WorkingOut />
                    <p className="ml-2"> Working</p> out
                  </li>
                </ol>
                </div>
                <div className="relative lg:col-span-2">
                <button
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                onClick={() => scrollSkills()}
                className={`${
                  hovered && "animate-wiggle"
                } bg-red-500 py-2 px-3 mt-12 rounded-full text-white shadow-lg w-fit absolute bottom-0 right-0`}
              >
                See My Skills
              </button>
                </div>
                </div>
                
              </div>
             
            </div>
            {/* picture of me */
}
//     <div className=" hidden lg:block">
//       <Me />
//     </div>
//   </div>
// </div> */}
