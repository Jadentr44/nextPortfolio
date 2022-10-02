import React,{useState,useRef}   from 'react'
import IsVisible  from 'react-is-visible'
import Chart from './Chart'
import SkillChart from './SkillChart'
import FEchart from './FEchart'
import FEkey from './FEkey'
import BEchart from './BEchart'
import BEkey from './BEkey'
export default function Skill() {
  const [skills,setSkills] = useState(undefined)
  const [showCart, setChart] = useState(false)
 
  

  function renderSkillsPie(width){
    if(skills === "FrontEnd")  return <FEchart />
    if(skills === "BackEnd")  return <BEchart/>
    if(skills === "Other")  return <div className='w-[40vw]'>Other</div>
    return <div className='w-[40vw] h-[40vw] flex justify-center items-center'>Choose a Skill</div>
  }

  function renderSkillsKey(){
    if(skills === "FrontEnd")  return <FEkey size={"45"} />
    if(skills === "BackEnd")  return <BEkey size={"45"} />
    if(skills === "Other")  return <FEkey size={"45"} />
    return <div className='  '></div>
  }
  return (
    <div className='red'>
      <h1 className='text-center text-6xl absolute top-4 inset-x-0 mx-auto'>Skills</h1>
    
    <div className='mx-[10%] flex flex-col md:flex-row justify-center md:justify-around min-h-screen items-center '>
      {/* 1 */}
      <div className='w-full'>
        {/* large screen */}
        <div className='hidden md:block'>
        <Chart width={25} setSkills={setSkills}  />
        </div>

      {/* small screen */}
    <div className='flex justify-around w-full  md:hidden'>
    <Chart width={40} setSkills={setSkills}  />
    {renderSkillsPie(40)}
    </div>

      <IsVisible once>
      {(isVisible) => <h1>{isVisible ? setChart(true) : ``}</h1>}
      </IsVisible>
      </div>
      

    {/* 2 */}
      <div className='w-[40vw] max-h-[75vh]'>
        <div className='hidden md:flex '>
        {renderSkillsPie(40)}
        </div>
        <div className='h-12'></div>
        {renderSkillsKey()}
      </div>
      
      
    </div>

    </div>
  )
}
