import { Grid, Typography } from "@mui/material";

interface HeaderTableProps {
  columns: string[];
}

export default function HeaderTable({ columns }: HeaderTableProps) {
  return (
    <Grid container className="py-3 flex px-4 bg-primary-500 rounded-t-lg">
      {columns.map((column, index) => (
        <Grid key={index} item xs={12 / columns.length}>
          <Typography className="font-medium text-center text-base text-white">
            {column}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
