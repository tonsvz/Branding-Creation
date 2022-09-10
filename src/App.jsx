import React, { useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import "./styles/App.scss";

const App = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
};

export default App;
