import { CircularProgress, Modal, Typography } from "@mui/material";
import ButtonForm from "@/components/Button";
import { Close } from "@mui/icons-material";
import InputField from "@/components/Input";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePatchDepartment } from "@/hooks/department";
import { useMessage } from "@/hooks/useMessage";

interface IEmployeeInfoProps {
  id: string;
  name: string;
  assignment: string;
  contact: string;
  location: string;
  handleModal: () => void;
}

export default function DepartmentInfo({
  handleModal,
  name,
  assignment,
  id,
  contact,
  location,
}: IEmployeeInfoProps) {
  const schema = yup
    .object({
      name: yup.string().required("Este campo é obrigatório"),
      contact: yup
        .string()
        .email("E-mail inválido")
        .required("Este campo é obrigatório"),
      assignment: yup.string().required("Este campo é obrigatório"),
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

  const patchDepartment = usePatchDepartment();
  const {setMessage} = useMessage()
  const onSubmit = handleSubmit((data) => {
    patchDepartment.mutate(
      { id: id, data: data },
      {
        
        onSuccess: () => {
          setMessage({
            screen: "Department",
            message: "Departamento editado com sucesso.",
            type: "success",
          });
          
          handleModal();
        },
        onError: (err) => {
          setMessage({
            screen: "Department",
            message: "A ação não pôde ser concluída.",
            type: "error",
          });
          handleModal();
        },
      }
    );
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="bg-white w-[40%] min-w-[450px] rounded-lg -translate-x-1/2 -translate-y-2/4 absolute top-[50%] left-[50%] p-6">
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
          <div>
            <Controller
              name="name"
              control={control}
              defaultValue={name}
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
              name="contact"
              control={control}
              defaultValue={contact}
              render={({ field }) => (
                <InputField
                  variant={`${errors.contact?.message ? "error" : "primary"}`}
                  {...field}
                  placeholder="Digite aqui"
                  label="Contato"
                />
              )}
            />
            <Typography className="text-danger-600 mt-1">
              {errors.contact?.message}
            </Typography>
          </div>
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
                  {...field}
                  placeholder="Digite aqui"
                  label="Função do setor"
                />
              )}
            />
            <Typography className="text-danger-600 mt-1">
              {errors.assignment?.message}
            </Typography>
          </div>
          <div>
            <Controller
              name="location"
              control={control}
              defaultValue={location}
              render={({ field }) => (
                <InputField
                  variant={`${errors.location?.message ? "error" : "primary"}`}
                  {...field}
                  placeholder="Digite aqui"
                  label="Local"
                />
              )}
            />
            <Typography className="text-danger-600 mt-1">
              {errors.location?.message}
            </Typography>
          </div>
        </div>
        <div className="flex gap-4 mt-10">
          <ButtonForm
            text={"Cancelar"}
            style={{ textTransform: "none" }}
            className="text-danger-600 font-semibold hover:bg-danger-100 bg-danger-100 rounded-lg px-6 py-1"
            onClick={handleModal}
          />

          <ButtonForm
            text={
                patchDepartment.isLoading ? (
                  <CircularProgress size={12} className="text-success-600" />
                ) : (
                  "Confirmar"
                )
              }
            style={{ textTransform: "none" }}
            type="submit"
            className={
              "text-success-600 font-semibold hover:bg-success-100 bg-success-100 rounded-lg px-6 py-1"
            }
          />
        </div>
      </div>
    </form>
  );
}
