import React from "react";
import HowToBuy from "./Layout/HowToBuy";
import Footer from "./Layout/Footer";
import Hero from "./Layout/Hero";
// import Tokenomic from "./Layout/Tokenomic";
import Sparky from "./contains/Sparky";
import About from "./Layout/About";
import BackToTopBtn from "./contains/BackToTopBtn";
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
      <Footer />
      <BackToTopBtn />
    </div>
  )
}

export default App;