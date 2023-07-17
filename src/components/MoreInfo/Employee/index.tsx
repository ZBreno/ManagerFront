import { CircularProgress, Modal, Typography } from "@mui/material";
import ButtonForm from "@/components/Button";
import { Close } from "@mui/icons-material";
import InputField from "@/components/Input";
import SelectField from "@/components/Select";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDeleteEmployee, usePatchEmployee } from "@/hooks/employee";
import { useEffect, useState } from "react";
import RadioField from "@/components/Radio";
import { useGetDepartment } from "@/hooks/department";
import { useMessage } from "@/hooks/useMessage";

interface IEmployeeInfoProps {
  id: string;
  name: string;
  assignment: string;
  email: string;
  head: string;
  department: string;
  birth_date: string;
  code: string;
  phone: string;
  handleModal: () => void;
}

export default function EmployeeInfo({
  handleModal,
  name,
  assignment,
  birth_date,
  code,
  department,
  email,
  head,
  phone,
  id,
}: IEmployeeInfoProps) {
  interface options {
    text: string;
    value: number;
  }

  const optionsRadio = [
    { text: "Sim", value: "SIM" },
    { text: "Não", value: "NAO" },
  ];
  const [canEdit, setCanEdit] = useState(true);

  const { isLoading: isLoadingDepartment, data: departments } =
    useGetDepartment();

  const schema = yup
    .object({
      name: yup.string().required("Este campo é obrigatório"),
      email: yup
        .string()
        .email("E-mail inválido")
        .required("Este campo é obrigatório"),
      birthDate: yup.string().required("Este campo é obrigatório"),
      department: yup.number(),
      assignment: yup.string().required("Este campo é obrigatório"),
      head: yup.string().required("Este campo é obrigatório"),
      phone: yup.string().required("Este campo é obrigatório"),
      code: yup.string().required("Este campo é obrigatório"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const patchEmployee = usePatchEmployee();
  const { setMessage } = useMessage();
  const onSubmit = handleSubmit((data) => {
    if (!canEdit) {
      patchEmployee.mutate(
        { id: id, data: data },
        {
          onSuccess: () => {
            setMessage({
              screen: "Employee",
              message: "Funcionário editado com sucesso.",
              type: "success",
            });
            handleModal();
          },
          onError: (err) => {
            setMessage({
              screen: "Employee",
              message: "A ação não pôde ser concluída.",
              type: "error",
            });
            handleModal();
          },
        }
      );
    }
    setCanEdit(!canEdit);
  });
  const findDepartment = () => {
    const element = departments.find((d: any) => d.name == department);

    if(element){
      return element.id
    }
    
  };
  const deleteEmployee = useDeleteEmployee();
  const handleDeleteEmployee = () => {
    deleteEmployee.mutate(id, {
      onSuccess: () => {
        setMessage({
          screen: "Employee",
          message: "Funcionário exluído com sucesso.",
          type: "success",
        });
        handleModal();
      },
      onError: (err) => {
        setMessage({
          screen: "Employee",
          message: "A ação não pôde ser concluída.",
          type: "error",
        });
        handleModal();
      },
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="bg-white w-[40%] min-w-[450px] rounded-lg -translate-x-1/2 -translate-y-2/4 absolute top-[50%] left-[50%] p-6">
        {isLoadingDepartment ? (
          <div className="flex justify-center items-center">
            <CircularProgress size={50} />
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <Typography className="font-semibold text-xl ">{name}</Typography>
              <ButtonForm
                onClick={handleModal}
                className="hover:bg-opacity-0 hover:bg-white p-0 min-w-[24px] "
              >
                <Close className="text-primary-500 " />
              </ButtonForm>
            </div>
            <div className="flex flex-col mb-10 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue={name}
                    render={({ field }) => (
                      <InputField
                        variant={`${
                          errors.name?.message ? "error" : "primary"
                        }`}
                        {...field}
                        disabled={canEdit}
                        placeholder="Digite aqui"
                        label="Nome"
                      />
                    )}
                  />
                  <Typography className="text-danger-600 mt-1">
                    {errors.name?.message}
                  </Typography>
                </div>
                <div>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue={email}
                    render={({ field }) => (
                      <InputField
                        variant={`${
                          errors.email?.message ? "error" : "primary"
                        }`}
                        {...field}
                        disabled={canEdit}
                        placeholder="Digite aqui"
                        label="Email"
                      />
                    )}
                  />
                  <Typography className="text-danger-600 mt-1">
                    {errors.email?.message}
                  </Typography>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Controller
                    name="birthDate"
                    control={control}
                    defaultValue={birth_date}
                    render={({ field }) => (
                      <InputField
                        type="date"
                        variant={`${
                          errors.birthDate?.message ? "error" : "primary"
                        }`}
                        {...field}
                        disabled={canEdit}
                        placeholder="Digite aqui"
                        label="Data de nascimento"
                      />
                    )}
                  />
                  <Typography className="text-danger-600 mt-1">
                    {errors.birthDate?.message}
                  </Typography>
                </div>
                <div>
                  <Controller
                    name="department"
                    control={control}
                    defaultValue={findDepartment()}
                    render={({ field }) => (
                      <SelectField
                        variant={`${
                          errors.department?.message ? "error" : "primary"
                        }`}
                        options={departments.map(
                          ({ id, name }: { id: number; name: string }) => ({
                            value: id,
                            text: name,
                          })
                        )}
                        label="Departamento"
                        {...field}
                        disabled={canEdit}
                        onChange={(event) =>
                          field.onChange(Number(event.target.value))
                        }
                      />
                    )}
                  />
                  <Typography className="text-danger-600 mt-1">
                    {errors.department?.message}
                  </Typography>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Controller
                    name="head"
                    control={control}
                    defaultValue={head.toUpperCase()}
                    render={({ field }) => (
                      <RadioField
                        variant={`${
                          errors.head?.message ? "error" : "primary"
                        }`}
                        {...field}
                        disable={canEdit}
                        options={optionsRadio}
                        onChange={(event) => field.onChange(event.target.value)}
                        placeholder="Digite aqui"
                        label="Responsável"
                      />
                    )}
                  />
                  <Typography className="text-danger-600 mt-1">
                    {errors.head?.message}
                  </Typography>
                </div>
                <div>
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue={phone}
                    render={({ field }) => (
                      <InputField
                        variant={`${
                          errors.phone?.message ? "error" : "primary"
                        }`}
                        {...field}
                        disabled={canEdit}
                        placeholder="(99) 99999-9999"
                        label="Número de telefone"
                      />
                    )}
                  />
                  <Typography className="text-danger-600 mt-1">
                    {errors.phone?.message}
                  </Typography>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Controller
                    name="assignment"
                    control={control}
                    defaultValue={assignment}
                    render={({ field }) => (
                      <InputField
                        variant={`${
                          errors.assignment?.message ? "error" : "primary"
                        }`}
                        multiline
                        {...field}
                        disabled={canEdit}
                        placeholder="Digite aqui"
                        label="Função do funcionário"
                      />
                    )}
                  />
                  <Typography className="text-danger-600 mt-1">
                    {errors.assignment?.message}
                  </Typography>
                </div>
                <div>
                  <Controller
                    name="code"
                    control={control}
                    defaultValue={code}
                    render={({ field }) => (
                      <InputField
                        variant={`${
                          errors.code?.message ? "error" : "primary"
                        }`}
                        {...field}
                        disabled={true}
                        placeholder="Digite aqui"
                        label="Código do funcionário"
                      />
                    )}
                  />
                  <Typography className="text-danger-600 mt-1">
                    {errors.code?.message}
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-10">
              <ButtonForm
                text={
                  deleteEmployee.isLoading ? (
                    <CircularProgress size={12} className="text-danger-600" />
                  ) : (
                    "Excluir"
                  )
                }
                style={{ textTransform: "none" }}
                className="text-danger-600 font-semibold hover:bg-danger-100 bg-danger-100 rounded-lg px-6 py-1"
                onClick={handleDeleteEmployee}
              />

              <ButtonForm
                text={`${canEdit ? "Editar" : "Confimar"}`}
                style={{ textTransform: "none" }}
                type="submit"
                className={`${
                  canEdit
                    ? "text-warning-600 font-semibold hover:bg-warning-100 bg-warning-100 rounded-lg px-6 py-1"
                    : "text-success-600 font-semibold hover:bg-success-100 bg-success-100 rounded-lg px-6 py-1"
                }`}
              />
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
