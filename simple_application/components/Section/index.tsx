import { Box } from "@mui/material";

export const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box bgcolor="white" my={1} p={3} sx={{ borderRadius: "12px" }}>
      {children}
    </Box>
  );
};
