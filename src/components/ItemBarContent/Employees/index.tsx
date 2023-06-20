import { Typography } from "@mui/material";
import Header from "../../Header";
import Employee from "@/components/employee";

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
      lastCheck: "23/08/2023 - 12:00 pm"
    },
    {
      name: "Felippe Rian",
      department: "Front-end",
      lastCheck: "23/08/2023 - 12:00 pm"
    },
    {
      name: "Jose Neto",
      department: "lixeiro",
      lastCheck: "23/08/2023 - 12:00 pm"
    },
  ]

  return (
    <div className="px-10 mt-10">
      <Header title="Funcionários" subtitle="Funcionários" options={options} />
      <div className="flex justify-around mt-10 pb-3 border-b border-text-500">
        <Typography className="font-semibold text-xl text-text-500">Nome</Typography>
        <Typography className="font-semibold text-xl text-text-500">Setor</Typography>
        <Typography className="font-semibold text-xl text-text-500">Ultimo check-in</Typography>
      </div>
      <div>
        {employees.map(({name, department, lastCheck}, index) => 
          <Employee key={index} name={name} department={department} lastCheck={lastCheck}/>
        )}
      </div>
    </div>
  );
}
