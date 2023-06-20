import { Typography } from "@mui/material";
import ButtonForm from "../Button";

interface EmployeeProps {
  name: string;
  department: string;
  lastCheck: string;
}

export default function Employee({
  name,
  department,
  lastCheck,
}: EmployeeProps) {
  return (
    <div className="flex justify-between mt-6 items-center flex-wrap">
      <div  className="min-w-[250px]">
        <Typography>{name}</Typography>
      </div>
      <div className="min-w-[250px]">
        <Typography>{department}</Typography>
      </div>
      <div className="min-w-[250px]">
        <Typography>{lastCheck}</Typography>
      </div>

      <ButtonForm
        text={`Visualizar`}
        onClick={() => alert("em breve")}
        style={{ textTransform: "none" }}
        className="bg-primary-500 text-white hover:bg-primary-500 px-6 py-2  rounded-sm text-base "
      />
    </div>
  );
}
