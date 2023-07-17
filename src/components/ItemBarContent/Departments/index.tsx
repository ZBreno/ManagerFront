import Header from "../../Header";
import Accordions from "../../Accordion";
import { useGetDepartment } from "@/hooks/department";
import { Alert, CircularProgress } from "@mui/material";
import { useMessage } from "@/hooks/useMessage";

export default function Departments() {
  const { isLoading: isLoadingDepartment, data: departments } =
    useGetDepartment();
  const { message } = useMessage();
  return (
    <div className="px-10 mt-10">
      <Header title="Departamentos" subtitle="Departamento" page={3} />
      {isLoadingDepartment ? (
        <div className="flex justify-center items-center">
          <CircularProgress size={50} />
        </div>
      ) : (
        <div className="mt-10 flex flex-col">
          {message && message?.screen == "Department" && (
            <Alert className="mb-5" severity={message?.type}>
              {message?.message}
            </Alert>
          )}
          {departments.map(
            (
              {
                name,
                contact,
                assignment,
                location,
                id,
                head,
              }: {
                name: string;
                contact: string;
                assignment: string;
                location: string;
                id: number;
                head: string;
              },
              index: number
            ) => (
              <Accordions
                key={index}
                name={name}
                contact={contact}
                assignment={assignment}
                location={location}
                index={index}
                head={head}
                id={String(id)}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}
