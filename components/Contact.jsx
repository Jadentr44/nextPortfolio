import React from "react";
import Email from "./nav/icons/Email";
import Github from "./nav/icons/Github";
import { Linkedin } from "./nav/icons";
export default function Contact() {
  return (
    <div className=" min-h-[50vh] px-[10%] mr-[15%]">
      <h2 className="text-center text-7xl">Contact Me</h2>
      <h3 className="text-center text-xl mt-5 mb-3">
        If you made it this far, you must have seen something you like <br />
        feel free to reach out with any questions
      </h3>
      <div className="flex justify-between">
        <div className="h-[15vw] w-[15vw] text-white  rounded-xl bg-red-500 text-center flex justify-center items-center">
          <div className="">
            <div className="w-[60%] mx-auto text-white">
              <Email />
            </div>
            <h3 className="text-center">Email:</h3>
            <h3 className="mb-4">Rodriguez@jadent.dev</h3>
            <a
              className="border-2  rounded-full py-1 px-2 bg-white text-red-500 hover:bg-slate-200 "
              href="mailto: Rodriugez@jadent.dev"
            >
              send me a message
            </a>
          </div>
        </div>
        <div className="h-[15vw] w-[15vw] text-white  rounded-xl bg-red-500 text-center flex justify-center items-center">
          <div className="">
            <div className="w-[60%] mx-auto text-white">
              <Github />
            </div>
            <h3 className="text-center">Github:</h3>
            <h3 className="mb-4">Jadentr44</h3>
            <a
              className="border-2  rounded-full py-1 px-2 bg-white text-red-500 hover:bg-slate-200 "
              target="_blank"
              href="https://github.com/Jadentr44"
            >
              view my Github
            </a>
          </div>
        </div>
        <div className="h-[15vw] w-[15vw] text-white  rounded-xl bg-red-500 text-center flex justify-center items-center">
          <div className="">
            <div className="w-[60%] mx-auto text-white">
              <Linkedin />
            </div>
            <h3 className="text-center">Linkedin:</h3>
            <h3 className="mb-4">Jaden Rodriguez</h3>
            <a
            target="_blank"
              className="border-2  rounded-full py-1 px-2 bg-white text-red-500 hover:bg-slate-200 "
              href="https://www.linkedin.com/in/jaden-rodriguez-59a000242/"
            >
              view my Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
