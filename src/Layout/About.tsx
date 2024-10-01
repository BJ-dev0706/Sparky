import React from "react";
// import Marquee from "react-fast-marquee";
// import howtobuy from "../assets/img/howtobuy.gif";
// import one from "../assets/img/IMG_6739.webp";
// import two from "../assets/img/hero.webp";
// import three from "../assets/img/a.webp";
// import four from "../assets/img/IMG_6786.webp";
// import five from "../assets/img/IMG_6801.webp";

const About: React.FC = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center relative"
      id="about"
    >
      <video src="/Sparkly animation.mp4" autoPlay loop muted controls={false} preload="auto" playsInline></video>
      <div className="flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0">
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
          {/* <Marquee
            direction="right"
            className="py-5 w-full max-[1000px]:!hidden"
            pauseOnHover
          >
            <img
              src={one}
              alt=""
              className="md:h-[20vh] h-[5vh] mx-10 rounded-md border-2 border-[#fff] shadow-lg hover:scale-105 transition cursor-pointer"
            />
            <img
              src={two}
              alt=""
              className="md:h-[20vh] h-[5vh] mx-10 rounded-md border-2 border-[#fff] shadow-lg hover:scale-105 transition cursor-pointer"
            />
            <img
              src={three}
              alt=""
              className="md:h-[20vh] h-[5vh] mx-10 rounded-md border-2 border-[#fff] shadow-lg hover:scale-105 transition cursor-pointer"
            />
            <img
              src={four}
              alt=""
              className="md:h-[20vh] h-[5vh] mx-10 rounded-md border-2 border-[#fff] shadow-lg hover:scale-105 transition cursor-pointer"
            />
            <img
              src={five}
              alt=""
              className="md:h-[20vh] h-[5vh] mx-10 rounded-md border-2 border-[#fff] shadow-lg hover:scale-105 transition cursor-pointer"
            />
          </Marquee> */}
        </div>
      </div>
    </section>
  );
};

export default About;
