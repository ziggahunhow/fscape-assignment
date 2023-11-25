import { Divider as MuiDivider } from "@mui/material";

type DividerProps = {
  my?: number;
};

export const Divider = ({ my }: DividerProps) => {
  return <MuiDivider sx={{ my: my || 2 }} />;
};
