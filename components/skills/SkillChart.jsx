import React from 'react'
import FEkey from './FEkey'
import { PieChart } from 'react-minimal-pie-chart'
export default function skillChart({data,width,name}) {
  
  return (
    <div style={{Width:`${width}vw`,height:`${width}vw`}} className="w-fit border-2    ml-auto mr-auto">
    
    <PieChart
        data={data}
        animate
        animationDuration={1600}
        style={{ height: "100%", width: "100%" }}
        rounded
        radius={45}
        lineWidth={15}
        
       
        
        
        label={({ dataEntry }) => name}
        labelPosition={0}
        labelStyle={{
          fill: 'black',
          pointerEvents: 'none',
          fontSize:'10'
        }}
        
      />
      
   
   
  </div>
  )
}
