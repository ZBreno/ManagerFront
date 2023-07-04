import { useCallback, useMemo, useState } from "react";
import { createTheme } from "@mui/material";
import { LightTheme, DarkTheme } from "@/themes";


export const useProviderTheme = () => {
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

  return {
    themeName,
    toogleTheme,
    theme,
  }
};
