import Skill from "../components/skills/Skills";
import Projects from "../components/projects/Projects";

export default function Home() {
  return (
    <div className=" z-20">
      <section>
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
