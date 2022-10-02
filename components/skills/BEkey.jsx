import React from 'react'
import { Next , Express,Node,NextAuth,Mysql,Mongodb,Firebase} from './icons/backend'
import Bar from './Bar'
export default function BEkey({size}) {
  return (
    <div className='flex flex-wrap justify-between md:justify-around  w-full md:w-[40vw] max-h-[30vw]'>

      <div className='flex  mx-3 my-2'>
        <Node size={size} />
        <Bar name={"Node.js"}  color={'lightgreen'}/>
        </div>
        <div className='flex  mx-3 my-2'>
        <Express size={size} />
        <Bar name={"Express"}  color={'lightgrey'}/>
        </div>
        <div className='flex  mx-3 my-2'>
        <Next size={size} />
        <Bar name={"Next.js"}  color={'black'}/>
        </div>
        <div className='flex  mx-3 my-2'>
        <NextAuth size={size} />
        <Bar name={"Next-auth"}  color={'gold'}/>
        </div>
        <div className='flex  mx-3 my-2'>
        <Mysql size={size} />
        <Bar name={"MySQL"}  color={'#89CFF0'}/>
        </div>
        <div className='flex  mx-3 my-2'>
        <Mongodb size={size} />
        <Bar name={"Mongodb"}  color={'green'}/>
        </div>
        <div className='flex  mx-3 my-2'>
        <Firebase size={size} />
        <Bar name={"Firebase"}  color={'#eab308'}/>
        </div>

    </div>
  )
}
