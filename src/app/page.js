import Sophisticated from "./components/Sophisticated";
import Header from "./components/Header";
import SkinstricDev from "./components/SkinstricDev";
import TakeTest from "./components/TakeTest";
import DiscoverAi from "./components/DiscoverAi";
import React from "react";
import Diamond from "./components/Diamond";

export default function Home() {
  return (
    <>
      <main className="main__body">
        <div className="header">
          <Header />
        </div>
        <div>
          <Sophisticated />
        </div>
        <div>
          <Diamond width={350} height={350} dotted={true} borderColorClass rest />
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
