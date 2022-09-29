import Image from "next/image";
import React, { useState,useEffect, useRef } from "react";
import Links from "./Links";
import { motion } from "framer-motion";

export default function ProjectCard({z,type,name}) {
  const [xOffset, setOffset] = useState("0%");

  return (
    <div style={{backgroundSize:"100% 10.5vh", zIndex:1}} className=" bg-no-repeat bg-botst border-2 border-red-500 rounded-b-lg min-w-[15vw] max-w-[15vw] h-fit">
      <div className="h-[7vh] invisible">a</div>

      <div className="flex items-center">

      <div className="w-full bg-red-500 border-2 border-red-500"></div>
      <div style={{backgroundSize:'102% 100%'}} className=" bg-logo  bg-no-repeat w-[8vw] h-[7vh] border-2 border-red-500 flex justify-center items-center  rounded-[50%]"></div> 
      <div className="w-full bg-red-500 border-2 border-red-500"></div>
      </div>
      <h1 className=" text-xl mx-[10%] text-center">Battle of the Shadow Tomb</h1>
    <p className="px-3 text-center my-4 mb-12">A simple web game that allows you  to play a back and forth fighting game online</p>
    <Links/>
    </div>  
  );
}
