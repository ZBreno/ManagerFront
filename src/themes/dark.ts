import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  typography: {
    fontFamily: "poppins",
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          border: "2px solid #981"
        },
      },
    },
  },
  palette: {
    primary: {
      main: "rgba(21, 122, 254, 1)",
      dark: "rgba(21, 122, 254, 1 )",
      light: "rgba(21, 122, 254, 1    )",
      contrastText: "#fff",
    },
    error: {
      main: "#FFDDDA",
      dark: "#FFDDDA",
      light: "#FFDDDA",
      contrastText: "#FF6B60",
    },
    success: {
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
      default: "#081c3c",
      paper: "#202124",
    },
  },
});
