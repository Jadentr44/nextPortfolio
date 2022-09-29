import React,{useState} from 'react'
import { PieChart } from 'react-minimal-pie-chart';
export default function Chart({setSkills}) {
  const [selected,setSelected] = useState(undefined)
  const [clicked,setClicked] = useState(false)
  const segmentsStyle = { transition: 'stroke .3s', cursor: 'pointer' };
  const pieData = [
    { title: 'Other', value: 9, color: '#6A2135' },
    { title: 'BackEnd', value: 20, color: '#C13C37' },
    { title: 'FrontEnd', value: 25, color: '#E38627' },
  ]
  return (
    <div className='border-2 w-fit '>
      <PieChart data={pieData} style={{ height: '15vw',width:'20vw' }} lineWidth={30}
      label={({ dataEntry }) => dataEntry.title}
      labelStyle={(index) => ({
        fill: pieData[index].color,
        fontSize: '5px',
        fontFamily: 'sans-serif',
      })}
      radius={40}
      labelPosition={115}
    segmentsStyle={(index) => {
      return index === selected
        ? { ...segmentsStyle, strokeWidth: 20 }
        : segmentsStyle;
    }}
   
    onMouseOver={(_, index) => {
      if(!clicked){
        setSelected(index);
        setSkills(pieData[index].title)
      } 
  }}
  onMouseOut={(_, index) => {
    if(!clicked) {
      setSelected(undefined);
      setSkills(undefined)
    }
  }}
  onClick={(_, index) => {
    if(selected == index && clicked){
      setSelected(undefined)
      setClicked(false)
      setSkills(undefined)
      return 
    } 
    setClicked(true)
    setSelected(index);
    setSkills(pieData[index].title)
  }}
     />
      
    </div>
  )
}
