import React from 'react'
import { Git, Insomnia, Linux,VScode,Github } from './icons/other';


import Bar from "./Bar";
export default function Otherkey({size}) {
  return (
    <div className="flex flex-wrap justify-between lg:justify-around  w-full lg:w-[40vw] max-h-[30vw] text-black mx-auto">
      <div className="flex  mx-3 my-2">
        <Git size={size} />
        <Bar name={"Git"} color={"green"} />
      </div>
      <div className="flex  mx-3 my-2">
        <VScode size={size} />
        <Bar name={"VScode"} color={"blue"} />
      </div>
      <div className="flex  mx-3 my-2">
        <Insomnia size={size} />
        <Bar name={"insomnia"} color={"purple"} />
      </div>
      <div className="flex  mx-3 my-2">
        <Linux size={size} />
        <Bar name={"Linux"} color={"yellow"} />
      </div>
      <div className="flex  mx-3 my-2">
        <Github size={size} />
        <Bar name={"Github"} color={"darkgrey"} />
      </div>
    </div>
  );
}
