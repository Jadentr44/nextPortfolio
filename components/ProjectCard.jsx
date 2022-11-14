import React from "react";
import { motion, useCycle } from "framer-motion";
export default function ProjectCard({ name, github, live, tech, desc, img }) {
  const [hovered, toggleHover] = useCycle(true, false);
  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      style={{ background: `url(/${img})`, backgroundSize: "100% 100%" }}
      className=" min-h-[15rem] relative mx-auto w-[40%] mt-10  border-4 border-red-500 rounded-xl "
    >
      <div className="absolute top-0 bottom-0  right-0 hover:backdrop-blur-[2px] z-[-1]"></div>
      <a href={github}>
        <img
          className="w-20 rounded-tr-sm right-[0] top-[-1px] absolute"
          src="/github.svg"
          alt=""
        />
      </a>
      <a href={live}>
        <img
          className="w-20 rounded-tl-sm left-[0] top-[0] absolute"
          src="/live.svg"
          alt=""
        />
      </a>
      <motion.div
        transition={{ duration: 0.8 }}
        animate={{ height: hovered ? "0%" : "100%" }}
        className=" z-10 overflow-hidden mx-auto  bg-white text-black border-[1px] "
      >
        <h3 className="text-center text-3xl px-[20%] border-b-2">{name}</h3>
        <p className="text-center text-xl">Technologies:</p>
        <div className="flex flex-wrap justify-center font-semibold px-[10%]">
          {tech.map((e, i) => {
            return (
              <motion.p
                className="text-xl"
                transition={{ delay: 0.2 * i + 1 }}
                animate={{
                  opacity: hovered ? "0" : "100%",
                  transform: hovered ? "translateY(20px)" : "translateY(0px)",
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
          className="px-[10%] text-lg mt-2"
          transition={{ delay: 0.2 * tech.length + 1 }}
          animate={{
            opacity: hovered ? "0" : "100%",
            transform: hovered ? "translateY(20px)" : "translateY(0px)",
          }}
        >
          {desc}
        </motion.p>
      </motion.div>
    </div>
  );
}
// animate={{opacity:hovered?"0":"100%",transform:hovered?"translateY(20px)":"translateY(0px)"}} className
