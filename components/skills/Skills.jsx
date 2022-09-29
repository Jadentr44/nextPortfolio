import React,{useState} from 'react'
import Chart from './chart'
export default function Skill() {
  const [skills,setSkills] = useState(undefined)
  
  function renderSkills(){
    if(skills === "FrontEnd")  return "front end"
    if(skills === "BackEnd")  return "backend"
    if(skills === "Other")  return "other"
    return <div>skills</div>
  }
  return (
    <div className='mx-[20%] '>
      <Chart setSkills={setSkills} />
      {renderSkills()}
    </div>
  )
}
