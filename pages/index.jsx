import React,{ useRef} from "react";
import Skill from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Splash from '../components/home/Splash'
import Nav from "../components/nav/Nav";
export default function Home() {
  const skillSection = useRef();
  const scrollSkills = () =>{
    skillSection.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  }
  return (
    <div className="relative overflow-x-hidden">
      <Nav />

      <section >
        <Splash scrollSkills={scrollSkills} />
      </section>
      
      <section ref={skillSection}>
      skills:
    <Skill />
      </section>

      <section >
    projects:
    <Projects />
      </section>


    </div>
  )
}