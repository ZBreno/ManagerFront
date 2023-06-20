import { ExpandMore } from "@mui/icons-material";
import Header from "../../Header";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Accordions from "../../Accordion";

export default function Department() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const options = [
    { text: "Rercusos Humanos", value: 0 },
    { text: "Almoxarifado", value: 1 },
    { text: "Administrativo", value: 2 },
  ];
  const departments = [
    {
      name: "Administrativo",
      action:
        "Uma breve descrição da função ou missão do departamento, explicando seu propósito e objetivo dentro da empresa.",
      location: "2° piso, sala 45",
      head: "Fernando Pessoa",
      contact: "recursoshumanos@gmail.com",
    },
    {
      name: "Recursos Humanos",
      action:
        "Uma breve descrição da função ou missão do departamento, explicando seu propósito e objetivo dentro da empresa.",
      location: "2° piso, sala 45",
      head: "Fernando Pessoa",
      contact: "recursoshumanos@gmail.com",
    },
  ];
  return (
    <div className="px-10 mt-10">
      <Header title="Departamentos" subtitle="Departamento"  />
      <div className="mt-10 flex flex-col">
        {departments.map(({ name, contact, head, action, location }, index) => (
          
            <Accordions
              name={name}
              contact={contact}
              head={head}
              action={action}
              location={location}
              index={index}
            />
          
        ))}
      </div>
    </div>
  );
}
