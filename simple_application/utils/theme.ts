import { createTheme } from "@mui/material/styles";

const fontFamily = "'Plus Jakarta Sans', sans-serif";

export default createTheme({
  typography: {
    fontFamily,
    h1: {
      fontSize: "24px",
    },
    h2: {
      fontSize: "14px",
      fontWeight: "500",
      margin: "0.5rem 0",
    },
    body1: {
      fontSize: "12px",
    },
    body2: {
      fontSize: "14px",
      fontWeight: "100",
    },
  },
  palette: {
    primary: {
      light: "#48DA82",
      main: "#15B48E",
    },
    secondary: {
      main: "#EF6461",
    },
  },
});

export const colors = {
  lightGray: "#2A2B38",
};
