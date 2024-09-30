import React from "react";
import bg from "../assets/img/textend.png";
import Footer from "./Footer";

const End: React.FC = () => {
  return (
    <section className="relative h-full" id="howtobuy">
      <img src={bg} alt="background" className="w-full h-[50vw]" />
      <Footer />
    </section>
  );
};

export default End;
