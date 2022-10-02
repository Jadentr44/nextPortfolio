import * as React from "react";

function Hamburger({size,setNav,nav}) {
  return <svg onClick={()=>{nav?setNav(false):setNav(true)}} className="  cursor-pointer mt-12 xl:mt-4 mr-[-2px] z-20 pr-5 pl-2  py-2 h-fit w-fit rounded-l-full border-2 border-black border-r-red-500 border-r-0 bg-red-500 drop-shadow-xl "  stroke="currentColor" fill="white" strokeWidth={0} viewBox="0 0 512 512" height={size} width={size}><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" /></svg>;
}

export default Hamburger;