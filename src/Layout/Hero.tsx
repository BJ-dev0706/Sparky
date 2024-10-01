// import Typewriter from 'typewriter-effect';
// Import your images here
// import title from 'path/to/title.png';
// import effect from 'path/to/effect.png';
import effect from '../assets/img/Sparkly animation.gif';

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden luckiest-guy-regular"
      id="home"
    >
      
      <img src={effect} alt="hero" className="w-full h-[50vw] z-0" />

      {/* Uncomment if needed */}
      {/* <div className="absolute top-0 right-0 left-0 h-full w-screen flex items-center justify-center bg-cover">
        <div className="Mark absolute top-1/3 z-50 lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-white sparky tracking-widest">
          <img src={title} alt="Mark" className="md:w-[500px] sm:w-[400px] w-[250px]" />
          SPARKY
        </div>
        <div className="md:text-2xl text-lg text-white bg-[#0096cc] border-2 p-2 bottom-10 absolute font-extrabold max-sm:hidden mx-5 Neufreit text-center shadow-2xl rounded-md z-40">
          <Typewriter
            options={{
              strings: ["Sparky, a radiant celestial being born from the heart of a dying star"],
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
    </section>
  );
};

export default Hero;
