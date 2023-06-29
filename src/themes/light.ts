import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  typography: {
    fontFamily: "poppins",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "&.primary": {
            backgroundColor: "#F5F7F9",
            borderRadius: "8px",
            border: "none",
            color: "#FFFFFF",
            "& fieldset": {
              border: "0px solid",
              ":focus": {
                border: ".5px solid #157AFE",
              },
            },
            "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
              color: "#FFFFFF", // Nova cor do texto
            },
            "& .MuiInputBase-input": {
              color: "#42464D", // Nova cor do texto
              fontWeight: "bold", //
              marginLeft: "8px",
            },
            "& .MuiInputBase-input::placeholder": {
              fontWeight: "500",
            },
          },
          "&.error": {
            backgroundColor: "#F5F7F9",
            borderRadius: "8px",
            border: "none",
            color: "#FFFFFF",
            "& .MuiOutlinedInput-notchedOutline": {
              border: ".5px solid #DF473B",
            },
            "& fieldset": {
              border: ".5px solid #DF473B",
              "&:hover": {
                border: ".5px solid #157AFE", // Nova cor da borda no hover
              },
              ":focus": {
                border: ".5px solid #157AFE",
              },
            },

            "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
              color: "#FFFFFF", // Nova cor do texto
            },
            "& .MuiInputBase-input": {
              color: "#42464D", // Nova cor do texto
              fontWeight: "bold",
              marginLeft: "8px",
            },
            "& .MuiInputBase-input::placeholder": {
              fontWeight: "500",
            },
          },
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
              "::placeholder": { color: "#42464D", opacity: "1" },
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&.secondary": {
            backgroundColor: "none",
            border: "0px solid",
            fontSize: "20px",
            
            color: "#002C66",
           
            "& fieldset": {
              border: "10px solid",
              ":focus": {
                border: "10px solid #157AFE",
              },
            },
            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              border: "0px solid"
            },
          },
          "&.primary": {
            backgroundColor: "#F5F7F9",
            border: "0px solid",
            fontWeight: "bold",
            paddingRight: "12px",
            
           
            color: "#42464D",
           
            "& fieldset": {
              border: "0px solid",
              
            },
            
          },
          "&.error": {
            backgroundColor: "#F5F7F9",
            border: "0px solid",
            fontWeight: "bold",
            paddingRight: "12px",
            
           
            color: "#42464D",
           
            "& fieldset": {
              border: ".5px solid #DF473B",
              
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
