import Arrow from "./icons/arrow";
import React, { useState, useEffect, useRef } from "react";

// import BOTST from '../../public/BOTST.jpg'
import { motion } from "framer-motion";
import Github from "./icons/Github";
import RiComputerLine from "./icons/Website"; 

export default function ProjectCard({ tech, name,desc,path}) {
  const [imgW, setW] = useState("85%");
  const [arrowDeg, setArrow] = useState("0deg");
  const [showLinks,setShow] = useState(false)
  const url = `url('${path}')`
  console.log(url)
  return (
    <div
      style={{ zIndex: 1 }}
      className="bg-[#8DACE1] border-4 border-black rounded-lg flex relative w-[70vw] lg:w-[36vw]  min-h-[25vh] h-fit lg:min-h-[18vw] lg:h-full   text-white mb-12 "
    >
      <motion.div
        animate={{ width: imgW }}
        transition={{type:"tween"}}
        style={{ backgroundSize: "auto 100%",backgroundImage:url }}
        
        className={` h-full   absolute left-0 z-10 rounded-sm`}
      ></motion.div>
      <motion.div
        animate={{ marginLeft: imgW }}
        transition={{type:"tween"}}

        className="absolute flex flex-col justify-center items-center h-full  w-1  z-20  left-0 right-0 text-wh"
      >
        <div className="h-full w-1 bg-red-500"></div>
        <motion.div
          animate={{ rotate: arrowDeg }}
          onClick={() => {
            imgW == "85%" ? setW("0%") : setW("85%");
            imgW == "85%" ? setArrow("180deg") : setArrow("0deg");
            !showLinks?setShow(true):setShow(false)
          }}
          className="border-2 border-red-500 h-8 w-10 lg:h-14 lg:w-20 rounded-full p-2 bg-red-500 cursor-pointer  text-white"
        >
          <Arrow />
        </motion.div>
        <div className="h-full w-1 bg-red-500"></div>
      </motion.div>
      <div className="w-full min-h-full px-[15%] bg-[#8DACE1] ">
        <h1 className="text-center text-md lg:text-xl max-w-[80%]  mx-auto">{name}</h1>
        <h2 className="text-center text-sm lg:text-lg my-2 lg:my-3 font-bold">
        {tech.map((e,i)=>{
          return i==0?`| ${e} |`:` ${e} |`
        })}
        </h2>
        
        <p className="text-sm lg:text-md xl:text-lg ">{desc}</p>
       
      </div>
      <motion.div
      animate={{x:showLinks?"0":"-80px"}}
      className="lg:right-[3%] right-[5%] absolute bottom-0" style={{ zIndex: -1 }}>

      <div  className="absolute bottom-12 border-black  rounded-r-full bg-red-500  pl-8 pr-4 border-2 cursor-pointer"><RiComputerLine /></div>
      <div  className="absolute bottom-2 border-black  rounded-r-full bg-red-500  pl-8 pr-4 border-2 cursor-pointer"><Github /></div>

      </motion.div>
      

    </div>
  );
}
