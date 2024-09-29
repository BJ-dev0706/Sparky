import hero from "../assets/img/dots.gif";

const Hero = () => {
    return(
        <section className="relative">
            <img src={hero} alt="" className="w-full h-[50vw]" />
            <div className="absolute top-0 right-0 left-0 h-full w-full flex items-center justify-center luckiest-guy-regular">
                <h1 className="sign">Sparky</h1>
            </div>
        </section>
    )
}

export default Hero;