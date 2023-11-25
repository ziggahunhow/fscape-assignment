import { configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

export const VotingAddress = "0x0702c3E122D774352075fCCd27F4C12acD807b1a";
export const rpcUrl = "https://rpc-mumbai.maticvigil.com";
export const chains = configureChains(
  [
    {
      id: 80001,
      name: "Mumbai",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      network: "mumbai",
      rpcUrls: {
        default: {
          http: [rpcUrl],
        },
        public: {
          http: [rpcUrl],
        },
      },
    },
  ],
  [publicProvider()]
);
