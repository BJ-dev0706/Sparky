import Marquee from "react-fast-marquee";
import one from "../assets/img/IMG_6739.webp";
import three from "../assets/img/a.webp";
import four from "../assets/img/IMG_6786.webp";
import five from "../assets/img/IMG_6801.webp";

const Slider = () => {
    return(
        <section className="w-full flex flex-col items-center justify-center bg-red-500">
            <Marquee direction="right">
                <img src={one} alt="" className="sm:h-[50vh] h-[30vh]" />
                <img src={three} alt="" className="sm:h-[50vh] h-[30vh]" />
                <img src={four} alt="" className="sm:h-[50vh] h-[30vh]" />
                <img src={five} alt="" className="sm:h-[50vh] h-[30vh]" />
            </Marquee>
        </section>
    )
}

export default Slider;