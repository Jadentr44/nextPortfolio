import React, { useState, useRef } from "react";
import IsVisible from "react-is-visible";
import Chart from "./Chart";
import SkillChart from "./SkillChart";
import FEchart from "./FEchart";
import FEkey from "./FEkey";
import BEchart from "./BEchart";
import BEkey from "./BEkey";
import { motion } from "framer-motion";
export default function Skill() {
  const [skills, setSkills] = useState(undefined);
  const [showCart, setChart] = useState(false);

  function renderSkillsPie(width) {
    if (skills === "FrontEnd") return <FEchart />;
    if (skills === "BackEnd") return <BEchart />;
    if (skills === "Other") return <div className="w-[40vw]">Other</div>;
    return (
      <div className="w-[40vw] h-[40vw] flex justify-center items-center">
        Choose a Skill
      </div>
    );
  }

  function renderSkillsKey() {
    if (skills === "FrontEnd") return <FEkey size={"45"} />;
    if (skills === "BackEnd") return <BEkey size={"45"} />;
    if (skills === "Other") return <FEkey size={"45"} />;
    return <div className=" h-[30vw] xl:h-0"></div>;
  }
  return (
    <div className="">

      <div className="w-1/4  text-6xl text-center mx-auto relative">
        <motion.div
        transition={{left:{duration:.8}}}
        animate={{width:showCart?"0%":"100%"}}
        className="bg-white h-full absolute  right-0 top-0">

        </motion.div>
        <div className="w-full bg-red-500 text-white py-2"><h2>skills</h2></div>
        
      </div>


      

      <div className="mx-[10%] flex flex-col xl:flex-row justify-around xl:justify-around min-h-screen items-center ">
        {/* 1 */}
        <div className="w-fit">
          {/* large screen */}
          <div className="hidden xl:block">
            {!showCart
            ?<div className="w-[25vw] h-[30vw]"></div>
          :
            <Chart width={25} setSkills={setSkills} />}
          </div>

          {/* small screen */}
          <div className="flex justify-around w-full  xl:hidden">
            <Chart width={40} setSkills={setSkills} />
            {renderSkillsPie(40)}
          </div>

          <IsVisible once>
            {(isVisible) => <h1>{isVisible ? setChart(true) : ``}</h1>}
          </IsVisible>
        </div>

        {/* 2 */}
        <div className="w-full xl:w-[40vw] max-h-[75vh]">
          <div className="hidden xl:flex ">{renderSkillsPie(40)}</div>
          <div className="h-12"></div>
          {renderSkillsKey()}
        </div>
      </div>
    </div>
  );
}
