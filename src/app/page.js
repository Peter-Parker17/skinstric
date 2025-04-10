import Sophisticated from "./components/Sophisticated";
import Header from "./components/Header";
import SkinstricDev from "./components/SkinstricDev";
import TakeTest from "./components/TakeTest";
import DiscoverAi from "./components/DiscoverAi";
import backbutton from "./components/BackButton";
import React from "react";
import Image from "next/image";

export default function Home({ Component, pageProps }) {
  return (
    <>
      <main className="main__body">
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <Sophisticated />
        </div>
        <div className="takeTest">
          <TakeTest />
        </div>
        {/* <div className="back">
          <BackButton />
        </div> */}
        <div className="discover__Ai">
          <DiscoverAi />
        </div>
        <div className="skindev">
          <SkinstricDev />
        </div>
      </main>
    </>
  );
}
