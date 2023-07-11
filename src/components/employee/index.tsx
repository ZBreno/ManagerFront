"use client";
import { Grid, Modal, Typography } from "@mui/material";
import ButtonForm from "../Button";
import { InfoOutlined } from "@mui/icons-material";
import { useState } from "react";
import EmployeeInfo from "../MoreInfo/Employee";
interface EmployeeProps {
  id: string;
  department: {
    id: number;
    name: string;
    assignment: string;
    contact: string;
    location: string;
  };
  name: string;
  status: {
    checkin: boolean;
    date?: string;
  };
  email: string;
  birth_date: string;
  head: string;
  assignment: string;
  finger_print: string;
  code: string;
  phone: string;
  bg: boolean;
}

export default function Employee({
  name,
  department,
  status,
  birth_date,
  code,
  email,
  finger_print,
  assignment,
  head,
  id,
  phone,
  bg,
}: EmployeeProps) {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(!open);
  };
  return (
    <Grid container className={`py-4 px-4 items-center ${bg && "bg-gray-200"}`}>
      <Grid item xs={3}>
        <Typography className="font-regular text-center text-base text-text-500">
          {name}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className="font-regular text-center text-base text-text-500">
          {department?.name}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className="font-regular text-center text-base text-text-500">
          {status?.checkin ? status?.date: "-"}
        </Typography>
      </Grid>
      <Grid item xs={3} className="flex justify-center">
        <div className="border border-primary-500 rounded-full   ">
          <ButtonForm
            text={`Informações`}
            startIcon={<InfoOutlined className="text-primary-500" />}
            onClick={() => setOpen(!open)}
            style={{ textTransform: "none" }}
            className="bg-transparent text-primary-500 px-6 py-2 text-base "
          />
          <Modal
              open={open}
              onClose={() => setOpen(!open)}
              aria-labelledby="title12"
            >
              <EmployeeInfo
                handleModal={() => setOpen(!open)}
                name={name}
                assignment={assignment}
                code={code}
                phone={phone}
                birth_date={birth_date}
                department={department.name}
                email={email}
                head={head}
                key={id}
                id={id}
              />
          
            </Modal>
        </div>
      </Grid>
    </Grid>
  );
}
