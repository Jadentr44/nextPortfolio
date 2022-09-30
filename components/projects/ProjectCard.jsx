import Image from "next/image";
import React, { useState,useEffect, useRef } from "react";
import Links from "./Links";
// import BOTST from '../../public/BOTST.jpg'
import { motion } from "framer-motion";

export default function ProjectCard({z,type,name}) {
  const [xOffset, setOffset] = useState("0%");

  return (
    <div style={{ zIndex:1}} className="bg-red-400  border-2 border-black rounded-lg lg-min-w-[15vw]  max-w-[15vw] h-fit">
      
      <div style={{backgroundSize:'100% 100%'}} className="  bg-no-repeat bg-botst h-[12vh] w-full ">
        
        
        </div>

      <div  className="flex  items-center mt-[-3.5vh]">

      <div className="w-full bg-red-500 border-2 border-red-500"></div>
      <div style={{backgroundSize:'102% 100%'}} className=" bg-logo  bg-no-repeat w-[8vw] h-[7vh] border-2 border-red-500 flex justify-center items-center  rounded-[50%]"></div> 
      <div className="w-full bg-red-500 border-2 border-red-500"></div>
      </div>

      <h1 className="text-white text-xl mx-[10%] text-center">Battle of the Shadow Tomb</h1>
    <p className="text-white px-3 text-center my-4 mb-12">A simple web game that allows you  to play a back and forth fighting game online</p>
    <Links/>
    </div>  
  );
}
