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
import Header from "@/components/Header";
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
  const options2 = [
    { text: "Justificativa de falta", value: 0 },
    { text: "Atestado", value: 1},
    { text: "Aviso", value: 2 },
    { text: "Demissão", value: 3 },
    { text: "Promoção", value: 4 },
    { text: "Outro", value: 5 },
  ];
  const { toogleTheme } = useAppThemeContext();
  return (
    <main className="bg-white">
      <Grid container>
        <Grid item xs={3}>
          <SideBar options={options}/>
        </Grid>
        <Grid item xs={9}>
        
        
         <Header title="Mensagens" subtitle="Mensagem" options={options2}/>
         
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
