"use client";
import { Button, Modal, Typography } from "@mui/material";
import { Circle, Add, Search, KeyboardArrowDown } from "@mui/icons-material";
import SelectField from "../Select";
import ButtonForm from "../Button";
import InputField from "../Input";
import { useState } from "react";
import ModalForm from "../Modal";
import EmployeeForm from "../EmployeeForm";
import MessageForm from "../MessageForm";
import DepartmentForm from "../DepartmentForm";
interface Option {
  text: string;
  value: number;
}

interface HeaderProps {
  options?: Option[];
  title: string;
  subtitle: string;
  page?: number;
}
export default function Header({
  options,
  title,
  subtitle,
  page,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  console.log(open);
  const handleModal = () => {
    setOpen(!open);
  };
  const forms = [
    { page: <EmployeeForm handleModal={() => setOpen(!open)} /> },
    { page: <MessageForm /> },
    { page: <DepartmentForm /> },
  ];
  return (
    <div>
      <div className="flex justify-between  items-center">
        <div className="flex flex-col">
          <Typography className="text-primary-500 text-3xl font-bold">
            {title}
          </Typography>
          <div className="flex items-center">
            <Typography className="mr-3 text-text-600 text-xl">
              {subtitle}
            </Typography>
            <Circle className="text-text-600" sx={{ width: 8, height: 8 }} />
            {options ? (
              <div>
                <SelectField
                  variant="secondary"
                  options={options}
                  onChange={() => alert('meu deus deu certo')}
                />
              </div>
            ) : (
              <Typography className="ml-3 text-text-600 text-xl">
                Visão geral
              </Typography>
            )}
          </div>
        </div>
        {title !== "Dashboard" && (
          <div>
            <ButtonForm
              text={`Criar ${subtitle.toLowerCase()}`}
              onClick={() => setOpen(!open)}
              startIcon={<Add />}
              style={{ textTransform: "none" }}
              className="bg-primary-500 text-white hover:bg-primary-500 px-6 py-2  font-medium rounded-sm text-base"
            />
            <ModalForm hide={open} />
            <Modal
              open={open}
              onClose={() => setOpen(!open)}
              aria-labelledby="title"
            >
              {page ? forms[page - 1].page : <></>}
            </Modal>
          </div>
        )}
      </div>
      {subtitle != "Dashboard" && (
        <form className="mt-10">
          <InputField
            variant="search"
            placeholder={`Busque aqui suas ${title.toLowerCase()}`}
            onChange={() => alert('meu deus, deu certo')}
            InputProps={{
              endAdornment: (
                <Search
                  className="text-primary-500 "
                  sx={{ width: 24, height: 24 }}
                />
              ),
            }}
          />
        </form>
      )}
    </div>
  );
}
