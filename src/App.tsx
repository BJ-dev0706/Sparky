import React from "react";
import Header from "./Layout/Header";
import HowToBuy from "./Layout/HowToBuy";
import Footer from "./Layout/Footer";
import Hero from "./Layout/Hero";
import About from "./Layout/About";
import Sparky from "./contains/Sparky";
import Slider from "./Layout/Slider";
import BackToTopBtn from "./contains/BackToTopBtn";

const App: React.FC = () => {
  return(
    <div>
      <Header />
      <Hero />
      <Sparky />
      <Slider />
      <Sparky />
      <HowToBuy/>
      <Sparky />
      <About />
      <Footer />
      <BackToTopBtn />
    </div>
  )
}

export default App;