import React,{useState} from "react";
import { motion, useCycle } from "framer-motion";
import NavLi from "./NavLi";
import { FadeIn } from "react-slide-fade-in";
import { Link } from "react-scroll";
import { AiFillHome } from "react-icons/ai";
import {BsPersonFill} from 'react-icons/bs'
import {FaTools,FaBriefcase} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'

export default function Nav() {
  const [width, toggleWidth] = useCycle("0%", "100%");
  const [current,setCurrent] = useState("0%")
  return (
    <>
      <nav className="px-[10%] fixed top-0 left-0 right-0 backdrop-blur-sm z-50 md:block hidden">
        <FadeIn
          from="top"
          positionOffset={0}
          triggerOffset={0}
          delayInMilliseconds={6500}
        >
          <div className="flex justify-between items-center">
            <div className="flex  items-center relative pb-2 my-2">
              <img className="h-[3rem] mr-2" src="/logo.svg" alt="" />
              <div
                onMouseEnter={toggleWidth}
                onMouseLeave={toggleWidth}
                className="relative py-3"
              >
                <h1 className="cursor-pointer z-10 text-3xl font-bold ">
                  Jaden Rodriguez
                </h1>
                <motion.div
                  transition={{ seconds: 2 }}
                  animate={{ width: width }}
                  className="h-2 absolute bottom-0 left-0 right-0 w-0 bg-red-500 rounded-full mx-auto"
                ></motion.div>
              </div>
            </div>
            <div>
              <ul className="flex text-xl">
                <NavLi offset={-100} name={"About"} location={"about"} />
                <NavLi offset={-100} name={"Skills"} location={"skills"} />
                <NavLi offset={-100} name={"Project"} location={"projects"} />
                <NavLi offset={-100} name={"Contact"} location={"contact"} />
              </ul>
            </div>
          </div>
        </FadeIn>
      </nav>
      <nav className="md:hidden block fixed left-0 right-0 bottom-0 h-fit bg-white z-50 opacity-80">
        <motion.div  animate={{marginLeft:current}} className="h-1 w-1/5 bg-red-500"></motion.div>
        <ul className="flex h-full w-full justify-around items-center ">
          <Link
          onSetActive={()=>setCurrent("0%")}
            offset={-50}
            className="  w-full"
            smooth
            spy
            to={"home"}
          >
            <div className="w-full flex items-center flex-col">
              <AiFillHome size={"50%"} />
              Home
            </div>
          </Link>

          <Link
            onSetActive={()=>setCurrent("20%")}
            offset={-50}
            className="  w-full"
            smooth
            spy
            to={"about"}
          >
            <div className="w-full flex items-center flex-col">
              <BsPersonFill size={"50%"} />
              About
            </div>
          </Link>
          <Link
            onSetActive={()=>setCurrent("40%")}
            offset={-50}
            className="  w-full"
            smooth
            spy
            to={"skills"}
          >
            <div className="w-full flex items-center flex-col">
              <FaTools size={"50%"} />
              Skills
            </div>
          </Link>
          <Link
            onSetActive={()=>setCurrent("60%")}
            offset={-50}
            className="  w-full"
            smooth
            spy
            to={"projects"}
          >
            <div className="w-full flex items-center flex-col">
              <FaBriefcase size={"50%"} />
              Projects
            </div>
          </Link>
          <Link
            onSetActive={()=>setCurrent("80%")}
            offset={-50}
            className="  w-full"
            smooth
            spy
            to={"contact"}
          >
            <div className="w-full flex items-center flex-col">
              <GrMail size={"50%"} />
              Contact
            </div>
          </Link>
        </ul>
      </nav>
    </>
  );
}
