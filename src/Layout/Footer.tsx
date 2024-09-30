import React from "react";

const Footer: React.FC = () => {
  return (
    <nav className="navigation">
      <ul className="navigation_ul">
        <li>
          <a
            href="https://dexscreener.com/solana/AB1eu2L1Jr3nfEft85AuD2zGksUbam1Kr8MR3uM2sjwt"
            className="link"
            target="_blank"
          >
            <img src="./assets/threreallandwolf.svg" alt="dexscreener" />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/solfwog?t=XyaTpxQ1dkrNokXdQGLiHA&amp;s=09l"
            className="link"
            target="_blank"
          >
            <img src="./assets/x.svg" alt="x" />
          </a>
        </li>
        <li>
          <a href="https://t.me/fwogportal" className="link" target="_blank">
            <img src="./assets/telegram.svg" alt="telegram" />
          </a>
        </li>
      </ul>
      <div className="footer_disclaimer">
        <p className="disclaimer"></p>
        <p className="disclaimer">Copyright © Sparky || All Rights Reserved.</p>
      </div>
      <div className="to_top">
        <p>To the top</p>
        <a id="scroll-top" href="#hero" className="btn">
          <img src="./assets/arrow-up.svg" alt="up" />
        </a>
      </div>
    </nav>
  );
};

export default Footer;
