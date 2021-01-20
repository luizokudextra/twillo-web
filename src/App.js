import React from "react";

import Header from "./components/Header/Header";
import Routes from "./routes/Routes";
import GlobalStyle from "./styles/global.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      <GlobalStyle />
    </>
  );
};

export default App;
