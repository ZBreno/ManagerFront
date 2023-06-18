import { createContext, useCallback, useMemo, useState, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { LightTheme, DarkTheme } from "../themes";
import { Box } from "@mui/system";

interface ThemeContextData {
  themeName: "light" | "dark";
  toogleTheme: () => void;
}

interface AppThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext({} as ThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext)
}

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toogleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return createTheme(LightTheme);

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toogleTheme }}>
      <Box height={"100vh"} bgcolor={theme.palette.background.paper}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Box>
    </ThemeContext.Provider>
  );
};
