import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import one from "../assets/img/IMG_6739.webp";
import two from "../assets/img/hero.webp";
import three from "../assets/img/a.webp";
import four from "../assets/img/IMG_6786.webp";
import five from "../assets/img/IMG_6801.webp";

const story: string[] = [
  "Sparky, a radiant celestial being born from the heart of a dying star, emerged as a mythical figure known for bringing prosperity to those who believed in him.",
  "With a dazzling comet tail and the ability to weave constellations from the ashes of cosmic storms, Sparky promised a future of wealth and fortune to the daring souls who placed their trust in his guidance.",
  "His followers, a mix of dreamers and savvy investors, hailed him as a messiah of abundance, claiming that his celestial touch turned even the smallest investments into dazzling empires.",
  "His legend spread across galaxies, with tales of his twinkling presence inspiring a new generation of star-chasing visionaries eager to find their own riches in the sky.",
];

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % story.length);
        setIsAnimating(false);
      }, 500); // Animation duration
    }, 4000); // Change every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <section
      className="w-full flex flex-col items-center justify-center bg-red-500 relative bg-[url(./assets/img/bg.jpg)] bg-cover"
      id="about"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center md:w-1/2 w-4/5 break-words md:text-3xl text-xl leading-snug my-10">
          <h1 className="text-red-400 text-7xl mb-5">Sparky</h1>
          <div className="relative w-full h-[200px]">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-b-[#f5f5f591] top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"></div>
            </div>
            <div className="bg-[#f5f5f591] p-5 h-full w-full lg:text-2xl md:text-lg text-base relative z-10 rounded overflow-hidden">
              <div 
                className={`w-full h-[200px] text-left indent-5 flex items-center transition-transform duration-500 ${
                  isAnimating
                    ? "transform translate-y-[-50px] opacity-0"
                    : "transform translate-y-0 opacity-100"
                }`}
              >
                {story[currentIndex]}
              </div>
            </div>
          </div>
        </div>
        <Marquee direction="right" className="py-5 w-full max-[1000px]:!hidden">
          <img
            src={one}
            alt=""
            className="md:h-[20vh] h-[5vh] mx-10 rounded-md border-2 border-[#fff] shadow-lg"
          />
          <img
            src={two}
            alt=""
            className="md:h-[20vh] h-[5vh] mx-10 rounded-md border-2 border-[#fff] shadow-lg"
          />
          <img
            src={three}
            alt=""
            className="md:h-[20vh] h-[5vh] mx-10 rounded-md border-2 border-[#fff] shadow-lg"
          />
          <img
            src={four}
            alt=""
            className="md:h-[20vh] h-[5vh] mx-10 rounded-md border-2 border-[#fff] shadow-lg"
          />
          <img
            src={five}
            alt=""
            className="md:h-[20vh] h-[5vh] mx-10 rounded-md border-2 border-[#fff] shadow-lg"
          />
        </Marquee>
      </div>
    </section>
  );
};

export default About;
