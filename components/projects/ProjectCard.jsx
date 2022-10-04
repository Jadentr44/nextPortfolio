import Arrow from "./icons/arrow";
import React, { useState, useEffect, useRef } from "react";
import Links from "./Links";
// import BOTST from '../../public/BOTST.jpg'
import { motion } from "framer-motion";

export default function ProjectCard({ tech, name,desc,path}) {
  const [imgW, setW] = useState("85%");
  const [arrowDeg, setArrow] = useState("0deg");
  const [arrowHover, setHover] = useState(false);
  const [animation, setAnimation] = useState("tween");
  const url = `url('${path}')`
  console.log(url)
  return (
    <div
      style={{ zIndex: 1 }}
      className="bg-red-400  border-4 border-black rounded-lg flex relative w-[70vw] lg:w-[36vw]  min-h-[25vh] h-fit lg:min-h-[18vw] lg:h-full z-10  text-white mb-12"
    >
      <motion.div
        animate={{ width: imgW }}
        transition={{type:"tween"}}
        style={{ backgroundSize: "auto 100%",backgroundImage:url }}
        
        className={` h-full   absolute left-0 z-10`}
      ></motion.div>
      <motion.div
        animate={{ marginLeft: imgW }}
        transition={{type:"tween"}}

        className="absolute flex flex-col justify-center items-center h-full  w-1  z-20  left-0 right-0 text-wh"
      >
        <div className="h-full w-1 bg-gray-400"></div>
        <motion.div
          animate={{ rotate: arrowDeg }}
          onClick={() => {
            imgW == "85%" ? setW("0%") : setW("85%");
            imgW == "85%" ? setArrow("180deg") : setArrow("0deg");
          }}
          className="border-2 h-8 w-10 lg:h-14 lg:w-20 rounded-full p-2 bg-white cursor-pointer  text-black"
        >
          <Arrow />
        </motion.div>
        <div className="h-full w-1 bg-gray-400"></div>
      </motion.div>
      <div className="w-full min-h-full px-[15%] bg-red-500 ">
        <h1 className="text-center text-md lg:text-xl max-w-[80%]  mx-auto">{name}</h1>
        <h2 className="text-center text-sm lg:text-lg my-2 lg:my-3 font-bold">
        {tech.map((e,i)=>{
          return i==0?`| ${e} |`:` ${e} |`
        })}
        </h2>
        
        <p className="text-sm lg:text-md xl:text-lg ">{desc}</p>
       
      </div>
    </div>
  );
}
