import React from "react";
import bg from "../assets/img/IMG_6786.webp";
import JupiterTerminal from "../contains/Jupiter";
import { FormProps } from "../types";
import { SwapMode } from "../types/enums";
import BuyNow from "../contains/BuyNow";
import Tooltip from "../contains/temp";

const data: FormProps = {
  swapMode: SwapMode.ExactInOrOut,
  initialAmount: '0',
  fixedAmount: false,
  initialInputMint: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
  fixedInputMint: false,
  initialOutputMint: 'AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR',
  fixedOutputMint: false,
  initialSlippageBps: 0
}

const HowToBuy:React.FC = () => {
  return(
    <div className="relative h-full">
        <img src={bg} alt="background" className="w-full h-[50vw]" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          {/* <BtnGroups /> */}
          {/* <JupiterTerminal
            rpcUrl={"https://docs-demo.solana-mainnet.quiknode.pro/"}
            formProps={data}
            simulateWalletPassthrough={false}
            strictTokenList={false}
            defaultExplorer={"Solscan"}
            useUserSlippage={true}
          /> */}
          <BuyNow />
          <Tooltip />
        </div>
    </div>
  )
}

export default HowToBuy;