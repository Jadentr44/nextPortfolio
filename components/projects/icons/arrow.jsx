import * as React from "react";

function Arrow(props) {
  return <svg stroke="currentColor" fill="black" strokeWidth={1} viewBox="0 0 16 16" height="100%" width="100%" {...props}><path fillRule="evenodd" d="M5.854 4.646a.5.5 0 00-.708 0l-3 3a.5.5 0 000 .708l3 3a.5.5 0 00.708-.708L3.207 8l2.647-2.646a.5.5 0 000-.708z" clipRule="evenodd" /><path fillRule="evenodd" d="M10 8a.5.5 0 00-.5-.5H3a.5.5 0 000 1h6.5A.5.5 0 0010 8zm2.5 6a.5.5 0 01-.5-.5v-11a.5.5 0 011 0v11a.5.5 0 01-.5.5z" clipRule="evenodd" /></svg>;
}

export default Arrow;