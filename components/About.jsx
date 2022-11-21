import React from "react";
import { AiFillGithub,AiFillLinkedin,AiFillTwitterCircle,AiFillMail } from "react-icons/ai";
import {FaChessKnight,FaRunning,FaMusic} from 'react-icons/fa'
import {IoLogoGameControllerA} from 'react-icons/io'
import Image from "next/image";
export default function About() {
  return (
    <div className="lg:px-[10%] px-[5%] pt-10 lg:pt-48 flex  " id="about">
      <div className="w-1/3 lg:block hidden ">
        <img src="/sitting.png" className=""   />
      </div>
      <div className="lg:w-2/3 h-auto  lg:pl-[10%]">
        <div className="flex  items-center">
          <img className="w-1/3 lg:hidden block" src="/sitting.png" alt="" />
          <div className="h-1 w-full bg-black"></div>
        <h1 className=" mx-2 lg:text-4xl text-3xl  ">About<span className="mx-2"></span>Me</h1>
          <div className="h-1 w-full bg-black"></div>
        </div>
        <div className="text-xl mt-5 ">
          <p className="">
            Hello World🌎! I am a full stack developer based out of Texas. I
            Started my coding journey with my high school robotics team. Since
            then, I&apos;ve only grown the love the art of programing more. I
            Started with robotics, but played around with game development,
            automation, and now designing full stack web applications.
          </p>
          
        </div>
        <h3 className="text-2xl mt-5">Some of my interest outside of Coding:</h3>
        <div className="flex mt-5 justify-around w-full ">
          <div className="aboutCard">
            <p className="text-lg text-white">Chess</p>
            < FaChessKnight size={"50%"} />
          </div>
          <div className="aboutCard">
            <p className="text-lg text-white">Fitness</p>
            < FaRunning size={"50%"} />
          </div>
          <div className="aboutCard">
            <p className="text-lg text-white">Music</p>
            < FaMusic size={"50%"} />
          </div>
          <div className="aboutCard">
            <p className="text-lg text-white">Gaming</p>
            < IoLogoGameControllerA size={"50%"} />
          </div>
        </div>
        
        <div className=" mt-8 flex justify-around w-1/2">
          <a className="w-[5rem]"  rel="noreferrer"
                  target={"_blank"}
                  href="https://github.com/Jadentr44">
          <AiFillGithub className="text-black hover:text-red-500" size={"100%"} />
          </a>
          <a  className="w-[5rem]" rel="noreferrer"
                  target={"_blank"}
                  href="https://www.linkedin.com/in/jaden-rodriguez-59a000242/">
          <AiFillLinkedin className="text-black hover:text-red-500" size={"100%"} />
          </a>
          <a className="w-[5rem]"  rel="noreferrer"
                  target={"_blank"}
                  href="https://twitter.com/Jadent_dev">
          <AiFillTwitterCircle className="text-black hover:text-red-500" size={"100%"} />
          </a>
          <a className="w-[5rem]"  rel="noreferrer"
                  target={"_blank"}
                  href="mailto: rodriguez@jadent.dev">
          <AiFillMail className="text-black hover:text-red-500" size={"100%"} />
          </a>
        </div>
      </div>
    </div>
  );
}
