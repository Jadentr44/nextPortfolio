import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
export default function OtherChart() {
  const FEskills = [
    { title: "VScode", value: 1, color: "blue" },
    { title: "linux", value: 1, color: "yellow" },
    { title: "insomnia", value: 1, color: "purple" },
    { title: "github", value: 1, color: "darkgrey" },
    { title: "git", value: 1, color: "green" },

    
  ];
  return (
    <div className=" w-[40vw] lg:w-[25vw] h-[40vw] lg:h-[25vw]     relative">
      <div className="absolute top-0 h-full w-full">
        <PieChart
          data={FEskills}
          animate
          animationDuration={1600}
          style={{ height: "100%", width: "100%", zIndex: 0 }}
          rounded
          radius={46}
          lineWidth={19}
          segmentsStyle={(index) => {
            return index !== null ? { stroke: "black" } : "";
          }}
        />
      </div>
      <div className=" absolute top-0 h-full w-full">
        <PieChart
          data={FEskills}
          animate
          animationDuration={1600}
          style={{ height: "100%", width: "100%" }}
          rounded
          radius={45}
          lineWidth={15}
          label={({ dataEntry }) => "Other"}
          labelPosition={0}
          labelStyle={{
            fill: "#EF4444",
            pointerEvents: "none",
            fontSize: "10",
            fontFamily: "Alfa Slab One, cursive",
          }}
        />
      </div>
    </div>
  );
}
