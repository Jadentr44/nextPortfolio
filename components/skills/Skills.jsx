import React, { useState, useRef } from "react";
import IsVisible from "react-is-visible";
import Chart from "./Chart";
import BsArrowReturnLeft from "./icons/Arrow";
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
    if (skills === "Other") return <div className="w-[25vw]">Other</div>;
    return (
      <div className=" h-[25vw] w-[25vw] flex flex-col justify-center items-center">
        Click a Skill 
        <BsArrowReturnLeft />
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
    <div className="grid h-screen  relative mr-[15%] ">
      <div className=" px-[10%]">
    <h2 className="text-center text-7xl mt-14">Skills</h2>
    <div className="flex justify-around mt-12">

    <Chart setSkills={setSkills} />
    {renderSkillsPie()}
    </div>
    {renderSkillsKey()}
      </div>
      
    </div>
  );
}
