import React from 'react'
import {BsCodeSlash,BsTerminal} from 'react-icons/bs'
import { FiDatabase } from 'react-icons/fi'
export default function Skills() {
  const FeSkills = ["React.js","Next.js","Html","Css","Javascript","Tailwind","Bootstrap","Jquery"]
  const BeSkills = ["Node.js","Express","Next-auth","SQL","Sequelize","Mongodb","Mongoose","Firebase"]
  const OtherSkills = ["Vscode","Git","Github","Figma","Adobe Illustrator","Linux"]
  return (
    <div id='skills' className='flex px-[10%] pt-48'>
      <div className=" w-2/3 pr-[10%]">
        <div className='flex items-center'>

          <div className="h-1 w-full bg-black"></div>
        <h1 className=" mx-2 text-4xl   ">Skills</h1>
          <div className="h-1 w-full bg-black"></div>
        </div>
        <div className='flex justify-between mt-16'>
            <div className='bg-white w-[30%] border-2 rounded-2xl h-auto relative pb-8'>
              <div className="absolute top-[-1.75rem]  left-0 right-0">
                <div className='border-black border-4 bg-red-500 p-2 rounded-full w-fit mx-auto text-white'>

                <BsCodeSlash size={"3rem"} />
                </div>
              </div>
              <h3 className='text-center font-semibold text-black text-3xl mt-10 '>Front-end</h3>
              <div className='pl-[15%]   '>
                  {FeSkills.map((e,i)=>{
                    return <div key={i} className='w-full my-3 text-xl'>{e}</div>
                  })}
              </div>
            </div>
            <div className='bg-white w-[30%] border-2 rounded-2xl h-auto relative pb-8'>
              <div className="absolute top-[-1.75rem]  left-0 right-0">
                <div className='border-black border-4 bg-red-500 p-2 rounded-full w-fit mx-auto text-white'>

                <FiDatabase size={"3rem"} />
                </div>
              </div>
              <h3 className='text-center font-semibold text-black text-3xl mt-10 '>Back-end</h3>
              <div className='pl-[15%]   '>
                  {BeSkills.map((e,i)=>{
                    return <div key={i} className='w-full my-3 text-xl'>{e}</div>
                  })}
              </div>
            </div>
            <div className='bg-white w-[30%] border-2 rounded-2xl h-auto relative pb-8'>
              <div className="absolute top-[-1.75rem]  left-0 right-0">
                <div className='border-black border-4 bg-red-500 p-2 rounded-full w-fit mx-auto text-white'>

                <BsTerminal size={"3rem"} />
                </div>
              </div>
              <h3 className='text-center font-semibold text-black text-3xl mt-10 '>Other</h3>
              <div className='pl-[15%]   '>
                  {OtherSkills.map((e,i)=>{
                    return <div key={i} className='w-full my-3 text-xl'>{e}</div>
                  })}
              </div>
            </div>
          </div>
        </div>
      <div className='w-1/3'>
        <img src="/skills.svg" alt="" />
      </div>
      
    </div>
  )
}
