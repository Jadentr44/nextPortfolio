import React,{useState} from 'react'
import Chart from './Chart'
import Frontend from './Frontend'
export default function Skill() {
  const [skills,setSkills] = useState(undefined)
  
  function renderSkills(){
    if(skills === "FrontEnd")  return <Frontend size={"8vw"} />
    if(skills === "BackEnd")  return "backend"
    if(skills === "Other")  return "other"
    return <div className='w-[30vw]'>skills</div>
  }
  return (
    <div className='mx-[10%] flex justify-around min-h-screen items-center '>
      <Chart setSkills={setSkills} />
      {renderSkills()}
    </div>
  )
}
