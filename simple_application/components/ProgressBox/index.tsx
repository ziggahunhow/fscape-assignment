import { Box, Typography } from "@mui/material";

type ProgressBoxProps = {
  action: string;
  description: string;
  percentage: number;
  color: string;
};

export const ProgressBox = ({
  action,
  description,
  percentage,
  color,
}: ProgressBoxProps) => {
  const width = percentage > 100 ? 100 : percentage;
  return (
    <Box
      display="flex"
      sx={{
        border: "1px solid rgba(220, 221, 229)",
        borderRadius: "4px",
        position: "relative",
      }}
      p={1}
      my={2}
    >
      <Box
        sx={{
          bgcolor: color,
          opacity: 0.2,
          width: width + "%",
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0,
        }}
      />
      <Box>
        <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
          {action}
        </Typography>
      </Box>
      <Box ml="auto" display="flex">
        <Typography variant="body1" mr={2}>
          {description}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          {percentage + "%"}
        </Typography>
      </Box>
    </Box>
  );
};
