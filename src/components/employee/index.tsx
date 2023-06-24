import { Grid, Typography } from "@mui/material";
import ButtonForm from "../Button";
import { InfoOutlined } from "@mui/icons-material";
interface EmployeeProps {
  name: string;
  department: string;
  lastCheck: string;
  bg: boolean;
}

export default function Employee({
  name,
  department,
  lastCheck,
  bg,
}: EmployeeProps) {
  return (
    <Grid
      container
      className={`py-4 px-4 items-center ${
        bg && "bg-gray-200"
      }`}
    >
      <Grid item xs={3}>
        <Typography className="font-regular text-center text-base text-text-500">
          {name}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className="font-regular text-center text-base text-text-500">
          {department}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className="font-regular text-center text-base text-text-500">
          {lastCheck}
        </Typography>
      </Grid>
      <Grid item xs={3} className="flex justify-center">
        <div className="border border-primary-500 rounded-full   ">
          <ButtonForm
            text={`Informações`}
            startIcon={<InfoOutlined className="text-primary-500" />}
            onClick={() => alert("em breve")}
            style={{ textTransform: "none" }}
            className="bg-transparent text-primary-500 px-6 py-2 text-base "
          />
        </div>
      </Grid>
    </Grid>
  );
}
