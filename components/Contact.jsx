import React from "react";
import { HiOutlineMail } from "react-icons/hi";
export default function Contact() {
  return (
    <div id="contact" className="pt-40 pb-24 px-[10%] flex">
      <div className="w-2/3 pr-[10%]">
        <div className="flex items-center">
          <div className="h-1 w-full bg-black"></div>
          <h1 className=" mx-2 text-5xl w-  ">
            Contact<span className="mx-2"></span>Me
          </h1>
          <div className="h-1 w-full bg-black"></div>
        </div>
        <h1 className="text-center text-3xl mt-12 w-[80%] mx-auto">Feel free to reach out with any question or business inquiries</h1>
        <div className="flex justify-around flex-wrap  mt-12">
          <div className="h-44 mt-8 border-black bg-white rounded-xl w-[40%] border-2 relative">
            <div className=" absolute border-4 left-[-2.5rem] bg-red-500 text-white top-0 bottom-0 h-fit my-auto border-black p-2 w-[5rem] rounded-full">
              <HiOutlineMail size={"100%"} />
            </div>
            <div className="flex flex-col justify-center h-full">
            <h3 className=" text-center text-3xl font-semibold">Email:</h3>
            <p className="text-center text-red-500  w-fit mx-auto border-red-500 text-xl hover:text-red-700">
              <a rel="noreferrer" target={"_blank"} className="" href="mailto: rodriguez@jadent.dev">
                rodriguez@jadent.dev
              </a>
            </p>
            </div>
            
          </div>
          <div className="h-44 mt-8 border-black bg-white rounded-xl w-[40%] border-2 relative">
            <div className=" absolute border-4 left-[-2.5rem] bg-red-500 text-white top-0 bottom-0 h-fit my-auto border-black p-2 w-[5rem] rounded-full">
              <HiOutlineMail size={"100%"} />
            </div>
            <div className="flex flex-col justify-center h-full">
            <h3 className=" text-center text-3xl font-semibold">LinkedIn:</h3>
            <p className="text-center text-red-500  w-fit mx-auto border-red-500 text-xl hover:text-red-700">
              <a rel="noreferrer" target={"_blank"} href="https://www.linkedin.com/in/jaden-rodriguez-59a000242/">
                Jaden rodriguez
              </a>
            </p>
            </div>
            
          </div>
          <div className="h-44 mt-8 border-black bg-white rounded-xl w-[40%] border-2 relative">
            <div className=" absolute border-4 left-[-2.5rem] bg-red-500 text-white top-0 bottom-0 h-fit my-auto border-black p-2 w-[5rem] rounded-full">
              <HiOutlineMail size={"100%"} />
            </div>
            <div className="flex flex-col justify-center h-full">
            <h3 className=" text-center text-3xl font-semibold">Github</h3>
            <p className="text-center text-red-500  w-fit mx-auto border-red-500 text-xl hover:text-red-700">
              <a rel="noreferrer" target={"_blank"} className="" href="https://github.com/Jadentr44">
                Jadentr44
              </a>
            </p>
            </div>
            
          </div>
          <div className="h-44 mt-8 border-black bg-white rounded-xl w-[40%] border-2 relative">
            <div className=" absolute border-4 left-[-2.5rem] bg-red-500 text-white top-0 bottom-0 h-fit my-auto border-black p-2 w-[5rem] rounded-full">
              <HiOutlineMail size={"100%"} />
            </div>
            <div className="flex flex-col justify-center h-full">
            <h3 className=" text-center text-3xl font-semibold">Twitter</h3>
            <p className="text-center text-red-500  w-fit mx-auto border-red-500 text-xl hover:text-red-700">
              <a rel="noreferrer" target={"_blank"} className="" href="https://twitter.com/Jadent_dev">
                Jadent_dev
              </a>
            </p>
            </div>
            
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <img src="/message.svg" alt="" />
      </div>
    </div>
  );
}
