import React from "react";
import { motion, useCycle } from "framer-motion";
export default function ProjectCard({ name, github, live, tech, desc, img }) {
  const [showing, toggleShowing] = useCycle(true, false);
  return (
    <div
      onClick={toggleShowing}
      style={{ background: `url(/${img})`, backgroundSize: "100% 100%" }}
      className=" cursor-pointer h-auto relative mx-auto xs:w-[80%] w-[70%] w- md:w-[45%] mt-10  border-4 border-red-500 rounded-xl "
    >
      <div className="absolute top-0 bottom-0  right-0 hover:backdrop-blur-[2px] z-[-1]"></div>
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
        <p className="text-center lg:text-xl md:text-lg text-md">Technologies:</p>
        <div className="flex flex-wrap justify-center font-semibold px-[10%]">
          {tech.map((e, i) => {
            return (
              <motion.p
                className="lg:text-xl md:text-lg text-md "
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
          className="px-[10%] lg:text-lg md:text-md text-sm mt-2"
          transition={{ delay: 0.2 * tech.length + 1 }}
          animate={{
            opacity: showing ? "0" : "100%",
            transform: showing ? "translateY(20px)" : "translateY(0px)",
          }}
        >
          {desc}
        </motion.p>
      </motion.div>
    </div>
  );
}
// animate={{opacity:showing?"0":"100%",transform:showing?"translateY(20px)":"translateY(0px)"}} className
