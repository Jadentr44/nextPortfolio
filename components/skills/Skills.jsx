import React,{useState,useRef}   from 'react'
import IsVisible  from 'react-is-visible'
import Chart from './Chart'
import Frontend from './Frontend'
import Arrow from './icons/Arrow'
export default function Skill() {
  const [skills,setSkills] = useState(undefined)
  const [showCart, setChart] = useState(false)
  
  function renderSkills(){
    if(skills === "FrontEnd")  return <Frontend size={"8vw"} />
    if(skills === "BackEnd")  return <div className='w-[30vw]'>BackEnd</div>
    if(skills === "Other")  return <div className='w-[30vw]'>Other</div>
    return <div className='w-[30vw]'>skills</div>
  }
  return (
    <div className='mx-[10%] flex justify-around min-h-screen items-center '>
      <div>
        {showCart
        ? <Chart setSkills={setSkills} />
      :<div className='w-[30vw] h-[30vw]'></div>}
      
      <IsVisible once>
      {(isVisible) => <h1>{isVisible ? setChart(true) : ``}</h1>}
      </IsVisible>
      </div>
      

      
      {renderSkills()}
      
    </div>
  )
}
