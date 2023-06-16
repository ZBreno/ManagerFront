"use client";
import ButtonForm from "@/components/Button";
import Sidebar from "@/components/SIdeBar";
import { useAppThemeContext } from "@/context";
import Grid from "@mui/material/Grid";

export default function Home() {
  const { toogleTheme } = useAppThemeContext();
  return (
    <main>
      <Grid container spacing={2} flexGrow={1}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Sidebar />
        </Grid>
      </Grid>
      <ButtonForm
        variant="contained"
        color="error"
        text="Eu não sei"
        onClick={toogleTheme}
      />
    </main>
  );
}
