import Header from "../../Header";
import Accordions from "../../Accordion";

export default function Departments() {
  
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
