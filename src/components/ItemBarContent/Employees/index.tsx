import { CircularProgress, Grid, Typography } from "@mui/material";
import Header from "../../Header";
import Employee from "@/components/Employee";
import HeaderTable from "@/components/HeaderTable";
import { useGetEmployee } from "@/hooks/employee";

export default function Employees() {
  const options = [
    { text: "Rercusos Humanos(RH)", value: 0 },
    { text: "Almoxarifado", value: 1 },
    { text: "Administrativo", value: 2 },
  ];

  const employees = [
    {
      name: "Breno Soares",
      department: "Front-end",
      lastCheck: "23/08/2023 - 12:00 pm",
    },
    {
      name: "Felippe Rian",
      department: "Front-end",
      lastCheck: "23/08/2023 - 12:00 pm",
    },
    {
      name: "Jose Neto",
      department: "lixeiro",
      lastCheck: "23/08/2023 - 12:00 pm",
    },
  ];

  const {isLoading: isLoadingEmployee, data: employeess} = useGetEmployee()
 
  const columns = ['Nome', 'Setor', 'Ultimo check-in', 'Detalhes']
  return (
    <div className="px-10 mt-10">
      <Header title="Funcionários" subtitle="Funcionários" options={options}  page={1}/>
      {isLoadingEmployee ? (
        <div className="flex justify-center items-center mt-10">
          <CircularProgress />
        </div>
      ) : (
        <div className="mt-10">
        <HeaderTable columns={columns}/>
        <div>
          {employeess.map(({ id, department, status,name, email, birth_date,  head,assignment, finger_print, code, phone}, index) => (
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
          ))}
        </div>
      </div>
      )}
      
    </div>
  );
}
