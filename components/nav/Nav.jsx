import React, { useState } from "react";
import { Hamburger, Resume, Github, Linkedin,Close } from "./icons/";
import { Next } from "../skills/icons/backend"; 
import Tailwind from "../skills/icons/frontend/TailWind";
import { FaReact } from "../skills/icons/frontend";
import { motion } from "framer-motion";

export default function Nav({scrollAbout,scrollSkills,scrollProjects}) {
  const [nav, setNav] = useState(false);
  const openNav = { right: 0, transition: "right 600ms ease-in", zIndex: 10 };
  const [iconRotate, setRotate] = useState("0deg")
  const [icon, setIcon] = useState(true);
  const [opening, setOpening] = useState(false);
  const smClosedNav = {
    right: "-20vw",
    transition: "right 600ms ease-in",
    zIndex: 10,
  };
  const mdClosedNav = {
    right: "-60vw",
    transition: "right 600ms ease-in",
    zIndex: 10,
  };
  const [openBoolean,setBoolean] = useState(true)
  function switchNav(){
    if(opening) return

    if(openBoolean){
      setOpening(true)
      setBoolean(false)
      setNav(true);
      setRotate("360deg")
      setTimeout(() => {
      setOpening(false)

        setIcon(false)
      }, 490)
      console.log("true, opening");
    }else{
      setOpening(true)
      setBoolean(true)
      setNav(false);
      setRotate("0deg")
      setTimeout(() => {
      setOpening(false)
      setIcon(true)
      }, 490)
      console.log("false, closed");

    }
    
    
  }
  return (
    <>
      {/* computer nav */}
      <div
        style={nav ? openNav : smClosedNav}
        className={`fixed flex top-0 h-screen invisible xl:visible  `}
        
      >
        <div onClick={()=>switchNav()} className="  cursor-pointer mt-12 xl:mt-4 mr-[-2px] z-20 px-3  py-2 h-fit w-fit rounded-l-full border-2 border-red-500 border-r-0 bg-red-500 ">
        <motion.div className="h-fit w-fit"
        transition={{rotate:{duration:.6}}}
        animate={{rotate:iconRotate}}
        >
          {icon?<Hamburger   size={"4rem"} />:<Close size={"4rem"} />}
        
        </motion.div>
        </div>
        
        <div className=" h-screen min-w-[20vw] border-l-4 border-red-500 bg-[#8DACE1] flex flex-col  ">
          <div className="  pt-4 pb-1 text-white flex flex-wrap justify-around bg-red-500">
            
            <div className="text-center w-fit">
              <Resume size={"4rem"} />
              Resume
            </div>
            <div className="text-center w-fit">
              <Github size={"4rem"} />
              Github
            </div>
            <div className="text-center w-fit">
              <Linkedin size={"4rem"} />
              Linkedin
            </div>
            <div className="text-center w-fit">
              <Linkedin size={"4rem"} />
              Twitter
            </div>
          </div>
         
            <ul onClick={()=>switchNav()} className="flex flex-col justify-around  py-[5vh] items-center cursor-pointer text-black">
              <li className=" border-t-2 border-gray-100 w-full text-center py-5  hover:bg-blue-200 text-5xl"><p className=" ">Home</p></li>
              <li onClick={()=> scrollAbout()} className=" border-t-2 border-gray-100 w-full text-center py-5  hover:bg-blue-200 text-5xl"><p className=" ">About me</p></li>
              <li onClick={()=> scrollSkills()} className=" border-t-2 border-gray-100 w-full text-center py-5  hover:bg-blue-200 text-5xl"><p className=" ">Skills</p></li>
              <li onClick={()=> scrollProjects()} className=" border-t-2  border-gray-100 w-full text-center py-5  hover:bg-blue-200 text-5xl"><p className=" ">Projects</p></li>
              <li className=" border-y-2 border-gray-100 w-full text-center py-5  hover:bg-blue-200 text-5xl"><p className=" ">Contact me</p></li>
              
              
            </ul>
          <div className="fixed bottom-0 w-[20vw] mb-4">
            <p className="text-center mb-3">made with:</p>
            <div className="flex justify-around"><FaReact size={"4rem"}/><Next size={"4rem"}/><Tailwind size={"4rem"}/></div>
          </div>
        </div>
        
      </div>

      {/* phone nav */}
      <div
        style={nav ? openNav : mdClosedNav}
        className={`fixed flex top-0 bottom-0 xl:invisible sm:visible`}
      >
      <div onClick={()=>switchNav()} className="  cursor-pointer mt-6 xl:mt-4 mr-[-2px] z-20 px-3  py-2 h-fit w-fit rounded-l-full border-2 border-red-500 border-r-0 bg-red-500 ">
        <motion.div className="h-fit w-fit"
        transition={{rotate:{duration:.6}}}
        animate={{rotate:iconRotate}}
        >
          {icon?<Hamburger   size={"4rem"} />:<Close size={"4rem"} />}
        
        </motion.div>
        </div>
        <div className="bg-[#8DACE1] h-screen min-w-[60vw]  border-l-2 border-black z-0 ">
          <div className="mx-[10%] mt-4 flex flex-wrap justify-between text-black">
            <div className="text-center w-fit">
              <Resume size={"11vw"} />
              Resume
            </div>
            <div className="text-center w-fit">
              <Github size={"11vw"} />
              Github
            </div>
            <div className="text-center w-fit">
              <Linkedin size={"11vw"} />
              Linkedin
            </div>
            <div className="text-center w-fit">
              <Linkedin size={"11vw"} />
              Linkedin
            </div>
          </div>
          <ul onClick={()=>switchNav()} className="flex flex-col justify-around text-black mt-[3vh] items-center cursor-pointer ">
              <li className=" border-t-2 border-gray-100 w-full text-center py-5  hover:bg-blue-200 text-3xl"><p className=" ">Home</p></li>
              <li onClick={()=> scrollAbout()} className=" border-t-2 border-gray-100 w-full text-center py-5  hover:bg-blue-200 text-3xl"><p className=" ">About me</p></li>
              <li onClick={()=> scrollSkills()} className=" border-t-2 border-gray-100 w-full text-center py-5  hover:bg-blue-200 text-3xl"><p className=" ">Skills</p></li>
              <li onClick={()=> scrollProjects()} className=" border-t-2  border-gray-100 w-full text-center py-5  hover:bg-blue-200 text-3xl"><p className=" ">Projects</p></li>
              <li className=" border-y-2  border-gray-100 w-full text-center py-5  hover:bg-blue-200 text-3xl"><p className=" ">Contact me</p></li>
              
              
            </ul>
          <div className="fixed bottom-0 w-[60vw]">
            <p className="text-center mb-3">made with:</p>
            <div className="flex justify-around"><FaReact size={"4rem"}/><Next size={"4rem"}/><Tailwind size={"4rem"}/></div>
          </div>
        </div>
      </div>
    </>
  );
}
