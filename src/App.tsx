import React from "react";
import HowToBuy from "./Layout/HowToBuy";
import Hero from "./Layout/Hero";
// import Tokenomic from "./Layout/Tokenomic";
import Sparky from "./contains/Sparky";
import About from "./Layout/About";
import End from "./Layout/End";

const App: React.FC = () => {
  return(
    <div className="">
      <Hero />
      <Sparky />
      <About />
      <Sparky />
      <HowToBuy/>
      <Sparky />
      <End />
    </div>
  )
}

export default App;