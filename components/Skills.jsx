import React from "react";
import { BsCodeSlash, BsTerminal } from "react-icons/bs";
import { FiDatabase } from "react-icons/fi";
export default function Skills() {
  const FeSkills = [
    "React.js",
    "Next.js",
    "Html",
    "Css",
    "Javascript",
    "Tailwind",
    "Bootstrap",
    "Jquery",
  ];
  const BeSkills = [
    "Node.js",
    "Express",
    "Next-auth",
    "Sequelize",
    "Mongodb",
    "SQL",
    "Firebase",
    "Mongoose",
  ];
  const OtherSkills = [
    "Vscode",
    "Git",
    "Github",
    "Figma",
    "Adobe Illustrator",
    "Linux",
  ];
  return (
    <div id="skills" className="flex lg:px-[10%] px-[5%] pt-14 lg:pt-48">
      <div className=" lg:w-2/3 w-full lg:pr-[10%]">
        <div className="flex items-center">
          <img className="w-1/3 lg:hidden block" src="/skills.svg" alt="" />
          <div className="h-1 w-full bg-black"></div>
          <h1 className=" mx-2 lg:text-4xl text-3xl   ">Skills</h1>
          <div className="h-1 w-full bg-black"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-16">
          <div className="bg-white md:w-[33%] lg:w-[30%] border-2 rounded-2xl h-auto relative pb-8">
            <div className="absolute top-[-1.75rem]  left-0 right-0">
              <div className="border-black border-4 bg-red-500 p-2 rounded-full w-fit mx-auto text-white">
                <BsCodeSlash size={"3rem"} />
              </div>
            </div>
            <h3 className="text-center font-semibold text-black text-3xl mt-10 ">
              Front-end
            </h3>
            <div className="lg:pl-[15%] lg:block flex flex-wrap px-[10%] lg:px-0   ">
              {FeSkills.map((e, i) => {
                return (
                  <div key={i} className="lg:w-full w-1/2 my-3 text-xl">
                    {e}
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" mt-8 md:mt-0 bg-white w-full md:w-[33%] lg:w-[30%] border-2 rounded-2xl h-auto relative pb-8">
            <div className="absolute top-[-1.75rem]  left-0 right-0">
              <div className="border-black border-4 bg-red-500 p-2 rounded-full w-fit mx-auto text-white">
                <FiDatabase size={"3rem"} />
              </div>
            </div>
            <h3 className="text-center font-semibold text-black text-3xl mt-10 ">
              Back-end
            </h3>
            <div className="lg:pl-[15%] lg:block flex flex-wrap px-[10%] lg:px-0   ">
              {BeSkills.map((e, i) => {
                return (
                  <div key={i} className="lg:w-full w-1/2 my-3 text-xl">
                    {e}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-8 md:mt-0 bg-white w-full md:w-[33%] lg:w-[30%] border-2 rounded-2xl h-auto relative pb-8">
            <div className="absolute top-[-1.75rem]  left-0 right-0">
              <div className="border-black border-4 bg-red-500 p-2 rounded-full w-fit mx-auto text-white">
                <BsTerminal size={"3rem"} />
              </div>
            </div>
            <h3 className="text-center font-semibold text-black text-3xl mt-10 ">
              Other
            </h3>
            <div className="lg:pl-[15%] lg:block flex flex-wrap px-[10%] lg:px-0   ">
              {BeSkills.map((e, i) => {
                return (
                  <div key={i} className="lg:w-full w-1/2 my-3 text-xl">
                    {e}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 lg:block hidden">
        <img src="/skills.svg" alt="" />
      </div>
    </div>
  );
}
