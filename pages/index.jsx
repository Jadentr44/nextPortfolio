import React,{ useRef} from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Skill from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Splash from '../components/home/Splash'
import Nav from "../components/nav/Nav";
export default function Home() {
  const skillSection = useRef();
  const aboutMe = useRef()
  const projects = useRef()
  const scrollAbout = () =>{
    aboutMe.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  }
  const scrollSkills = () =>{
    skillSection.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  }
  const scrollProjects = () =>{
    projects.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  }
  return (
    <div className="relative overflow-x-hidden  bg-[#DFF1FF]">
      <Nav scrollAbout={scrollAbout} scrollSkills={scrollSkills} scrollProjects={scrollProjects}  />

      <section >
        <Splash scrollAbout={scrollAbout} />
      </section> 
      
    <section ref={aboutMe} className="mt-[10vh]">
      <AboutMe />
    </section>



      <section className="mt-[15vh] lg:mt-[10vh]" ref={skillSection}>
      
    <Skill />
      </section>

      <section ref={projects} className="mt-[15vh] lg:mt-[10vh]">

    <Projects />
      </section>


    </div>
  )
}
