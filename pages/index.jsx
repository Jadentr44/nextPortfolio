import React, { useRef, useState } from "react";
import { Nav,Splash,About,Skills} from "../components";
export default function Home() {
  return (
    
    <div className="overflow-hidden bg-gray-100" >
      

      <Nav />
      <Splash />
      <About />
      <Skills />
      <div className="h-screen"></div>
      
    </div>
  );
}
