import Skill from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Splash from '../components/home/Splash'
import Nav from "../components/nav/Nav";
export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      
      <section>
        <Splash />
      </section>
      <Nav />
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
