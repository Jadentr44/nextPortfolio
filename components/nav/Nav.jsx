import React, { useState } from "react";
import { Hamburger, Resume,Github,Linkedin } from "./icons/";
export default function Nav() {
  const [nav, setNav] = useState(false);
  const openNav = { right: 0, transition: "right 600ms ease-in", zIndex: 10 };
  const smClosedNav = {
    right: "-20vw",
    transition: "right 600ms ease-in",
    zIndex: 10,
  };
  const mdClosedNav = {
    right: "-60vw",
    transition: "right 600ms ease-in",
    zIndex: 10,
  };
  return (
    <>
    {/* computer nav */}
    <div
      style={nav ? openNav : smClosedNav}
      className={`fixed flex top-0 bottom-0 invisible md:visible `}
    >
      
      <Hamburger setNav={setNav} nav={nav} size={"50"} />
      <div className="bg-red-100 h-screen min-w-[20vw] border-l-2 border-black z-0 ">
      <div className="mx-[10%] mt-4 flex flex-wrap justify-between">
          <div className="text-center w-fit">
            <Resume size={"3vw"} />
            Resume
          </div>
          <div className="text-center w-fit">
            <Github size={"3vw"} />
            Github
          </div>
          <div className="text-center w-fit">
            <Linkedin size={"3vw"} />
            Linkedin
          </div>
          <div className="text-center w-fit">
            <Linkedin size={"3vw"} />
            Twitter
          </div>
        </div>
      </div>
    </div>

    {/* phone nav */}
    <div
      style={nav ? openNav : mdClosedNav}
      className={`fixed flex top-0 bottom-0 md:invisible sm:visible`}
    >
      
      <Hamburger setNav={setNav} nav={nav} size={"35"} />
      <div className="bg-red-600 h-screen min-w-[60vw] border-l-2 border-black z-0 ">
        <div className="mx-[10%] mt-4 flex flex-wrap justify-between">
          <div className="text-center w-fit">
            <Resume size={"11vw"} />
            Resume
          </div>
          <div className="text-center w-fit">
            <Github size={"11vw"} />
            Github
          </div>
          <div className="text-center w-fit">
            <Linkedin size={"11vw"} />
            Linkedin
          </div>
          <div className="text-center w-fit">
            <Linkedin size={"11vw"} />
            Linkedin
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
