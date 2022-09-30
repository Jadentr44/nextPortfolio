import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
export default function Chart({ setSkills }) {
  const [selected, setSelected] = useState(undefined);
  const [clicked, setClicked] = useState(false);
  const segmentsStyle = { transition: "stroke 1s ease-in-out", cursor: "pointer" };
  const pieData = [
    { title: "Other", value: 9, color: "#6A2135" },
    { title: "BackEnd", value: 20, color: "#C13C37" },
    { title: "FrontEnd", value: 25, color: "#E38627" },
  ];
  return (
    <div className="w-fit h-fit ">
      <PieChart
        data={pieData}
        animate
        animationDuration={1600}
        style={{ height: "30vw", width: "30vw" }}
        
        label={({ dataEntry }) => dataEntry.title}
        labelStyle={(index) => ({
          fill: pieData[index].color,
          fontSize: "5px",
          fontFamily: "sans-serif",
        })}
        radius={30}
        lineWidth={83}
        labelPosition={115}
        segmentsStyle={(index) => {
          return index === selected
            ? {...segmentsStyle , strokeWidth: 28 }
            : segmentsStyle;
        }}
        onMouseOver={(_, index) => {
          if (!clicked) {
            setSelected(index);
            setSkills(pieData[index].title);
          }
        }}
        onMouseOut={(_, index) => {
          if (!clicked) {
            setSelected(undefined);
            setSkills(undefined);
          }
        }}
        onClick={(_, index) => {
          if (selected == index && clicked) {
            setSelected(undefined);
            setClicked(false);
            setSkills(undefined);
            return;
          }
          setClicked(true);
          setSelected(index);
          setSkills(pieData[index].title);
        }}
      />
    </div>
  );
}
