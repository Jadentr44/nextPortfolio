import React, { useRef, useState } from "react";
import { Nav,Splash,About} from "../components";
import { Scrollbars } from 'react-custom-scrollbars-2';
export default function Home() {
  return (
    
    <div className="overflow-hidden" >
      <div className=" ">

      <Nav />
      <Splash />
      <About />
      <div className="h-screen"></div>
      </div>
    </div>
  );
}
