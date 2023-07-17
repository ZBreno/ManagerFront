import SideBar from "@/components/SideBar";
import { Grid, Typography } from "@mui/material";
import { AccessAlarms } from "@mui/icons-material";
import { useAuth } from "@/hooks/useAuth";
import InputField from "@/components/Input";
import { KeyboardEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useGetEmployeeByCode } from "@/hooks/employee";
import { useEmployee } from "@/hooks/useEmployee";
export default function Company() {
  const options = [{ name: "Terminal de ponto", icon: <AccessAlarms /> }];

  const { user } = useAuth();

  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();
  const { setEmployee } = useEmployee();

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      refetch();
    }
  };

  const {
    isLoading: isLoadingEmployee,
    data: employee,
    refetch,
  } = useGetEmployeeByCode(code);
  
  useEffect(() => {
    setEmployee(false);
  }, []);

  useEffect(() => {
    if (employee) {
      router.push("/employee");
      setEmployee(employee);
    }
    if (!employee && !isLoadingEmployee) {
      setError("Código inválido");
    }
  }, [employee]);
  return (
    <main className="h-full">
      <Grid container>
        <Grid item xs={2}>
          <SideBar currentPage={0} options={options} />
        </Grid>
        <Grid item xs={10}>
          <div className="flex flex-col px-20 h-screen">
            <Typography className="text-text-500 font-bold text-center text-5xl mt-10">
              Bem vindo à {user?.name}
            </Typography>

            <div className="mt-20">
              <InputField
                variant={`${error ? "error" : "primary"}`}
                placeholder="Insira sua credencial"
                label="Código"
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Typography className="text-danger-600 mt-1 text-lg">
                {error}
              </Typography>
            </div>

            <Typography className="mt-10 text-center">
              Após inserir seu código, pressione a tecla “Enter”
            </Typography>
          </div>
        </Grid>
      </Grid>
    </main>
  );
}
