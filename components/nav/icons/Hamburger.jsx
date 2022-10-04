import * as React from "react";

function Hamburger({size,setNav,nav}) {
  return <svg  className=" "  stroke="currentColor" fill="white" strokeWidth={0} viewBox="0 0 512 512" height={size} width={size}><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" /></svg>;
}

export default Hamburger;