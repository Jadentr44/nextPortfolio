import React from "react";
import Email from "./nav/icons/Email";
import Github from "./nav/icons/Github";
import { Linkedin } from "./nav/icons";
export default function Contact() {
  return (
    <div className="h-screen relative">
      <div className="  px-[10%] ">
        <h2 className="text-center text-7xl ">Contact Me</h2>
        <h3 className="text-center text-xl mt-5 mb-3">
          If you made it this far, you must have seen something you like <br />
          feel free to reach out with any questions
        </h3>
        <div className="flex lg:flex-row flex-col   justify-between lg:mt-20">
          <div className="lg:h-[15vw] lg:w-[15vw] my-4 text-white  rounded-xl bg-red-500 text-center flex justify-center items-center">
            <div className="flex lg:block  w-full  items-center py-4 lg:py-0">
              <div className="min-w-[20%] ml-8  lg:w-[60%] lg:mx-auto text-white">
                <Email />
              </div>
              <div className="w-full">
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
          </div>
          <div className="lg:h-[15vw] lg:w-[15vw] my-4 text-white  rounded-xl bg-red-500 text-center flex justify-center items-center">
            <div className="flex lg:block  w-full  items-center py-4 lg:py-0">
              <div className="min-w-[20%] ml-8  lg:w-[60%] lg:mx-auto text-white">
                <Github />
              </div>
              <div className="w-full">
                <h3 className="text-center">Github:</h3>
                <h3 className="mb-4">Jadentr44</h3>
                <a
                  className="border-2  rounded-full py-1 px-2 bg-white text-red-500 hover:bg-slate-200 "
                  href="https://github.com/Jadentr44"
                  rel="noreferrer"
                >
                  View my Github
                </a>
              </div>
            </div>
          </div>
          <div className="lg:h-[15vw] lg:w-[15vw] my-4 text-white  rounded-xl bg-red-500 text-center flex justify-center items-center">
            <div className="flex lg:block  w-full  items-center py-4 lg:py-0">
              <div className="min-w-[20%] ml-8  lg:w-[60%] lg:mx-auto text-white">
                <Linkedin />
              </div>
              <div className="w-full">
                <h3 className="text-center">Linkedin:</h3>
                <h3 className="mb-4">Jaden Rodriguez</h3>
                <a
                  className="border-2  rounded-full py-1 px-2 bg-white text-red-500 hover:bg-slate-200 "
                  href="https://www.linkedin.com/in/jaden-rodriguez-59a000242/"
                  rel="noreferrer"
                >
                  View my Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-0 text-center left-0 right-0 text-white bg-slate-800">© 2022 Jaden Rodriguez</footer>
    </div>
  );
}
