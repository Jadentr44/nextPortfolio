import React,{ useRef} from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Skill from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Splash from '../components/home/Splash'
import Nav from "../components/nav/Nav";
export default function Home() {
  const skillSection = useRef();
  const aboutMe = useRef()
  const scrollAbout = (e) =>{
    aboutMe.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  }
  return (
    <div className="relative overflow-x-hidden  bg-white">
      <Nav />
      <section >
        <Splash scrollAbout={scrollAbout} />
      </section>
      
    <section ref={aboutMe} className="mt-[5vh]">
      <AboutMe />
    </section>
      <section className="mt-[5vh]" ref={skillSection}>
      
    <Skill />
      </section>

      <section className="">

    <Projects />
      </section>


    </div>
  )
}
