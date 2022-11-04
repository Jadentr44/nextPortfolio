import React, { useState } from "react";
import {
  Html,
  Css,
  Javascript,
  Bootstrap,
  SJquery,
  TailWind,
  FaReact,
} from "./icons/frontend";
import Bar from "./Bar";
export default function FEkey({ size }) {
  return (
    <div className="flex flex-wrap justify-between xl:justify-around  w-full xl:w-[40vw] max-h-[30vw] mx-auto">
      <div className="flex  mx-3 my-2">
        <Html size={size} />
        <Bar name={"HTML"} color={"#f97316"} />
      </div>
      <div className="flex  mx-3 my-2">
        <Css size={size} />
        <Bar name={"CSS"} color={"#0ea5e9"} />
      </div>
      <div className="flex  mx-3 my-2">
        <Javascript size={size} />
        <Bar name={"Javascript"} color={"yellow"} />
      </div>
      <div className="flex  mx-3 my-2">
        <TailWind size={size} />
        <Bar name={"Tailwind"} color={"lightblue"} />
      </div>

      <div className="flex  mx-3 my-2">
        <SJquery size={size} />
        <Bar name={"Jquery"} color={"blue"} />
      </div>
      <div className="flex  mx-3 my-2">
        <Bootstrap size={size} />
        <Bar name={"Bootstrap"} color={"purple"} />
      </div>
      <div className="flex  mx-3 my-2">
        <FaReact size={size} />
        <Bar name={"React"} color={"#0e7490"} />
      </div>
    </div>
  );
}
