import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  typography: {
    fontFamily: 'poppins',
  },
  palette: {
    primary: {
      main: "#157AFE",
      contrastText: "#fff",
    },
    error: {
      main: "#FFDDDA",
      dark: "#FFDDDA",
      light: "#FFDDDA",
      contrastText: "#FF6B60",
    },
    warning: {
      main: "#FFDDDA",
      dark: "#FFDDDA",
      light: "#FFDDDA",
      contrastText: "#FF6B60",
    },
    neutral: {
      main: "#42464D",
    },
    background: {
      default: "#FCFBFD",
      paper: "#fff",
    },
  },
});
