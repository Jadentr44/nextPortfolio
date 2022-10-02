import React from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function FEchart() {
  const FEskills = [
    { title: "HTML", value: 1, color: "#f97316" },
    { title: "CSS", value: 1, color: "#0ea5e9" },
    { title: "Javascript", value: 1, color: "#facc15" },
    { title: "tailwind", value: 1, color: "lightblue" },
    { title: "Jquery", value: 1, color: "blue" },
    { title: "Bootstrap", value: 1, color: "purple" },

    { title: "React", value: 1, color: "#0e7490" },
  ];
  return (
    <div className=" w-[40vw] xl:w-[25vw] h-[40vw] xl:h-[25vw]    ml-auto mr-auto relative">
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
          label={({ dataEntry }) => "Front-end"}
          labelPosition={0}
          labelStyle={{
            fill: "black",
            pointerEvents: "none",
            fontSize: "10",
          }}
        />
      </div>
    </div>
  );
}
