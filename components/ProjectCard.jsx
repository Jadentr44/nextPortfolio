import React from "react";
import { motion, useCycle } from "framer-motion";
import { AiFillGithub, AiOutlineDesktop } from "react-icons/ai";
export default function ProjectCard({
  name,
  github,
  live,
  tech,
  desc,
  img,
  index,
}) {
  const [showing, toggleShowing] = useCycle(true, false);
  return (
    <div
      style={{ flexDirection: index % 2 == 0 ? "row" : "row-reverse" }}
      className="lg:w-[80%] md:flex   mx-auto py-4 border-b-4"
    >
      <div className="md:w-1/2 w-[80%] mx-auto">
        <img src={img} alt="" />
      </div>
      <div className="md:w-1/2">
        <div className="flex justify-center items-center">
          <a rel="noreferrer" target={"_blank"} href={github}>
            <AiFillGithub className="w-10 hover:text-red-500" size={"100%"} />
          </a>
          <h2 className="text-center text-xl xl:text-3xl mx-4">{name}</h2>
          <a rel="noreferrer" target={"_blank"} href={live}>
            <AiOutlineDesktop
              className="w-10 hover:text-red-500"
              size={"100%"}
            />
          </a>
        </div>
        <h3 className="text-center mt-1 font-semibold flex justify-center flex-wrap">{tech.map((e,i)=>{
          return <span key={i}>{i > 0 ? `${e}|` : `|${e}|`}</span>
          // return({i > 0 ? `${e}|` : `|${e}|`})
        })}</h3>
        <p className="mt-4 w-[85%] mx-auto">{desc}</p>
      </div>
    </div>
  );
}
{
  /* <div
      onClick={toggleShowing}
      style={{  backgroundSize: "100% 100%" }}
      className=" cursor-pointer h-auto relative mx-auto 2xl:w-[25rem]  xl:w-[21rem] lg:w-[25rem]  lg:border-blue-200 md:border-green-200 xl:border-yellow-300 2xl:border-purple-200  mt-10  border-4 border-red-500 rounded-xl "
    >
      <a rel="noreferrer" target={"_blank"} href={github}>
        <img
          className="w-20 rounded-tr-[4%] right-[0] top-[-1px] absolute"
          src="/github.svg"
          alt=""
        />
      </a>
      <a rel="noreferrer" target={"_blank"} href={live}>
        <img
          className="w-20 rounded-tl-[4%] left-[0] top-[0] absolute"
          src="/live.svg"
          alt=""
        />
      </a>
      <motion.div
        transition={{ duration: 0.8 }}
        animate={{ height: showing ? "0%" : "100%" }}
        className=" z-10 overflow-hidden mx-auto  bg-white text-black border-[1px] rounded-b-md "
      >
        <h3 className="text-center lg:text-3xl md:text-2xl text-lg md:px-[20%] px-[25%] border-b-2">
          {name}
        </h3>
        <div className="flex flex-wrap justify-center font-semibold px-[10%]">
          {tech.map((e, i) => {
            return (
              <motion.p
                className="lg:text-lg md:text-lg text-md "
                transition={{ delay: 0.2 * i + 1 }}
                animate={{
                  opacity: showing ? "0" : "100%",
                  transform: showing ? "translateY(20px)" : "translateY(0px)",
                }}
                an
                key={i}
              >
                {i > 0 ? `${e}|` : `|${e}|`}
              </motion.p>
            );
          })}
        </div>
        <motion.p
          className="px-[10%]  md:text-md text-sm mt-2"
          transition={{ delay: 0.2 * tech.length + 1 }}
          animate={{
            opacity: showing ? "0" : "100%",
            transform: showing ? "translateY(20px)" : "translateY(0px)",
          }}
        >
          {desc}
        </motion.p>
      </motion.div>
    </div> */
}
