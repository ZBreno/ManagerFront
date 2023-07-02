import { Typography } from "@mui/material";
import ButtonForm from "../Button";
import { Close } from "@mui/icons-material";
import InputField from "../Input";
import SelectField from "../Select";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface EmployeeFormProps {
  handleModal: () => void;
}

interface IFormData {
  name: string;
  email: string;
  birthDate: string;
  department: number;
  function: string;
  fingerPrint: string;
  phone: string;
}

export default function EmployeeForm({ handleModal }: EmployeeFormProps) {
  const optionsDepartment = [
    { text: "Almoxarifado", value: 0 },
    { text: "Recursos Humanos", value: 1 },
    { text: "Todos", value: 2 },
  ];

  const schema = yup
    .object({
      name: yup.string().required("Este campo é obrigatório"),
      email: yup
        .string()
        .email("E-mail inválido")
        .required("Este campo é obrigatório"),
      birthDate: yup.string().required("Este campo é obrigatório"),
      department: yup
        .number()
        .transform((value) => (value === 2 ? void 0 : value)),
      function: yup.string().required("Este campo é obrigatório"),
      fingerPrint: yup.string().required("Este campo é obrigatório"),
      phone: yup.string().required("Este campo é obrigatório"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data, null, 2)));
  const handleChange = () => {
    alert("n sei");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white w-[50%] min-w-[450px] rounded-lg -translate-x-1/2 -translate-y-2/4 absolute top-[50%] left-[50%] p-6">
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
                    variant={`${errors.name?.message ? "error" : "primary"}`}
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
                    variant={`${errors.email?.message ? "error" : "primary"}`}
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
                name="birthDate"
                control={control}
                render={({ field }) => (
                  <InputField
                    type="date"
                    variant={`${
                      errors.birthDate?.message ? "error" : "primary"
                    }`}
                    {...field}
                    placeholder="Digite aqui"
                    label="Nome"
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
                defaultValue={0}
                render={({ field }) => (
                  <SelectField
                    variant={`${
                      errors.department?.message ? "error" : "primary"
                    }`}
                    options={optionsDepartment}
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
                    variant={`${errors.phone?.message ? "error" : "primary"}`}
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
          <div>
            <Controller
              name="function"
              control={control}
              render={({ field }) => (
                <InputField
                  variant={`${errors.function?.message ? "error" : "primary"}`}
                  multiline
                  {...field}
                  placeholder="Digite aqui"
                  label="Função do funcionário"
                />
              )}
            />
            <Typography className="text-danger-600 mt-1">
              {errors.function?.message}
            </Typography>
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
            text="Criar mensagem"
            type="submit"
            className="bg-success-100 hover:bg-success-100 text-success-600 px-6 py-1 font-bold rounded-lg"
          />
        </div>
      </div>
    </form>
  );
}
