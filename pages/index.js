import Skill from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Splash from '../components/home/Splash'

export default function Home() {
  return (
    <div className="">
      <section>
        <Splash />
      </section>
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
