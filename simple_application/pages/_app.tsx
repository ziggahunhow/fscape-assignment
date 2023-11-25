import { Header } from "../components/Header";
import { Voting } from "../components/Voting";
import { VotingResult } from "../components/VotingResult";
import { Box, ThemeProvider } from "@mui/material";
import theme from "../utils/theme";
import { Description } from "../components/Description";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { createConfig, WagmiConfig } from "wagmi";
import { chains } from "../utils/web3";
import "../styles/globals.css";

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: chains.chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient: chains.publicClient,
});

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains.chains}>
        <Box
          display="flex"
          flexDirection="column"
          sx={{ p: 20, maxWidth: "844px" }}
        >
          <ThemeProvider theme={theme}>
            <Header />
            <Voting />
            <VotingResult />
            <Description />
          </ThemeProvider>
        </Box>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
