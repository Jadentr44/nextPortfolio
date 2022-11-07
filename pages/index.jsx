import React, { useRef, useState } from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Skill from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Splash from "../components/home/Splash";
import Nav from "../components/nav/Nav";
import Contact from "../components/Contact";
import TrackVisibility from "react-on-screen";
export default function Home() {
  const [page, setPage] = useState(0);
  const home = useRef();
  const skillSection = useRef();
  const aboutMe = useRef();
  const projects = useRef();
  const contact = useRef();
  const scrollHome = () => {
    home.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  };
  const scrollAbout = () => {
    aboutMe.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  };
  const scrollSkills = () => {
    skillSection.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  };
  const scrollProjects = () => {
    projects.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  };
  const scrollContact = () => {
    contact.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  };
  return (
    <>
      <Nav
        page={page}
        scrollHome={scrollHome}
        scrollContact={scrollContact}
        scrollAbout={scrollAbout}
        scrollSkills={scrollSkills}
        scrollProjects={scrollProjects}
      />
      <div className=" overflow-x-hidden lg:mr-[15%]  bg-[#DFF1FF]">
        <section ref={home} className="h-fit relative ">
          <TrackVisibility className="absolute top-[75vh]">
            {({ isVisible }) => (isVisible ? setPage(0) : "")}
          </TrackVisibility>
          <Splash scrollAbout={scrollAbout} />
        </section>

        <section ref={aboutMe} className="h-fit relative">
          <TrackVisibility className="absolute top-[75vh]">
            {({ isVisible }) => (isVisible ? setPage(1) : "")}
          </TrackVisibility>
          <AboutMe scrollSkills={scrollSkills} />
        </section>

        <section className="mt-[15vh] lg:mt-[10vh] relative" ref={skillSection}>
          <TrackVisibility className="absolute top-[75vh]">
            {({ isVisible }) => (isVisible ? setPage(2) : "")}
          </TrackVisibility>
          <Skill />
        </section>

        <section ref={projects} className="mt-[15vh] lg:mt-[10vh] relative">
          <TrackVisibility className="absolute top-[75vh]">
            {({ isVisible }) => (isVisible ? setPage(3) : "")}
          </TrackVisibility>
          <Projects />
        </section>

        <section ref={contact} className="h-fit relative">
          <TrackVisibility className="absolute bottom-[25vh]">
            {({ isVisible }) => (isVisible ? setPage(4) : "")}
          </TrackVisibility>
          <Contact />
        </section>
      </div>
    </>
  );
}
