import React,{useState,useRef}   from 'react'
import IsVisible  from 'react-is-visible'
import Chart from './Chart'
import Frontend from './Frontend'
import FEkey from './FEkey'
export default function Skill() {
  const [skills,setSkills] = useState(undefined)
  const [showCart, setChart] = useState(false)
  
  function renderSkillsPie(){
    if(skills === "FrontEnd")  return <Frontend  />
    if(skills === "BackEnd")  return <div className='w-[30vw]'>BackEnd</div>
    if(skills === "Other")  return <div className='w-[30vw]'>Other</div>
    return <div className='w-[30vw] h-[30vw]'></div>
  }

  function renderSkillsKey(){
    if(skills === "FrontEnd")  return <FEkey size={"45"} />
    if(skills === "BackEnd")  return <FEkey size={"45"} />
    if(skills === "Other")  return <FEkey size={"45"} />
    return <div className='w-[30vw] h-[30vw]'>skills</div>
  }
  return (
    <div className='mx-[10%] flex justify-around min-h-screen items-center '>
      <div>
        {showCart
        ? <Chart setSkills={setSkills} />
      :<div className='w-[30vw] h-[30vw]'></div>}
      
      {showCart
        ? <div className='block md:hidden'> {renderSkillsPie()}</div>
      :<div className='hidden md:block w-[30vw] h-[30vw]'></div>}

      <IsVisible once>
      {(isVisible) => <h1>{isVisible ? setChart(true) : ``}</h1>}
      </IsVisible>
      </div>
      

      <div className='border-2 max-h-[75vh]'>
        <div className='hidden md:block'>

      {renderSkillsPie()}
        </div>
      {renderSkillsKey()}
      </div>
      
      
    </div>
  )
}
