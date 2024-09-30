import React from "react";
import Header from "./Layout/Header";
import HowToBuy from "./Layout/HowToBuy";
import Footer from "./Layout/Footer";
import Hero from "./Layout/Hero";
import Tokenomic from "./Layout/Tokenomic";
import Sparky from "./contains/Sparky";
import About from "./Layout/About";
import BackToTopBtn from "./contains/BackToTopBtn";

const App: React.FC = () => {
  return(
    <div className="kavoon-regular">
      <Header />
      <Hero />
      <Sparky />
      <About />
      <Sparky />
      <HowToBuy/>
      <Sparky />
      <Tokenomic />
      <Footer />
      <BackToTopBtn />
    </div>
  )
}

export default App;