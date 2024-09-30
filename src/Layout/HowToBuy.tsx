import React from "react";
import bg from "../assets/img/IMG_6786.webp";
import workinprogress from "../assets/img/workinprogress.webp";
import howToBuy from "../assets/img/howToBuy.png";

const HowToBuy: React.FC = () => {

  return (
    <section className="relative h-full" id="howtobuy">
      <img src={bg} alt="background" className="w-full h-[50vw]" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start flex-col">
        <img src={howToBuy} alt="" className="lg:w-[650px] md:w-[350px] w-[250px]" />
        <img src={workinprogress} alt="" className="lg:w-[300px] md:w-[200px] w-[100px]" />
      </div>
    </section>
  );
};

export default HowToBuy;
