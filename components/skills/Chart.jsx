import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
export default function Chart({ setSkills,size }) {
  const [selected, setSelected] = useState(undefined);
  const [clicked, setClicked] = useState(false);
  const segmentsStyle = {  cursor: "pointer" };
  const pieData = [
    { title: "Other", value: 9, color: "lightgray",real:"red" },
    { title: "BackEnd", value: 20, color: "lightgray",real:"green" },
    { title: "FrontEnd", value: 25, color: "lightgray",real:"lightblue" },
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
          fill: "black",
          fontSize: "5px",
          fontFamily: "sans-serif",
        })}
        radius={size}
        lineWidth={83}
        labelPosition={115}
        segmentsStyle={(index) => {
          return index === selected
            ? {...segmentsStyle , strokeWidth: 28, stroke:pieData[index].real }
            : segmentsStyle;
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
