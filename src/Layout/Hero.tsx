import hero from "../assets/img/hero.webp";
import title from "../assets/img/mark.png";
import effect from "../assets/img/dots.gif";
import cloud from "../assets/img/cloud.png";
import Typewriter from "typewriter-effect";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <section className="relative overflow-hidden luckiest-guy-regular" id="home">
      <div className="absolute top-0 right-0 left-0 h-full w-screen overflow-hidden flex items-center justify-center bg-cover">
        <div className="Mark">
          <img
            src={title}
            alt=""
            className="hover:scale-110 transition !z-[100]"
          />
        </div>
        <div className="md:text-2xl text-lg text-[#ff0000] bottom-10 absolute font-extrabold max-sm:hidden mx-5 text-center">
          <Typewriter
            options={{
              strings: [
                "Sparky, a radiant celestial being born from the heart of a dying star",
              ],
              autoStart: true,
              loop: true,
              
            }}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 opacity-50">
          <img src={effect} alt="" className="w-full h-[50vw]" />
        </div>
      </div>
      <Marquee className="!bg-transparent !absolute top-[10%] z-30" speed={20} >
        <img src={cloud} alt="" className="w-[200px] max-sm:hidden" />
      </Marquee>
      <Marquee className="!bg-transparent !absolute top-[40%] z-30" speed={40} direction="right">
        <img src={cloud} alt="" className="w-[100px]" />
      </Marquee>
      <Marquee className="!bg-transparent !absolute top-[70%] z-30" speed={10} >
        <img src={cloud} alt="" className="w-[150px]" />
      </Marquee>
      <Marquee className="!bg-transparent !absolute top-[80%] z-30" speed={15} >
        <img src={cloud} alt="" className="w-[130px] max-sm:hidden" />
      </Marquee>
      <img src={hero} alt="" className="w-full h-[50vw] z-50" />
    </section>
  );
};

export default Hero;
