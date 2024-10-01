import React from "react";
import Marquee from "react-fast-marquee";
import cloud from "../assets/img/cloud.png";
import hero from "../assets/img/hero.png";

const About: React.FC = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center relative"
      id="about"
    >
      {/* <video src="/Sparkly animation.mp4" autoPlay loop muted controls={false} preload="auto" playsInline></video> */}
      <img src={hero} alt="hero" className="w-full h-[50vw] z-0" />
      <div className="flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-50">
        <div className="flex flex-col items-center justify-center w-full break-words md:text-3xl text-xl !font-medium leading-snug">
          <h1 className="text-white lg:text-5xl sm:text-3xl text-base mb-5 max-sm:mb-0 luckiest-guy-regular text-shadow-custom ">
            About Sparky
          </h1>
          <div className="relative xl:w-1/2 sm:w-4/5 w-[90%] flex md:flex-row flex-col items-center justify-center luckiest-guy-regular">
            <div className="lg:py-10 lg:px-5 md:py-7 md:px-4 sm:py-5 sm:px-3 py-3 max-sm:py-1 px-2 lg:text-4xl sm:text-xl text-sm text-white ">
              <p className="md:mb-2 mb-1 text-shadow-custom xl:text-center max-md:text-center">
                SPARKY, a radiant celestial being born from the heart of a dying
                star, emerged as a mythical figure known for bringing prosperity
                to those who believed in him.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Marquee className="!bg-transparent !absolute top-[10%] z-30" speed={20}>
        <img src={cloud} alt="cloud" className="w-[200px] max-sm:hidden" />
      </Marquee>
      <Marquee
        className="!bg-transparent !absolute top-[40%] z-30"
        speed={40}
        direction="right"
      >
        <img src={cloud} alt="cloud" className="w-[100px]" />
      </Marquee>
      <Marquee className="!bg-transparent !absolute top-[70%] z-30" speed={10}>
        <img src={cloud} alt="cloud" className="w-[150px]" />
      </Marquee>
      <Marquee className="!bg-transparent !absolute top-[80%] z-30" speed={15}>
        <img src={cloud} alt="cloud" className="w-[130px] max-sm:hidden" />
      </Marquee>
    </section>
  );
};

export default About;
