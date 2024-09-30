import React from "react";
// import Marquee from "react-fast-marquee";
// import howtobuy from "../assets/img/howtobuy.gif";
// import one from "../assets/img/IMG_6739.webp";
// import two from "../assets/img/hero.webp";
// import three from "../assets/img/a.webp";
// import four from "../assets/img/IMG_6786.webp";
// import five from "../assets/img/IMG_6801.webp";

const story: string[] = [
  "SPARKY, a radiant celestial being born from the heart of a dying star, emerged as a mythical figure known for bringing prosperity to those who believed in him.",
  "With a dazzling comet tail and the ability to weave constellations from the ashes of cosmic storms, Sparky promised a future of wealth and fortune to the daring souls who placed their trust in his guidance.",
  "His followers, a mix of dreamers and savvy investors, hailed him as a messiah of abundance, claiming that his celestial touch turned even the smallest investments into dazzling empires.",
  "His legend spread across galaxies, with tales of his twinkling presence inspiring a new generation of star-chasing visionaries eager to find their own riches in the sky.",
];

const About: React.FC = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center bg-[#64c6d7] bg-[url(./assets/img/howtobuy.gif)] bg-cover relative overflow-hidden lg:h-[50vw]"
      id="about"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full break-words md:text-3xl text-xl !font-medium leading-snug my-10">
          {/* <h1 className="text-red-400 text-7xl mb-5 luckiest-guy-regular">
            <img src={Mark} alt="" />
          </h1> */}
          <div className="relative xl:w-1/2 sm:w-4/5 w-[90%] flex md:flex-row flex-col items-center justify-center">
            <div className="lg:py-10 lg:px-5 md:py-7 md:px-4 sm:py-5 sm:px-3 py-3 px-2 text-md text-white luckiest-guy-regular">
              {story.map((item) => (
                <p key={item} className="md:mb-2 mb-1 [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] max-sm:[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] max-md:text-center">
                  {item}
                </p>
              ))}
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
