import { Box, Typography } from "@mui/material";
import { Back } from "../Back";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Header = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box ml="auto">
        <ConnectButton />
      </Box>
      <Box display="flex" flexDirection="column">
        <Back />
        <Box display="flex" mb={1}>
          <Typography variant="h1" mr={2} fontWeight={500}>
            Lorem ipsum dolor sit amet
          </Typography>
          <Box
            bgcolor="primary.light"
            sx={{
              color: "white",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: "6px",
              py: "4px",
            }}
          >
            Active
          </Box>
        </Box>
        <Typography variant="body1">Active ends in : 2 days </Typography>
      </Box>
    </Box>
  );
};
