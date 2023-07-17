import { Grid, Typography } from "@mui/material";
import Image from "next/image";


interface EmployeeStatusProps {
  image: string;
  name: string;
  department: string;
  checkin?: string | boolean;
  bg: boolean;
}

export default function EmployeeStatus({
  image,
  name,
  department,
  checkin,
  bg,
}: EmployeeStatusProps) {
  
  return (
    <Grid container className={`py-4 px-4 items-center ${bg && "bg-white"}`}>
      <Grid item xs={3}>
        <div className="flex items-center justify-center">

          <Typography className="font-medium text-center text-base text-text-500">
            {name}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={3}>
        <Typography className="font-medium text-center text-base text-text-500">
          {department}
        </Typography>
      </Grid>
      
      <Grid item xs={3} className="flex justify-center">
      <Typography className={`font-semibold text-center text-base ${checkin ? 'bg-success-100 text-success-400 px-6 py-1 rounded-lg': 'bg-danger-100 text-danger-400 px-6 py-1 rounded-lg'}`}>
            {checkin ? 'Feito' : 'Atrasado'}
          
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className="font-medium text-center text-base text-text-500">
            {checkin ? checkin : '-'}
          
        </Typography>
      </Grid>
    </Grid>
  );
}
