import React, {useState} from 'react'
import Hamburger from './icons/Hamburger'
export default function Nav() {
  const [nav,setNav] = useState(false)
  const openNav = {right: 0, transition: "right 600ms ease-in",zIndex:10};
  const closedNav = {right: '-20vw', transition: "right 600ms ease-in",zIndex:10};
  return (
    <div style={nav?openNav:closedNav} className={`fixed flex top-0 bottom-0  `}>
      <Hamburger setNav={setNav} nav={nav} size={'1.5vw'}/>
      <div className='bg-red-100 h-screen min-w-[20vw] border-l-2 border-black z-0 '>here</div>
    </div>
  )
}
