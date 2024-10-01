// import hero from "../assets/img/hero.png";
// import title from "../assets/img/mark.png";
// import effect from "../assets/img/dots.gif";
// import cloud from "../assets/img/cloud.png";
// import Typewriter from "typewriter-effect";
// import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <section className="relative overflow-hidden luckiest-guy-regular" id="home">
      <video src="/Sparkly animation.mp4" autoPlay loop muted controls={false} preload="auto" playsInline></video>
      {/* <div className="absolute top-0 right-0 left-0 h-full w-screen overflow-hidden flex items-center justify-center bg-cover">
        <div className="Mark absolute top-1/3 z-50 lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-white sparky tracking-widest">
          <img
            src={title}
            alt="Mark"
            className="md:w-[500px] sm:w-[400px] w-[250px]"
          />
          SPARKY
        </div>
        <div className="md:text-2xl text-lg text-white bg-[#0096cc] border-2 p-2 bottom-10 absolute font-extrabold max-sm:hidden mx-5 Neufreit text-center shadow-2xl rounded-md z-40">
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
        <div className="absolute top-0 left-0 right-0 opacity-50 z-10">
          <img src={effect} alt="dots effect" className="w-full h-[90vw]" />
        </div>
      </div> */}

      {/* Hero Image */}
      {/* <img src={hero} alt="hero" className="w-full h-[50vw] z-0" /> */}
    </section>
  );
};

export default Hero;

