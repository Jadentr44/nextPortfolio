import React, { useRef, useState } from "react";
import { Nav,Splash,About,Skills,Projects} from "../components";
export default function Home() {
  return (
    
    <div className="overflow-hidden bg-gray-100" >
      

      <Nav />
      <Splash />
      <About />
      <Skills />
      <Projects />
      <div className="h-screen"></div>
      
    </div>
  );
}
