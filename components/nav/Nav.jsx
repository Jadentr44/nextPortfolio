import React, { useState } from "react";
import { Hamburger, Resume, Github, Linkedin, Close } from "./icons/";
import { Next } from "../skills/icons/backend";
import Tailwind from "../skills/icons/frontend/TailWind";
import { FaReact } from "../skills/icons/frontend";
import { motion } from "framer-motion";
import Home from "./icons/Home";
import Person from "./icons/Person";
import Skills from "./icons/Skills";
import Projects from "./icons/Projects";
import Email from "./icons/Email";

export default function Nav({ scrollAbout, scrollSkills, scrollProjects,scrollContact,page,setPage }) {
  const [nav, setNav] = useState(false);
  const openNav = { right: 0, transition: "right 600ms ease-in", zIndex: 10 };
  const [iconRotate, setRotate] = useState("0deg");
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
  const [openBoolean, setBoolean] = useState(true);
  function switchNav() {
    if (opening) return;

    if (openBoolean) {
      setOpening(true);
      setBoolean(false);
      setNav(true);
      setRotate("360deg");
      setTimeout(() => {
        setOpening(false);

        setIcon(false);
      }, 490);
      console.log("true, opening");
    } else {
      setOpening(true);
      setBoolean(true);
      setNav(false);
      setRotate("0deg");
      setTimeout(() => {
        setOpening(false);
        setIcon(true);
      }, 490);
      console.log("false, closed");
    }
  }
  return (
    <>
      {/* computer nav */}
      <div
        style={{
          boxShadow: "inset 0 0 15px  black",
          zIndex: 0,
        }}
        className=" z-10 xl:visible sm:invisible top-0 fixed right-0 w-[15vw] bg-red-500 h-screen"
      >
        <ul className="flex flex-col items-center justify-center h-full text-white">
          <li
            className="my-1 cursor-pointer"
            onClick={() => {
              setPage(0);
            }}
          >
            <motion.div
              className="mx-auto"
              animate={{ width: page == 0 ? "6rem" : "3rem" }}
            >
              <Home />
            </motion.div>
            <motion.p
              animate={{ fontSize: page == 0 ? "2.25rem" : "0rem" }}
              className="text-center "
            >
              Home
            </motion.p>
          </li>

          <li
            className="my-1 cursor-pointer"
            onClick={() => {
              setPage(1);
              scrollAbout();
            }}
          >
            <motion.div
              className="mx-auto"
              animate={{ width: page == 1 ? "6rem" : "3rem" }}
            >
              <Person />
            </motion.div>
            <motion.p
              animate={{ fontSize: page == 1 ? "2.25rem" : "0rem" }}
              className="text-center "
            >
              About Me
            </motion.p>
          </li>
          <li
            className="my-1 cursor-pointer"
            onClick={() => {
              setPage(2);
              scrollSkills();
            }}
          >
            <motion.div
              className="mx-auto"
              animate={{ width: page == 2 ? "6rem" : "3rem" }}
            >
              <Skills />
            </motion.div>
            <motion.p animate={{fontSize:page==2?"2.25rem":"0rem"}} className="text-center ">Skills</motion.p>
          </li>
          <li
            className="my-1 cursor-pointer"
            onClick={() => {
              setPage(3);
              scrollProjects();
            }}
          >
            <motion.div
              className="mx-auto"
              animate={{ width: page == 3 ? "6rem" : "3rem" }}
            >
              <Projects />
            </motion.div>
            <motion.p animate={{fontSize:page==3?"2.25rem":"0rem"}} className="text-center ">Projects</motion.p>
          </li>
          <li
            className="my-1 cursor-pointer"
            onClick={() => {
              setPage(4);
              scrollContact();
            }}
          >
            <motion.div
              className="mx-auto"
              animate={{ width: page == 4 ? "6rem" : "3rem" }}
            >
              <Email />
            </motion.div>
            <motion.p animate={{fontSize:page==4?"2.25rem":"0rem"}} className="text-center ">Contact Me</motion.p>
          </li>
        </ul>
      </div>
      {/* phone nav */}
      <div
        style={nav ? openNav : mdClosedNav}
        className={`fixed flex top-0 bottom-0 xl:invisible sm:visible`}
      >
        <div
          onClick={() => switchNav()}
          className="  cursor-pointer mt-6 xl:mt-4 mr-[-2px] z-20 px-3  py-2 h-fit w-fit rounded-l-full border-2 border-red-500 border-r-0 bg-red-500 "
        >
          <motion.div
            className="h-fit w-fit"
            transition={{ rotate: { duration: 0.6 } }}
            animate={{ rotate: iconRotate }}
          >
            {icon ? <Hamburger size={"4rem"} /> : <Close size={"4rem"} />}
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
          <ul
            onClick={() => switchNav()}
            className="flex flex-col justify-around text-black mt-[3vh] items-center cursor-pointer "
          >
            <li className=" border-t-2 border-gray-100 w-full text-center py-5  hover:bg-blue-200 text-3xl">
              <p className=" ">Home</p>
            </li>
            <li
              onClick={() => scrollAbout()}
              className=" border-t-2 border-gray-100 w-full text-center py-5  hover:bg-blue-200 text-3xl"
            >
              <p className=" ">About me</p>
            </li>
            <li
              onClick={() => scrollSkills()}
              className=" border-t-2 border-gray-100 w-full text-center py-5  hover:bg-blue-200 text-3xl"
            >
              <p className=" ">Skills</p>
            </li>
            <li
              onClick={() => scrollProjects()}
              className=" border-t-2  border-gray-100 w-full text-center py-5  hover:bg-blue-200 text-3xl"
            >
              <p className=" ">Projects</p>
            </li>
            <li className=" border-y-2  border-gray-100 w-full text-center py-5  hover:bg-blue-200 text-3xl">
              <p className=" ">Contact me</p>
            </li>
          </ul>
          <div className="fixed bottom-0 w-[60vw]">
            <p className="text-center mb-3">made with:</p>
            <div className="flex justify-around">
              <FaReact size={"4rem"} />
              <Next size={"4rem"} />
              <Tailwind size={"4rem"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
