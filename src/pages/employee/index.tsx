import CheckIn from "@/components/ItemBarContent/CheckIn";
import Messages from "@/components/ItemBarContent/Messages";
import SideBar from "@/components/SideBar";
import { useGetEmployeeByCode } from "@/hooks/employee";
import { useEmployee } from "@/hooks/useEmployee";
import { AccessAlarms, Chat } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Employee() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const options = [
    { name: "Terminal de ponto", icon: <AccessAlarms /> },
    {
      name: "Mensagens",
      icon: <Chat />,
    },
  ];
  const pages = [
    { value: 0, component: <CheckIn /> },
    { value: 1, component: <Messages /> },
  ];
  const currentComponent = pages.findIndex(
    (item) => item.value === currentPage
  );

  const { employee } = useEmployee();

  return (
    <main className="h-full">
      <Grid
        container
        className={`${pages[currentComponent].value == 0 && "bg-gray-200 "}`}
      >
        <Grid item xs={2}>
          <SideBar
            currentPage={currentComponent}
            options={options}
            onPress={setCurrentPage}
            employees
          />
        </Grid>
        <Grid item xs={10}>
          {pages[currentComponent].component}
        </Grid>
      </Grid>
    </main>
  );
}
