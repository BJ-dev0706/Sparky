import React from "react";
import bg from "../assets/img/end.webp";
import one from "../assets/img/a.webp";
import two from "../assets/img/IMG_6801.webp";

const Tokenomic: React.FC = () => {
  return (
    <section className="relative" id="tokenomic">
      <img src={bg} alt="background" className="w-full h-[50vw] " />
      <div className="absolute top-0 left-0 flex w-full h-full items-center justify-around">
        <div className=" text-[3vw] text-center text-white">
          <p>Total Supply:</p>
          <p>88,888,888,888</p>
          <p className="my-10">90% Burned LP</p>
          <p>10% Airdrop</p>
          <p>to the Solana community</p>
        </div>
        <div className="flex flex-col">
          <img src={one} alt="" className="w-[30vw] rounded-t-lg shadow-inner slide-down-token" />
          <img src={two} alt="" className="w-[30vw] rounded-b-lg shadow-inner slide-up-token" />
        </div>
      </div>
    </section>
  )
}

export default Tokenomic;