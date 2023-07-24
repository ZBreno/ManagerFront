"use client";
import { Button, Modal, Typography } from "@mui/material";
import { Circle, Add, Search, KeyboardArrowDown } from "@mui/icons-material";
import SelectField from "../Select";
import ButtonForm from "../Button";
import InputField from "../Input";
import { useEffect, useState } from "react";
import ModalForm from "../Modal";
import EmployeeForm from "../EmployeeForm";
import MessageForm from "../MessageForm";
import DepartmentForm from "../DepartmentForm";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGetFilterEmployee } from "@/hooks/employee";
import { useGetFilterMessage } from "@/hooks/message";
import { useGetFilterDepartment } from "@/hooks/department";
import Link from "next/link";

interface Option {
  text: string;
  value: any;
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
  const [name, setName] = useState("");
  const [selected, setSelected] = useState(
    options && options.length > 0 ? options[0].value : ""
  );
  const forms = [
    { page: <EmployeeForm handleModal={() => setOpen(!open)} /> },
    { page: <MessageForm handleModal={() => setOpen(!open)} /> },
    { page: <DepartmentForm handleModal={() => setOpen(!open)} /> },
  ];
  console.log(options);
  const optionsValue = {
    id: options && options.length > 0 ? options[0].value : "",
    name: name,
  };
  const [value, setValue] = useState(optionsValue);
  const [valueDepartment, setValueDepartment] = useState("");

  const { refetch: refetchEmployee } = useGetFilterEmployee(value);
  const { refetch: refetchMessage } = useGetFilterMessage(value);
  const { refetch: refetchDepartment } =
    useGetFilterDepartment(valueDepartment);

  const { control } = useForm();
  useEffect(() => {
    if (page == 1 && optionsValue) {
      refetchEmployee();
    }
    if (page == 2 && optionsValue) {
      refetchMessage();
    }
    if (page == 3) {
      refetchDepartment();
    }
  }, [value, valueDepartment]);

  const token = localStorage.getItem("auth-token-dve");

  return (
    <div>
      <div className="flex justify-between items-center">
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
                <Controller
                  name="title"
                  control={control}
                  defaultValue={value.id}
                  render={({ field }) => (
                    <SelectField
                      variant="secondary"
                      options={options}
                      {...field}
                      onChange={(event) => {
                        setValue({ id: event.target.value, name: value.name }),
                          field.onChange(event.target.value);
                      }}
                    />
                  )}
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
            {page !== 4 ? (
              <div>
                <ButtonForm
                  text={`Criar ${subtitle.toLowerCase()}`}
                  onClick={() => setOpen(!open)}
                  startIcon={<Add />}
                  style={{ textTransform: "none" }}
                  className="bg-primary-500 text-white hover:bg-primary-500 px-6 py-2  font-medium rounded-sm text-base"
                />

                <Modal
                  open={open}
                  onClose={() => setOpen(!open)}
                  aria-labelledby="title"
                >
                  {page ? forms[page - 1].page : <></>}
                </Modal>
              </div>
            ) : (
              <a target="_blank" href={`http://localhost:3001/announcement_create?token=${token}`} className="font-poppins flex items-center bg-primary-500 text-white py-2 font-medium rounded-sm text-base px-3 pr-4"><Add className="mr-2"/> Criar anúncio</a>
            )}
          </div>
        )}
      </div>
      {subtitle == "Dashboard" || title == "Anúncios" ? null : (
        <form className="mt-10">
          <InputField
            variant="search"
            placeholder={`Busque aqui suas ${title.toLowerCase()}`}
            onChange={(e) => {
              page === 3
                ? setValueDepartment(e.target.value)
                : setValue({ id: value.id, name: e.target.value });
            }}
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
