import { CircularProgress, Grid, Typography } from "@mui/material";
import Header from "../../Header";
import Employee from "@/components/Employee";
import HeaderTable from "@/components/HeaderTable";
import { useGetEmployee } from "@/hooks/employee";
import { useGetDepartment } from "@/hooks/department";

export default function Employees() {
  interface Employee {
    id: string;
    department: {
      id: number;
      name: string;
      assignment: string;
      contact: string;
      location: string;
    };
    name: string;
    status: {
      checkin: boolean;
      date?: string;
    };
    email: string;
    birth_date: string;
    head: string;
    assignment: string;
    finger_print: string;
    code: string;
    phone: string;
    bg: boolean;
  }
  const options = [
    { text: "Rercusos Humanos(RH)", value: 0 },
    { text: "Almoxarifado", value: 1 },
    { text: "Administrativo", value: 2 },
  ];

  const {
    isLoading: isLoadingEmployee,
    data: employees,
  }: { isLoading: boolean; data: Employee[] | undefined } = useGetEmployee();

  const { isLoading: isLoadingDepartment, data: departments } =
    useGetDepartment();
    
  const columns = ["Nome", "Setor", "Ultimo check-in", "Detalhes"];
  return (
    <div className="px-10 mt-10">
      {isLoadingDepartment ? (
        <div className="flex justify-center items-center mt-10">
          <CircularProgress />
        </div>
      ) : (
        <Header
          title="Funcionários"
          subtitle="Funcionários"
          options={departments.map(
            ({ id, name }: { id: number; name: string }) => ({
              value: id,
              text: name,
            })
          )}
          page={1}
        />
      )}

      {isLoadingEmployee ? (
        <div className="flex justify-center items-center mt-10">
          <CircularProgress />
        </div>
      ) : (
        <div className="mt-10">
          <HeaderTable columns={columns} />
          <div>
            {employees &&
              employees.map(
                (
                  {
                    id,
                    department,
                    status,
                    name,
                    email,
                    birth_date,
                    head,
                    assignment,
                    finger_print,
                    code,
                    phone,
                  }: Employee,
                  index: number
                ) => (
                  <Employee
                    key={index}
                    name={name}
                    department={department}
                    status={status}
                    id={String(id)}
                    email={email}
                    birth_date={birth_date}
                    head={head}
                    assignment={assignment}
                    finger_print={finger_print}
                    code={code}
                    phone={phone}
                    bg={index % 2 == 0}
                  />
                )
              )}
          </div>
        </div>
      )}
    </div>
  );
}
