import React, { useState } from "react";
import { Page } from "framer";
import { motion } from "framer-motion";
import one from "../assets/img/IMG_6739.webp";
import two from "../assets/img/hero.webp";
import three from "../assets/img/a.webp";
import four from "../assets/img/IMG_6786.webp";
import five from "../assets/img/IMG_6801.webp";

const pages: { image: string; description: string }[] = [
    { image: one, description: "" },
    { image: two, description: "" },
    { image: three, description: "" },
    { image: four, description: "" },
    { image: five, description: "" },
];

const indicatorSize = 10;
const indicatorPadding = 10;
const indicatorWidth = pages.length * indicatorSize;
const indicatorPaddingTotal = (pages.length - 1) * indicatorPadding;
const indicatorWidthTotal = indicatorWidth + indicatorPaddingTotal;
const indicatorAlpha = 0.3;

interface ExampleProps {}

const Crausel: React.FC<ExampleProps> = () => {
    const [current, setCurrent] = useState<number>(0);

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <Page
                center
                currentPage={current}
                onChangePage={(current) => setCurrent(current)}
                className="!h-full !w-full"
            >
                {pages.map((page, index) => (
                    <div className="w-full h-full flex justify-center items-center" key={index}>
                        <img
                            src={page.image}
                            alt={`Slide ${index + 1}`}
                            className="object-cover w-full h-full"
                        />
                    </div>
                ))}
            </Page>

            {pages.map((_, index) => (
                <motion.div
                    role="button"
                    aria-label={`Go to page ${index + 1}`}
                    tabIndex={0}
                    style={{
                        width: indicatorSize,
                        height: indicatorSize,
                        borderRadius: 30,
                        backgroundColor: "#fff",
                        position: "absolute",
                        top: "calc(50% + 100px)",
                        left: `calc(50% + ${index} * ${indicatorSize + indicatorPadding}px)`,
                        x: -indicatorWidthTotal / 2,
                        opacity: indicatorAlpha,
                        cursor: "pointer",
                    }}
                    animate={{
                        opacity: current === index ? 1 : indicatorAlpha,
                    }}
                    onTap={() => setCurrent(index)}
                    onKeyDown={(e) => e.key === 'Enter' && setCurrent(index)} // Allow keyboard navigation
                    key={index}
                />
            ))}
        </div>
    );
};

export default Crausel;

