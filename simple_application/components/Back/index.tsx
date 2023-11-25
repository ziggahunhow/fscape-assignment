import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography } from "@mui/material";

export const Back = () => {
  return (
    <Box display="flex" alignItems="center" mb={2}>
      <ArrowBackIcon sx={{ pr: 1 }} />
      <Typography variant="body1">Back</Typography>
    </Box>
  );
};
