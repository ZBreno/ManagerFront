"use client";
import ButtonForm from "@/components/Button";
import SideBar from "@/components/SideBar";
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
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useAuth } from "@/hooks/useAuth";
import { getAuthToken } from "@/utils/authToken";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(0);

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
    { value: 2, component: <Messages /> },
    { value: 3, component: <Annoucement /> },
    { value: 4, component: <Department /> },
  ];

  const currentComponent = pages.findIndex(
    (item) => item.value === currentPage
  );
  const { themeName } = useTheme();

  return (
    <ProtectedRoute>
      <main className="h-full">
        <Grid
          className={`${pages[currentComponent].value == 0 && "bg-gray-200 "}`}
          container
        >
          <Grid item xs={2}>
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
    </ProtectedRoute>
  );
}
