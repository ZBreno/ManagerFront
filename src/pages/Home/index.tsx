"use client";
import ButtonForm from "@/components/Button";
import SideBar from "@/components/SIdeBar";
import { useAppThemeContext } from "@/context";
import Grid from "@mui/material/Grid";
import {
  SpaceDashboard,
  ListAlt,
  Chat,
  AnnouncementOutlined,
  Apartment,
} from "@mui/icons-material";
export default function Home() {

  
  
  const options = [
    {
      name: "Dashboard",
      icon: <SpaceDashboard />,
    },
    {
      name: "Funcionários",
      icon: <ListAlt/>,
    },
    {
      name: "Messages",
      icon: <Chat/>,
    },
    {
      name: "Anúncios",
      icon: <AnnouncementOutlined/>,
    },
    {
      name: "Departamentos",
      icon: <Apartment/>,
    },
  ];

  const { toogleTheme } = useAppThemeContext();
  return (
    <main>
      <Grid container>
        <Grid item xs={3}>
          <SideBar options={options}/>
        </Grid>
        <Grid item xs={9}>
        
        
         
        </Grid>
      </Grid>
    
      {/* <ButtonForm
        variant="contained"
        color="error"
        text="Eu não sei"
        onClick={toogleTheme}
      /> */}
    </main>
  );
}
