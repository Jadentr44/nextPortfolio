import React, { useState } from "react";
import { Hamburger, Resume, Github, Linkedin } from "./icons/";
import { Next } from "../skills/icons/backend"; 
import Tailwind from "../skills/icons/frontend/TailWind";
import { FaReact } from "../skills/icons/frontend";
export default function Nav() {
  const [nav, setNav] = useState(false);
  const openNav = { right: 0, transition: "right 600ms ease-in", zIndex: 10 };
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
  return (
    <>
      {/* computer nav */}
      <div
        style={nav ? openNav : smClosedNav}
        className={`fixed flex top-0 h-screen invisible xl:visible `}
      >
        <Hamburger setNav={setNav} nav={nav} size={"4rem"} />
        <div className="bg-red-500 h-screen min-w-[20vw] border-l-2 border-black  flex flex-col  ">
          <div className=" px-[10%] mt-4 flex flex-wrap justify-between">
            <div className="text-center w-fit">
              <Resume size={"3vw"} />
              Resume
            </div>
            <div className="text-center w-fit">
              <Github size={"3vw"} />
              Github
            </div>
            <div className="text-center w-fit">
              <Linkedin size={"3vw"} />
              Linkedin
            </div>
            <div className="text-center w-fit">
              <Linkedin size={"3vw"} />
              Twitter
            </div>
          </div>
         
            <ul className="flex flex-col justify-around  py-[5vh] items-center cursor-pointer">
              <li className=" border-t-[1px] border-opacity-50 border-gray-100 w-full text-center py-5  hover:bg-[#ed2b2b] text-5xl"><p className=" ">Home</p></li>
              <li className=" border-t-[1px] border-opacity-50 border-gray-100 w-full text-center py-5  hover:bg-[#ed2b2b] text-5xl"><p className=" ">About me</p></li>
              <li className=" border-t-[1px] border-opacity-50 border-gray-100 w-full text-center py-5  hover:bg-[#ed2b2b] text-5xl"><p className=" ">Skills</p></li>
              <li className=" border-y-[1px] border-opacity-50 border-gray-100 w-full text-center py-5  hover:bg-[#ed2b2b] text-5xl"><p className=" ">Projects</p></li>
              <li className=" border-y-[1px] border-opacity-50 border-gray-100 w-full text-center py-5  hover:bg-[#ed2b2b] text-5xl"><p className=" ">Contact me</p></li>
              
              
            </ul>
          <div className="fixed bottom-0 w-[20vw]">
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
        <Hamburger setNav={setNav} nav={nav} size={"3rem"} />
        <div className="bg-red-500 h-screen min-w-[60vw] border-l-2 border-black z-0 ">
          <div className="mx-[10%] mt-4 flex flex-wrap justify-between">
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
        </div>
      </div>
    </>
  );
}
