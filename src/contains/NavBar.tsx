import { useState } from "react";
import { motion } from "framer-motion";

interface Tab {
    name: string;
    color: string;
    id: string; // Add an id for each tab
}

const tabs: Tab[] = [
    { name: "Home", color: "#f00", id: "home" },
    { name: "About", color: "#0c0", id: "about" },
    { name: "HowToBuy", color: "#f90", id: "howtobuy" },
    { name: "Tokenomic", color: "#b1f", id: "tokenomic" },
];

const duration = 0.3;

const Navbar: React.FC = () => {
    const [selected, setSelected] = useState<number>(0);
    const [formerColor, setFormerColor] = useState<string>(tabs[0].color);

    return (
        <div className="relative rounded-3xl bg-black bg-opacity-20 md:p-2 p-1 flex">
            {tabs.map(({ name, color, id }, i) => (
                <motion.div
                    className="relative md:h-8 h-5 md:px-4 px-2 m-0 font-sans md:text-lg text-sm font-bold text-gray-800 cursor-pointer flex items-center"
                    key={i}
                    initial={{ color: i === selected ? "#fff" : "#222" }}
                    animate={{ color: i === selected ? "#fff" : "#222" }}
                    transition={{ duration }}
                    onTap={() => {
                        setFormerColor(tabs[selected].color);
                        setSelected(i);
                    }}
                >
                    <a href={`#${id}`}>
                        <span className="relative z-10">{name}</span>
                    </a>
                    {i === selected && (
                        <motion.div
                            className="absolute inset-0 rounded-lg"
                            layoutId="selected"
                            initial={{ backgroundColor: formerColor }}
                            animate={{ backgroundColor: color }}
                            transition={{ duration }}
                        />
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default Navbar;
