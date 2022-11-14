import React, { useRef, useState } from "react";
import { Nav,Splash,About,Skills,Projects,Contact,Footer} from "../components";
import Head from "next/head";
export default function Home() {
  return (
    
    <div className="overflow-hidden bg-gray-100" >
      <Head>
        <title>Jaden&apos;s Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Jaden Rodriguez web developer portfolio" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Nav />
      <Splash />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}
