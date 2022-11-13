import React, { useRef, useState } from "react";
import { Nav,Splash,About} from "../components";
export default function Home() {
  return (
    <div className=" overflow-hidden" >
      <Nav />
      <Splash />
      <About />
    </div>
  );
}
