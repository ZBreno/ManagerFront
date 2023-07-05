import { createContext } from "react";

import { useProviderTheme } from "@/hooks/useProviderTheme";
import { ThemeProvider } from "@mui/system";

type ThemeContextType = ReturnType<typeof useProviderTheme>;

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider = ({ children }: ThemeProviderProps) => {

  const { theme } = useProviderTheme();
  

  return (
    <ThemeContext.Provider value={useProviderTheme()}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
