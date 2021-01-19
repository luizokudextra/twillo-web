import React from "react";

import tudoBemLogo from "./assets/tudobem-logo.svg";
import "./App.css";
import VideoChat from "./VideoChat";

const App = () => {
  return (
    <div className="app">
      <header>
        <img src={tudoBemLogo} alt="tudobem" width={150} height={70} />
      </header>
      <main>
        <VideoChat />
      </main>
    </div>
  );
};

export default App;
