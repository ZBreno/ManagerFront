import { Grid, Typography } from "@mui/material";
import Header from "../../Header";
import Employee from "@/components/Employee";
import HeaderTable from "@/components/HeaderTable";

export default function Employees() {
  const options = [
    { text: "Rercusos Humanos", value: 0 },
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

  const columns = ['Nome', 'Setor', 'Ultimo check-in', 'Detalhes']
  return (
    <div className="px-10 mt-10">
      <Header title="Funcionários" subtitle="Funcionários" options={options}  page={1}/>
      <div className="mt-10">
        <HeaderTable columns={columns}/>
        <div>
          {employees.map(({ name, department, lastCheck }, index) => (
            <Employee
              key={index}
              name={name}
              department={department}
              lastCheck={lastCheck}
              bg={index % 2 == 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
