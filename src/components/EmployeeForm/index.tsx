import { CircularProgress, Typography } from "@mui/material";
import ButtonForm from "../Button";
import { Close } from "@mui/icons-material";
import InputField from "../Input";
import SelectField from "../Select";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RadioField from "../Radio";
import { useCreateEmployee } from "@/hooks/employee";
import { useGetDepartment } from "@/hooks/department";
import { useMessage } from "@/hooks/useMessage";

interface EmployeeFormProps {
  handleModal: () => void;
}

// interface IFormData {
//   name: string;
//   email: string;
//   birth_date: string;
//   department: number;
//   assignment: string;
//   fingerPrint: string;
//   phone: string;
//   head: string;
// }

export default function EmployeeForm({ handleModal }: EmployeeFormProps) {
  const { isLoading: isLoadingDepartment, data: departments } =
    useGetDepartment();
  const schema = yup
    .object({
      name: yup.string().required("Este campo é obrigatório"),
      email: yup
        .string()
        .email("E-mail inválido")
        .required("Este campo é obrigatório"),
      birth_date: yup.string().required("Este campo é obrigatório"),
      department: yup.number().nullable(),
      assignment: yup.string().required("Este campo é obrigatório"),
      fingerPrint: yup.string().required("Este campo é obrigatório"),
      phone: yup.string().required("Este campo é obrigatório"),
      head: yup.string().required("Este campo é obrigatório"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const optionsRadio = [
    { text: "Sim", value: "SIM" },
    { text: "Não", value: "NAO" },
  ];
  const { setMessage } = useMessage();
  const createEmployee = useCreateEmployee();
  const onSubmit = handleSubmit((data) => {
    createEmployee.mutate(data, {
      onSuccess: () => {
        setMessage({
          screen: "Employee",
          message: "Funcionário criado com sucesso",
          type: "success",
        });
        handleModal();
      },
      onError: (err) => {
        setMessage({
          screen: "Employee",
          message: "A ação não pôde ser concluída",
          type: "error",
        });
        handleModal();
      },
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="bg-white w-[50%] min-w-[450px] rounded-lg -translate-x-1/2 -translate-y-2/4 absolute top-[50%] left-[50%] p-6">
        {isLoadingDepartment ? (
          <div className="flex justify-center items-center">
            <CircularProgress size={50} />
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <Typography className="font-semibold text-xl ">
                Criar funcionário
              </Typography>
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
                    render={({ field }) => (
                      <InputField
                        variant={`${
                          errors.name?.message ? "error" : "primary"
                        }`}
                        {...field}
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
                    render={({ field }) => (
                      <InputField
                        variant={`${
                          errors.email?.message ? "error" : "primary"
                        }`}
                        {...field}
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
                    name="birth_date"
                    control={control}
                    render={({ field }) => (
                      <InputField
                        type="date"
                        variant={`${
                          errors.birth_date?.message ? "error" : "primary"
                        }`}
                        {...field}
                        placeholder="Digite aqui"
                        label="Data de nascimento"
                      />
                    )}
                  />
                  <Typography className="text-danger-600 mt-1">
                    {errors.birth_date?.message}
                  </Typography>
                </div>
                <div>
                  <Controller
                    name="department"
                    control={control}
                    defaultValue={departments[0].id}
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
                    name="fingerPrint"
                    control={control}
                    render={({ field }) => (
                      <InputField
                        variant={`${
                          errors.fingerPrint?.message ? "error" : "primary"
                        }`}
                        {...field}
                        placeholder="Digite aqui"
                        label="Digital"
                      />
                    )}
                  />
                  <Typography className="text-danger-600 mt-1">
                    {errors.fingerPrint?.message}
                  </Typography>
                </div>
                <div>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <InputField
                        variant={`${
                          errors.phone?.message ? "error" : "primary"
                        }`}
                        {...field}
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
                    render={({ field }) => (
                      <InputField
                        variant={`${
                          errors.assignment?.message ? "error" : "primary"
                        }`}
                        multiline
                        {...field}
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
                    name="head"
                    control={control}
                    render={({ field }) => (
                      <RadioField
                        variant={`${
                          errors.head?.message ? "error" : "primary"
                        }`}
                        {...field}
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
              </div>
            </div>
            <div className="flex justify-start gap-4 items-center">
              <ButtonForm
                onClick={handleModal}
                style={{ textTransform: "none" }}
                text="Cancelar"
                className="bg-danger-100 hover:bg-danger-100 text-danger-600 px-6 py-1 font-bold rounded-lg"
              />
              <ButtonForm
                style={{ textTransform: "none" }}
                text="Criar funcionário"
                type="submit"
                className="bg-success-100 hover:bg-success-100 text-success-600 px-6 py-1 font-bold rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
