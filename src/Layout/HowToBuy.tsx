import React, { useState } from "react";
import bg from "../assets/img/IMG_6786.webp";
import JupiterTerminal from "../contains/Jupiter";
import { FormProps } from "../types";
import { SwapMode } from "../types/enums";
import raydium from "../assets/img/Radit.webp";
import jupiter from "../assets/img/jupiter.webp";
import address from "../assets/img/address.jpg";
import { toast } from "react-toastify";
import Images from "../contains/Images";

const data: FormProps = {
  swapMode: SwapMode.ExactInOrOut,
  initialAmount: "0",
  fixedAmount: false,
  initialInputMint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
  fixedInputMint: false,
  initialOutputMint: "AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR",
  fixedOutputMint: false,
  initialSlippageBps: 0,
};

const icons = [
  {
    name: "Twiter",
    image: Images.x,
    link: "https://x.com",
  },
  {
    name: "Telegram",
    image: Images.telegram,
    link: "https://t.me",
  },
  {
    name: "Bird",
    image: Images.bird,
    link: "https://birdeye.so",
  },
  {
    name: "DexTools",
    image: Images.dex,
    link: "https://www.dextools.io",
  },
  {
    name: "DexScreener",
    image: Images.dexscrener,
    link: "https://dexscreener.com/",
  },
  {
    name: "SolScan",
    image: Images.solscan,
    link: "https://solscan.io/",
  },
];

const HowToBuy: React.FC = () => {
  const [jupiterModal, setJupiterModal] = useState(false);
  const TokenAddress = "This is the string to copy!";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(TokenAddress)
      .then(() => {
        toast.success("Token address copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy:", err);
      });
  };

  return (
    <div className="relative h-full">
      <img src={bg} alt="background" className="w-full h-[50vw]" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        {/* <BtnGroups /> */}
        {jupiterModal && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#0000009d] flex items-center justify-center z-30">
            <span
              className="text-3xl text-white absolute right-5 top-3 hover:text-red-400 cursor-pointer"
              onClick={() => setJupiterModal(!jupiterModal)}
            >
              &times;
            </span>
            <JupiterTerminal
              rpcUrl={"https://docs-demo.solana-mainnet.quiknode.pro/"}
              formProps={data}
              simulateWalletPassthrough={false}
              strictTokenList={false}
              defaultExplorer={"Solscan"}
              useUserSlippage={true}
            />
          </div>
        )}
        <div className="flex flex-col gap-3">
          <div className="flex justify-around gap-4 items-center px-4 py-1 rounded-[15px] ring-1 ring-white">
            {
                icons.map(item => (
                    <div className="relative group hover:cursor-pointer rounded-full transition-all duration-500">
                        <a href={item.link} target="_blank" rel="noreferrer">
                            <img src={item.image} alt="" className="w-[50px] h-[50px] hover:scale-105 transition" />
                        </a>
                        <div className=" absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                            {item.name}
                        </div>
                    </div>
                ))
            }
          </div>
          <div className="tooltip-container">
            <div className="button-content shadow-md">
              <span className="text">Buy Now</span>
              <span className="share-icon">🎁</span>
            </div>
            <div className="tooltip-content">
              <div className="social-icons">
                <a
                  href="https://raydium.io/swap/"
                  className="social-icon twitter"
                >
                  <img src={raydium} alt="" className="w-[24px] h-[24px]" />
                </a>
                <span
                  className="social-icon facebook"
                  onClick={() => setJupiterModal(!jupiterModal)}
                >
                  <img src={jupiter} alt="" className="w-[24px] h-[24px]" />
                </span>
                <span className="social-icon linkedin" onClick={handleCopy}>
                  <img
                    src={address}
                    alt=""
                    className="w-[24px] h-[24px] rounded"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
