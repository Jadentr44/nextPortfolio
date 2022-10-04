import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function Chart({ setSkills, size, width }) {
  const [selected, setSelected] = useState(undefined);
  const [clicked, setClicked] = useState(undefined);
  const segmentsStyle = { cursor: "pointer" };
  const pieData = [
    { title: "Other", value: 9, color: "lightgray", real: "red" },
    { title: "BackEnd", value: 20, color: "lightgray", real: "green" },
    { title: "FrontEnd", value: 25, color: "lightgray", real: "lightblue" },
  ];
  return (
    <div className="w-[40vw] xl:w-[25vw] h-[40vw] xl:h-[25vw] ">
      <PieChart
        data={pieData}
        animate
        animationDuration={800}
        style={{ height: "100%", width: "100%" }}
        radius={40}
        lineWidth={100}
        // segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
        segmentsStyle={(index) => {
          return index === selected
            ? { ...segmentsStyle, stroke: pieData[index].real }
            : segmentsStyle;
        }}
        segmentsShift={(index) => (index === clicked ? 6 : 1)}
        label={({ dataEntry }) => dataEntry.title}
        labelPosition={100 - 100 / 2}
        labelStyle={{
          fill: "black",
          pointerEvents: "none",
          fontSize: "3px",
        }}
        onMouseOver={(_, index) => {
          if (!clicked) {
            setSelected(index);
            // setSkills(pieData[index].title);
          }
        }}
        onMouseOut={(_, index) => {
          if (!clicked) {
            setSelected(undefined);
            // setSkills(undefined);
          }
        }}
        onClick={(_, index) => {
          if (clicked == index) {
            setSelected(undefined);
            setClicked(undefined);
            setSkills(undefined);
            return;
          }
          setClicked(index);
          setSelected(index);
          setSkills(pieData[index].title);
        }}
      />
    </div>
  );
}
