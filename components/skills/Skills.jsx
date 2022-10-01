import React,{useState,useRef}   from 'react'
import IsVisible  from 'react-is-visible'
import Chart from './Chart'
import Frontend from './Frontend'
import FEkey from './FEkey'
export default function Skill() {
  const [skills,setSkills] = useState(undefined)
  const [showCart, setChart] = useState(false)
  
  function renderSkillsPie(size){
    if(skills === "FrontEnd")  return <Frontend size={size} />
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
    <div>
      <h1 className='text-center text-6xl absolute top-4 inset-x-0 mx-auto'>Skills</h1>
    
    <div className='mx-[10%] flex justify-around min-h-screen items-center '>
      <div>
        <div className='hidden md:block'>
        {showCart
        ? <Chart size={30} setSkills={setSkills} />
      :<div className='w-[30vw] h-[30vw]'></div>}
        </div>

        <div className='block md:hidden'>
        {showCart
        ? <div><Chart size={40} setSkills={setSkills} /> {renderSkillsPie(50)} </div>
      :<div className='w-[30vw] h-[60vh]'></div>}
        </div>
        
      
      

      <IsVisible once>
      {(isVisible) => <h1>{isVisible ? setChart(true) : ``}</h1>}
      </IsVisible>
      </div>
      

      <div className=' max-h-[75vh]'>
        <div className='hidden md:block'>

      {renderSkillsPie()}
        </div>
      {renderSkillsKey()}
      </div>
      
      
    </div>
    </div>
  )
}
