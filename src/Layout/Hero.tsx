import hero from "../assets/img/dots.gif";

const Hero = () => {
    return(
        <section className="relative overflow-hidden">
            <div className="absolute top-0 right-0 left-0 h-full w-screen overflow-hidden flex items-center justify-center luckiest-guy-regular bg-cover">
                <h1 className="hero_text">Sparky</h1>
            </div>
            <img src={hero} alt="" className="w-full h-[50vw] z-50" />
        </section>
    )
}

export default Hero;