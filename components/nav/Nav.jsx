import React, { useState } from "react";
import { motion } from "framer-motion";
import Home from "./icons/Home";
import Person from "./icons/Person";
import Skills from "./icons/Skills";
import Projects from "./icons/Projects";
import Email from "./icons/Email";

export default function Nav({
  scrollAbout,
  scrollSkills,
  scrollProjects,
  scrollContact,
  page,
  setPage,
  scrollHome,
}) {
  return (
    <>
      {/* computer nav */}
      <div
        style={{
          boxShadow: "inset 0 0 15px  black",
          zIndex: 0,
        }}
        className="  hidden lg:block top-0 fixed right-0 w-[15vw] bg-red-500 h-screen "
      >
        <ul className="flex flex-col items-center justify-center h-full text-white">
          <li
            className="my-1 cursor-pointer"
            onClick={() => {
              scrollHome();
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
              scrollSkills();
            }}
          >
            <motion.div
              className="mx-auto"
              animate={{ width: page == 2 ? "6rem" : "3rem" }}
            >
              <Skills />
            </motion.div>
            <motion.p
              animate={{ fontSize: page == 2 ? "2.25rem" : "0rem" }}
              className="text-center "
            >
              Skills
            </motion.p>
          </li>
          <li
            className="my-1 cursor-pointer"
            onClick={() => {
              scrollProjects();
            }}
          >
            <motion.div
              className="mx-auto"
              animate={{ width: page == 3 ? "6rem" : "3rem" }}
            >
              <Projects />
            </motion.div>
            <motion.p
              animate={{ fontSize: page == 3 ? "2.25rem" : "0rem" }}
              className="text-center "
            >
              Projects
            </motion.p>
          </li>
          <li
            className="my-1 cursor-pointer"
            onClick={() => {
              scrollContact();
            }}
          >
            <motion.div
              className="mx-auto"
              animate={{ width: page == 4 ? "6rem" : "3rem" }}
            >
              <Email />
            </motion.div>
            <motion.p
              animate={{ fontSize: page == 4 ? "2.25rem" : "0rem" }}
              className="text-center "
            >
              Contact Me
            </motion.p>
          </li>
        </ul>
      </div>
      {/* phone nav */}
      <div
        style={{ zIndex: 100 }}
        className=" lg:hidden fixed bottom-5 left-8 right-8 border-2 rounded-full p-2 bg-white flex justify-between "
      >
        <div
          onClick={() => {
            scrollHome();
          }}
          style={{ background: page == 0 ? "#EF4444" : "white" }}
          className="w-[15%] border rounded-full p-2"
        >
          <Home />
        </div>
        <div
          onClick={() => {
            scrollAbout();
          }}
          style={{ background: page == 1 ? "#EF4444" : "white" }}
          className="w-[15%] border rounded-full p-2"
        >
          <Person />
        </div>
        <div
          onClick={() => {
            scrollSkills();
          }}
          style={{ background: page == 2 ? "#EF4444" : "white" }}
          className="w-[15%] border rounded-full p-2"
        >
          <Skills />
        </div>
        <div
          onClick={() => {
            scrollProjects();
          }}
          style={{ background: page == 3 ? "#EF4444" : "white" }}
          className="w-[15%] border rounded-full p-2"
        >
          <Projects />
        </div>
        {console.log("if you are seeing this you must REALLY like this...or something broke")}
     {console.log('https://www.youtube.com/watch?v=a3Z7zEc7AXQ')}
     {console.log("since you are here you might as well check out this video")}
        <div
          onClick={() => {
            scrollContact();
          }}
          style={{ background: page == 4 ? "#EF4444" : "white" }}
          className="w-[15%] border rounded-full p-2"
        >
          <Email />
        </div>
      </div>
    </>
  );
}
