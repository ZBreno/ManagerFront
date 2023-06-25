import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  typography: {
    fontFamily: "poppins",
  },
  components: {
    
    MuiButton: {
      styleOverrides: {
        root: {
          ".css-1bhsf57-MuiButtonBase-root-MuiButton-root": {
            ":hover":{backgroundColor: '#157AFE'},
          },
        }
       
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // this is styles for the new variants
          "&.search": {
            "& fieldset": {
              border: "0.5px solid rgba(66, 70, 77)",
              ":focus": {
                border: ".5px solid #157AFE",
              },
              borderRadius: "32px",
              "::placeholder": { color: "red" },
            },
            ".css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
              paddingLeft: "24px",
              color: "#42464D",
              "::placeholder": { color: "#42464D", opacity: "1"},
            },
          },
        },
      },
    },
  },
  // components: {
  //   MuiTextField: {
  //     variants: [
  //       {
  //         props: { variant: "filled" },
  //         style: {
  //           ".css-1mcrj8f-MuiInputBase-root-MuiFilledInput-root": {
  //             backgroundColor: "white",

  //             borderRadius: "32px",
  //           },
  //           ".css-1mcrj8f-MuiInputBase-root-MuiFilledInput-root:before": {
  //             content: "none",
  //           },
  //           ".css-1mcrj8f-MuiInputBase-root-MuiFilledInput-root:after": {
  //             content: "none",
  //           },
  //           ".css-1mcrj8f-MuiInputBase-root-MuiFilledInput-root:focus": {
  //             border: "none !important",
  //           },
  //           ".css-1gctnaj-MuiInputBase-input-MuiFilledInput-input": {
  //             backgroundColor: "white",
  //             content: "none",
  //             paddingTop: "16px",
  //             paddingBottom: "16px",
  //             borderRadius: "32px",
  //             paddingLeft: "16px",
  //             "::after": { content: "none" },
  //             "::before": { content: "none" },
  //             border: "0.5px solid rgba(66, 70, 77)",
  //             ":focus": {
  //               border: ".5px solid #157AFE",
  //             },
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // components: {
  //   MuiFilledInput: {
  //     styleOverrides: {
  //       root: {
  //         border: "none",

  //         backgroundColor: "#F5F7F9",
  //         borderRadius: "8px",
  //         "::before": { content: "none" },
  //         "::after": { border: "none" },

  //         ":hover": { border: "none" },
  //         "::placeholder": { fontWeight: "bold" },
  //         ".MuiInputBase-input": {
  //           paddingTop: "16px",
  //           paddingBottom: "16px",
  //           paddingLeft: "16px",
  //           fontWeight: "bold",
  //           // ":focus": {border: "1px solid #157AFE "},

  //         },
  //       },
  //     },
  //   },
  // },
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
