import React from "react";
import { PieChart } from "react-minimal-pie-chart";
export default function BEchart() {
  const BEskills = [
    { title: "Node.js", value: 1, color: "lightgreen" },
    { title: "express", value: 1, color: "lightgray" },
    { title: "next.js", value: 1, color: "black" },
    { title: "next-auth", value: 1, color: "gold" },
    { title: "mysql", value: 1, color: "#89CFF0" },
    { title: "mongodb", value: 1, color: "green" },
    { title: "firebase", value: 1, color: "#eab308" },
  ];

  return (
    <div className=" w-[40vw] xl:w-[25vw] h-[40vw] xl:h-[25vw]    ml-auto mr-auto relative">
      <div className="absolute top-0 h-full w-full">
        <PieChart
          data={BEskills}
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
      <div className="absolute top-0 h-full w-full">
        <PieChart
          data={BEskills}
          animate
          animationDuration={1600}
          style={{ height: "100%", width: "100%", zIndex: 2 }}
          rounded
          radius={45}
          lineWidth={15}
          label={({ dataEntry }) => "Back-end"}
          labelPosition={0}
          labelStyle={{
            fill: "#EF4444",
            pointerEvents: "none",
            fontSize: "10",
            fontFamily: 'Alfa Slab One, cursive'
          }}
        />
      </div>
    </div>
  );
}
