import Marquee from "react-fast-marquee";
import one from "../assets/img/IMG_6739.webp";
import three from "../assets/img/a.webp";
import four from "../assets/img/IMG_6786.webp";
import five from "../assets/img/IMG_6801.webp";

const Slider = () => {
    return(
        <section className="w-full flex flex-col items-center justify-center bg-red-500">
            <Marquee direction="right">
                <img src={one} alt="" className="" />
                <img src={three} alt="" />
                <img src={four} alt="" />
                <img src={five} alt="" />
            </Marquee>
        </section>
    )
}

export default Slider;