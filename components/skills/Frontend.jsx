import React from 'react'
import FEkey from './FEkey'
import { PieChart } from 'react-minimal-pie-chart'
export default function Frontend({size}) {
  const pieData = [
    { title: "HTML", value: 1, color: "#f97316" },
    { title: "CSS", value: 1, color: "#0ea5e9" },
    { title: "Javascript", value: 1, color: "#facc15" },
    { title: "tailwind", value: 1, color: "lightblue" },
    { title: "Jquery", value: 1, color: "blue" },
    { title: "Bootstrap", value: 1, color: "purple" },
    
    {title:"React", value:1, color:"#0e7490"}
  ]
  return (
    <div className="w-fit max-w-[30vw] h-fit  ">
      <div className=' max-w-[20vw]  ml-auto mr-auto'>
      <PieChart
   
   rounded
   data={pieData}
   animate
   style={{ height: "100%", width: "100%" }}
   label={() => "front end"}
   labelStyle={(index) => ({
     fill: "black",
     fontSize: "5px",
     fontFamily: "sans-serif",
   })}
   radius={48}
   lineWidth={20}
   labelPosition={0}
   
 />
      </div>
   
    <FEkey size={size} />
  </div>
  )
}
{/* <div className='flex w-[30vw] border-2 justify-between flex-wrap'>
      <Html size={size} />
      <Css size={size} />
      <Javascript size={size}/>
      <Bootstrap size={size} />
       <SJquery size={size} />
      <TailWind size={size} /> 
      <FaReact size={size} /> 
      </div> */}