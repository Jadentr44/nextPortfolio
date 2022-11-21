import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
export default function Contact() {
  return (
    <div id="contact" className="lg:pt-40 pt-14 pb-24 lg:px-[10%] px-[5%] flex">
      <div className="md:w-2/3 w-full lg:pr-[10%]">
        <div className="flex items-center">
          <div className="h-1 w-full bg-black"></div>
          <h1 className=" mx-2 lg:text-5xl text-3xl w-  ">
            Contact<span className="mx-2"></span>Me
          </h1>
          <div className="h-1 w-full bg-black"></div>
          
        </div>
        <h1 className="text-center lg:text-3xl text-xl lg:mt-12 mt-6 w-[80%] mx-auto">
          Feel free to reach out with any question or business inquiries
        </h1>
        <div className="flex justify-around flex-wrap  lg:mt-12 mt-8">
          <div className="lg:h-44  h-36 mt-8 border-black bg-white rounded-xl lg:w-[45%] w-[48%] sm:w-[45%] border-2 relative">
            <div className=" absolute border-4 right-0  mx-auto left-0 bg-red-500 text-white  top-[-1.5rem] lg:top-[-2.5rem]  h-fit my-auto border-black p-2 lg:w-[5rem] w-[4rem] rounded-full">
              <HiOutlineMail size={"100%"} />
            </div>
            <div className="flex flex-col justify-center h-full">
              <h3 className=" text-center text-3xl font-semibold">Email:</h3>
              <p className=" text-red-500  w-fit mx-auto border-red-500  md:text-lg xl:text-xl xs:text-xs  hover:text-red-700">
                <a
                className="flex flex-wrap justify-center"
                  rel="noreferrer"
                  target={"_blank"}
                  href="mailto: rodriguez@jadent.dev"
                >
                  <div>
                  rodriguez@
                  </div>
                  <div>

                   jadent.dev
                  </div>
                </a>
              </p>
            </div>
          </div>
          <div className="lg:h-44 h-36  mt-8 border-black bg-white rounded-xl w-[45%] border-2 relative">
            <div className=" absolute border-4 right-0  mx-auto left-0 bg-red-500 text-white  top-[-1.5rem] lg:top-[-2.5rem]  h-fit my-auto border-black p-2 lg:w-[5rem] w-[4rem] rounded-full">
              <  AiOutlineGithub size={"100%"} />
            </div>
            <div className="flex flex-col justify-center h-full">
              <h3 className=" text-center text-3xl font-semibold">LinkedIn:</h3>
              <p className="text-center text-red-500  w-fit mx-auto border-red-500  md:text-lg xl:text-xl xs:text-xs  hover:text-red-700">
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://www.linkedin.com/in/jaden-rodriguez-59a000242/"
                >
                  Jaden rodriguez
                </a>
              </p>
            </div>
          </div>
          <div className="lg:h-44 h-36 mt-8 border-black bg-white rounded-xl w-[45%] border-2 relative">
            <div className=" absolute border-4 right-0  mx-auto left-0 bg-red-500 text-white  top-[-1.5rem] lg:top-[-2.5rem]  h-fit my-auto border-black p-2 lg:w-[5rem] w-[4rem] rounded-full">
              <AiOutlineLinkedin size={"100%"} />
            </div>
            <div className="flex flex-col justify-center h-full">
              <h3 className=" text-center text-3xl font-semibold">Github</h3>
              <p className="text-center text-red-500  w-fit mx-auto border-red-500  md:text-lg xl:text-xl xs:text-xs  hover:text-red-700">
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  className=""
                  href="https://github.com/Jadentr44"
                >
                  Jadentr44
                </a>
              </p>
            </div>
          </div>
          <div className="lg:h-44 h-36 mt-8 border-black bg-white rounded-xl w-[45%] border-2 relative">
            <div className=" absolute border-4 right-0  mx-auto left-0 bg-red-500 text-white  top-[-1.5rem] lg:top-[-2.5rem]  h-fit my-auto border-black p-2 lg:w-[5rem] w-[4rem] rounded-full">
              <AiOutlineTwitter size={"100%"} />
            </div>
            <div className="flex flex-col justify-center h-full">
              <h3 className=" text-center text-3xl font-semibold">Twitter</h3>
              <p className="text-center text-red-500  w-fit mx-auto border-red-500  md:text-lg xl:text-xl xs:text-xs  hover:text-red-700">
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://twitter.com/Jadent_dev"
                >
                  Jadent_dev
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 md:block hidden">
        <img src="https://cdn-icons-png.flaticon.com/512/123/123884.png" alt="" />
      </div>
    </div>
  );
}
