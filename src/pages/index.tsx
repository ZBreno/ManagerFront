"use client";
import ButtonForm from "@/components/Button";
import SideBar from "@/components/SIdeBar";
import { useAppThemeContext } from "@/context";
import { Grid } from "@mui/material";
import {
  SpaceDashboard,
  ListAlt,
  Chat,
  AnnouncementOutlined,
  Apartment,
} from "@mui/icons-material";

import Header from "@/components/Header";
import Messages from "@/components/ItemBarContent/Messages";
import Dashboard from "@/components/ItemBarContent/Dashboard";
import Employees from "@/components/ItemBarContent/Employees";
import Annoucement from "@/components/ItemBarContent/Annoucements";
import Department from "@/components/ItemBarContent/Departments";
import { useState } from "react";
export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const messages = [
    {
      title: "string",
      sender: "Foi eu",
      department: "Ninguem sabe",
      type: "ATESTADO",
    },
    {
      title: "string",
      sender: "Foi eu",
      department: "Ninguem sabe",
      type: "AVISO",
    },
    {
      title: "string",
      sender: "Foi eu",
      department: "Ninguem sabe",
      type: "JUSTIFICATIVA_DE_FALTA",
    },
    {
      title: "string",
      sender: "Foi eu",
      department: "Ninguem sabe",
      type: "DEMISSAO",
    },
    {
      title: "string",
      sender: "Foi eu",
      department: "Ninguem sabe",
      type: "PROMOCAO",
    },
    {
      title: "string",
      sender: "Foi eu",
      department: "Ninguem sabe",
      type: "OUTRO",
    },
  ];
  const options = [
    {
      name: "Dashboard",
      icon: <SpaceDashboard />,
    },
    {
      name: "Funcionários",
      icon: <ListAlt />,
    },
    {
      name: "Messages",
      icon: <Chat />,
    },
    {
      name: "Anúncios",
      icon: <AnnouncementOutlined />,
    },
    {
      name: "Departamentos",
      icon: <Apartment />,
    },
  ];

  const pages = [
    { value: 0, component: <Dashboard /> },
    { value: 1, component: <Employees /> },
    { value: 2, component: <Messages messages={messages} /> },
    { value: 3, component: <Annoucement /> },
    { value: 4, component: <Department /> },
  ];

  const currentComponent = pages.findIndex(
    (item) => item.value === currentPage
  );
  const { toogleTheme } = useAppThemeContext();
  return (
    <main className="h-full">
      <Grid
        className={`${pages[currentComponent].value == 0 && "bg-gray-200 "}`}
        container
        
      >
        <Grid item xs={2} >
          <SideBar
            options={options}
            currentPage={currentPage}
            onPress={setCurrentPage}
          />
        </Grid>
        <Grid item xs={10} className="h-full">
          {pages[currentComponent].component}
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
