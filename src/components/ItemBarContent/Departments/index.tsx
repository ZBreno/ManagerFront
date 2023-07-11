import Header from "../../Header";
import Accordions from "../../Accordion";
import { useGetDepartment } from "@/hooks/department";
import { CircularProgress } from "@mui/material";

export default function Departments() {
  const { isLoading: isLoadingDepartment, data: departments } =
    useGetDepartment();

  return (
    <div className="px-10 mt-10">
      <Header title="Departamentos" subtitle="Departamento" page={3} />
      {isLoadingDepartment ? (
        <div className="flex justify-center items-center">
          <CircularProgress size={50} />
        </div>
      ) : (
        <div className="mt-10 flex flex-col">
          {departments.map(
            ({ name, contact, assignment, location, id } : {name: string; contact: string; assignment: string; location: string, id: number}, index : number) => (
              <Accordions
                key={index}
                name={name}
                contact={contact}
                assignment={assignment}
                location={location}
                index={index}
                id={String(id)}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}
