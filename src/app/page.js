import Sophisticated from "./components/Sophisticated";
import Header from "./components/Header";
import SkinstricDev from "./components/SkinstricDev";
import TakeTest from "./components/TakeTest";
import DiscoverAi from "./components/DiscoverAi";
import BackButton from "./components/BackButton";
import React from "react";

export default function Home() {
  return (
    <>
      <main className="main__body">
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <Sophisticated />
          <br></br>
        </div>
        <div className="takeTest">
          <TakeTest />
        </div>
        <div className="skindev">
          <SkinstricDev />
        </div>
        <div className="takeTest">
          <TakeTest />
        </div>
        <div className="back">
          <BackButton />
        </div>
        <div className="discover__Ai">
          <DiscoverAi />
        </div>
      </main>
    </>
  );
}
