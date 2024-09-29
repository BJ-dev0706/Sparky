import React from "react";
import raydium from "../assets/img/Radit.webp";
import jupiter from "../assets/img/jupiter.webp";
import address from "../assets/img/address.jpg";

const BuyNow: React.FC = () => {
    return (
        <div>
            <div className="tooltip-container">
                <div className="button-content shadow-md">
                    <span className="text">Buy Now</span>
                    <span className="share-icon">🎁</span>
                </div>
                <div className="tooltip-content">
                    <div className="social-icons">

                        <a href="/https://raydium.io/swap/" className="social-icon twitter">
                            <img src={raydium} alt="" className="w-[24px] h-[24px]" />
                        </a>
                        <span className="social-icon facebook">
                            <img src={jupiter} alt=""  className="w-[24px] h-[24px]" />
                        </span>
                        <span className="social-icon linkedin">
                            <img src={address} alt=""  className="w-[24px] h-[24px] rounded" />                            
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;
