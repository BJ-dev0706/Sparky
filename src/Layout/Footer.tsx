import React, { useState, useEffect } from "react";
import dex from "../assets/img/threreallandwolf.svg";
import telegram from "../assets/img/telegram.svg";
import x from "../assets/img/x.svg";
import UpArrow from "../assets/img/arrow-up.svg";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Check if the user has scrolled to the bottom of the page
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    setIsVisible(isAtBottom);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <nav className="navigation fixed bottom-0 left-0 z-[1000] !opacity-100">
      <ul className="navigation_ul">
        <li>
          <a
            href="https://dexscreener.com/solana/AB1eu2L1Jr3nfEft85AuD2zGksUbam1Kr8MR3uM2sjwt"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={dex} alt="dexscreener" />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/solfwog?t=XyaTpxQ1dkrNokXdQGLiHA&amp;s=09l"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={telegram} alt="x" />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/fwogportal"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={x} alt="telegram" />
          </a>
        </li>
      </ul>
      {isVisible && 
        <>
          <div className="footer_disclaimer">
            <p className="text-white">
              Copyright © Sparky || All Rights Reserved.
            </p>
          </div>
          <div className="to_top">
            <a
              id="scroll-top"
              href="#home"
              className="bg-white rounded-full p-1"
            >
              <img src={UpArrow} alt="up" />
            </a>
          </div>
        </>
      }
    </nav>
  );
};

export default Footer;
