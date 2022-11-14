import React from "react";
import { AiFillGithub,AiFillLinkedin,AiFillTwitterCircle,AiFillMail } from "react-icons/ai";
import {FaChessKnight,FaRunning,FaMusic} from 'react-icons/fa'
import {IoLogoGameControllerA} from 'react-icons/io'
export default function About() {
  return (
    <div className="px-[10%] pt-48 flex " id="about">
      <div className="w-1/3  ">
        <img src="/me.svg" alt="" />
      </div>
      <div className="w-full h-auto  pl-[10%]">
        <div className="flex items-center">
          <div className="h-1 w-full bg-black"></div>
        <h1 className=" mx-2 text-5xl   ">About<span className="mx-2"></span>Me</h1>
          <div className="h-1 w-full bg-black"></div>
        </div>
        <div className="text-2xl mt-5 ">
          <p className="">
            Hello World🌎! I am a full stack developer based out of Texas. I
            Started my coding journey with my high school robotics team. Since
            then, I&apos;ve only grown the love the art of programing more. I
            Started with robotics, but played around with game development,
            automation, and now designing full stack web applications.
          </p>
          
        </div>
        <h3 className="text-3xl mt-5">Some of my interest outside of Coding:</h3>
        <div className="flex mt-5 justify-around">
          <div className="border-2 h-36 w-36 bg-red-500 rounded-2xl text-center flex flex-col justify-around items-center text-white">
            <p className="text-2xl text-white">Chess</p>
            < FaChessKnight size={"50%"} />
          </div>
          <div className="border-2 h-36 w-36 bg-red-500 rounded-2xl text-center flex flex-col justify-around items-center text-white">
            <p className="text-2xl text-white">Fitness</p>
            < FaRunning size={"50%"} />
          </div>
          <div className="border-2 h-36 w-36 bg-red-500 rounded-2xl text-center flex flex-col justify-around items-center text-white">
            <p className="text-2xl text-white">Music</p>
            < FaMusic size={"50%"} />
          </div>
          <div className="border-2 h-36 w-36 bg-red-500 rounded-2xl text-center flex flex-col justify-around items-center text-white">
            <p className="text-2xl text-white">Gaming</p>
            < IoLogoGameControllerA size={"50%"} />
          </div>
        </div>
        <h3 className="text-3xl mt-8 mb-4">View my social:</h3>
        <div className=" flex justify-around w-1/2">
          <a className="w-[5rem]" href="">
          <AiFillGithub className="text-black hover:text-red-500" size={"100%"} />
          </a>
          <a className="w-[5rem]" href="">
          <AiFillLinkedin className="text-black hover:text-red-500" size={"100%"} />
          </a>
          <a className="w-[5rem]" href="">
          <AiFillTwitterCircle className="text-black hover:text-red-500" size={"100%"} />
          </a>
          <a className="w-[5rem]" href="">
          <AiFillMail className="text-black hover:text-red-500" size={"100%"} />
          </a>
        </div>
      </div>
    </div>
  );
}