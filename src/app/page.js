import Sophisticated from "./components/Sophisticated";
import Header from "./components/Header";
import SkinstricDev from "./components/SkinstricDev";
import TakeTest from "./components/TakeTest";
import DiscoverAi from "./components/DiscoverAi";
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
        </div>
        <div>
          <TakeTest />
        </div>
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
