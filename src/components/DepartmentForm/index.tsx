import { CircularProgress, Typography } from "@mui/material";
import ButtonForm from "../Button";
import { Close } from "@mui/icons-material";
import InputField from "../Input";
import SelectField from "../Select";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGetEmployee } from "@/hooks/employee";
import { useCreateDepartment } from "@/hooks/department";
import { useMessage } from "@/hooks/useMessage";
import { useAuth } from "@/hooks/useAuth";

interface IDepartmentFormProps {
  handleModal: () => void;
}

// interface IFormData {
//   name: string;
//   assignment: string;
//   contact: string;
//   head: number;
//   location: string;
// }

export default function DepartmentForm({ handleModal }: IDepartmentFormProps) {
  const optionsEmployees = [
    { text: "Justificativa de falta", value: 0 },
    { text: "Atestado", value: 1 },
    { text: "Aviso", value: 2 },
    { text: "Demissão", value: 3 },
    { text: "Promoção", value: 4 },
    { text: "Outro", value: 5 },
  ];
  const { isLoading: isLoadingEmployee, data: employees } = useGetEmployee();
  const { user } = useAuth();
  const schema = yup
    .object({
      name: yup.string().required("Este campo é obrigatório"),
      assignment: yup.string().required("Este campo é obrigatório"),
      contact: yup
        .string()
        .email("Email inválido")
        .required("Este campo é obrigatório"),
      head: yup.number(),
      location: yup.string().required("Este campo é obrigatório"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const createDepartment = useCreateDepartment();
  const { setMessage } = useMessage();
  const onSubmit = handleSubmit((data) => {
    data.head = user;
    createDepartment.mutate(data, {
      onSuccess: () => {
        setMessage({
          screen: "Department",
          message: "Departamento criado com sucesso",
          type: "success",
        });
        handleModal();
      },
      onError: (err) => {
        setMessage({
          screen: "Department",
          message: "A ação não pôde ser concluída",
          type: "error",
        });
        handleModal();
      },
    });
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="bg-white w-[35%] min-w-[450px] rounded-lg -translate-x-1/2 -translate-y-2/4 absolute top-[50%] left-[50%] p-6">
        {isLoadingEmployee ? (
          <div className="flex justify-center items-center">
            <CircularProgress size={50} />
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <Typography className="font-semibold text-xl ">
                Criar departamento
              </Typography>
              <ButtonForm
                onClick={handleModal}
                className="hover:bg-opacity-0 hover:bg-white p-0 min-w-[24px] "
              >
                <Close className="text-primary-500 " />
              </ButtonForm>
            </div>
            <div className="flex flex-col mb-10 gap-4">
              <div>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      variant={`${errors.name?.message ? "error" : "primary"}`}
                      {...field}
                      placeholder="Digite aqui"
                      label="Nome do departamento"
                    />
                  )}
                />
                <Typography className="text-danger-600 mt-1">
                  {errors.name?.message}
                </Typography>
              </div>
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
                      placeholder="Descreva sua função..."
                      label="Função do setor"
                    />
                  )}
                />
                <Typography className="text-danger-600 mt-1">
                  {errors.assignment?.message}
                </Typography>
              </div>
              {/* <div>
                <Controller
                  name="head"
                  control={control}
                  defaultValue={employees[0].id}
                  render={({ field }) => (
                    <SelectField
                      variant={`${errors.head?.message ? "error" : "primary"}`}
                      options={employees.map(
                        ({ id, name }: { id: number; name: string }) => ({
                          value: id,
                          text: name,
                        })
                      )}
                      label="Responsável do setor"
                      {...field}
                      onChange={(event) =>
                        field.onChange(Number(event.target.value))
                      }
                    />
                  )}
                />
                <Typography className="text-danger-600 mt-1">
                  {errors.head?.message}
                </Typography>
              </div> */}
              <div>
                <Controller
                  name="contact"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      variant={`${
                        errors.contact?.message ? "error" : "primary"
                      }`}
                      {...field}
                      placeholder="departamento@gmail.com"
                      label="Contato"
                    />
                  )}
                />
                <Typography className="text-danger-600 mt-1">
                  {errors.contact?.message}
                </Typography>
              </div>
              <div></div>
              <div>
                <Controller
                  name="location"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      variant={`${
                        errors.location?.message ? "error" : "primary"
                      }`}
                      {...field}
                      placeholder="3º piso, sala 45"
                      label="Localização"
                    />
                  )}
                />
                <Typography className="text-danger-600 mt-1">
                  {errors.location?.message}
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
                text={
                  createDepartment.isLoading ? (
                    <CircularProgress size={24} className="text-success-600" />
                  ) : (
                    "Criar departamento"
                  )
                }
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
