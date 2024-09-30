import React from "react";
import bg from "../assets/img/IMG_6801.webp";
import Footer from "./Footer";
import Text from "../assets/img/text.png";

const End: React.FC = () => {
  

  return (
    <section className="relative h-full" id="howtobuy">
      <div className="absolute top-5 justify-center flex w-full">
        <img src={Text} alt="" className="lg:w-[600px] md:w-[300px] w-[250px] mx-auto" />
      </div>
      <img src={bg} alt="background" className="w-full h-[50vw]" />
      {
        
        <Footer />
      }
    </section>
  );
};

export default End;
