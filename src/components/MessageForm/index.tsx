import { CircularProgress, Typography } from "@mui/material";
import ButtonForm from "../Button";
import { Close } from "@mui/icons-material";
import InputField from "../Input";
import SelectField from "../Select";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGetDepartment } from "@/hooks/department";
import { useGetEmployee } from "@/hooks/employee";
import { useCreateMessage } from "@/hooks/message";
import { useState } from "react";

interface IMessageFormProps {
  handleModal: () => void;
}

interface IFormData {
  title: string;
  message_type: string;
  department: number;
  description: string;
  attachment: any;
  employee: number;
}

export default function MessageForm({ handleModal }: IMessageFormProps) {
  const optionsTypeMessage = [
    { text: "Justificativa de falta", value: "JUSTIFICATIVA_DE_FALTA" },
    { text: "Atestado", value: "ATESTADO" },
    { text: "Aviso", value: "AVISO" },
    { text: "Demissão", value: "DEMISSAO" },
    { text: "Promoção", value: "PROMOCAO" },
    { text: "Outro", value: "OUTRO" },
  ];


  
  const schema = yup
    .object({
      title: yup.string().required("Este campo é obrigatório"),
      message_type: yup.string().required("Este campo é obrigatório"),
      department: yup
        .number()
        .transform((value) => (value === 999 ? void 0 : value)),
      description: yup.string().required("Este campo é obrigatório"),
      attachment: yup.mixed().nullable(),
      employee: yup
        .number()
        .transform((value) => (value === 999 ? void 0 : value)),
    })
    .required();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const [selectedFile, setSelectedFile] = useState()

  const { isLoading: isLoadingDepartment, data: departments } =
    useGetDepartment();

  const { isLoading: isLoadingEmployee, data: employees } = useGetEmployee();
  const createMessage = useCreateMessage();
  const onSubmit = handleSubmit((data) =>{
    data.attachment = selectedFile
    // var bodyFormData = new FormData();

    // bodyFormData.append('attachment', data.attachment)
    // // const newData = data.attachment = new FormData()
    // data.attachment = bodyFormData
    createMessage.mutate(data, {
      onSuccess: () => {
        alert("deu certo");
      },
      onError: () => {
        alert("deu errado");
      },
    })
    // alert(JSON.stringify(data, null, 2))
  })
  return (
    <form onSubmit={onSubmit}>
      <div className="bg-white w-[35%] min-w-[450px] rounded-lg -translate-x-1/2 -translate-y-2/4 absolute top-[50%] left-[50%] p-6">
        {isLoadingDepartment || isLoadingEmployee ? (
          <div className="flex justify-center items-center">
            <CircularProgress size={50} />
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <Typography className="font-semibold text-xl ">
                Criar mensagem
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
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      variant={`${errors.title?.message ? "error" : "primary"}`}
                      {...field}
                      placeholder="Digite aqui"
                      label="Título"
                    />
                  )}
                />
                <Typography className="text-danger-600 mt-1">
                  {errors.title?.message}
                </Typography>
              </div>
              <div>
                <Controller
                  name="attachment"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      type="file"
                      variant={`${
                        errors.attachment?.message ? "error" : "primary"
                      }`}
                      {...field}
                      // onChange={(p) => setValue('attachment', p.target.files[0])}
                      onChange={(e) => setSelectedFile(e.target.files[0])}
                      placeholder="Digite aqui"
                      label="Anexo"
                    />
                  )}
                />
                <Typography className="text-danger-600 mt-1">
                  {errors.attachment?.message}
                </Typography>
              </div>
              <div>
                <Controller
                  name="message_type"
                  control={control}
                  defaultValue={"OUTRO"}
                  render={({ field }) => (
                    <SelectField
                      variant={`${
                        errors.message_type?.message ? "error" : "primary"
                      }`}
                      options={optionsTypeMessage}
                      label="Tipo da mensagem"
                      {...field}
                      onChange={(event) =>
                        field.onChange(String(event.target.value))
                      }
                    />
                  )}
                />
                <Typography className="text-danger-600 mt-1">
                  {errors.message_type?.message}
                </Typography>
              </div>
              <div>
                <Controller
                  name="employee"
                  control={control}
                  defaultValue={employees[0].id}
                  render={({ field }) => (
                    <SelectField
                      variant={`${
                        errors.employee?.message ? "error" : "primary"
                      }`}
                      options={[
                        ...employees.map(
                          ({ id, name }: { id: number; name: string }) => ({
                            value: id,
                            text: name,
                          })
                        ),
                        { value: 999, text: "Todos" },
                      ]}
                      label="Enviar para"
                      {...field}
                      onChange={(event) =>
                        field.onChange(Number(event.target.value))
                      }
                    />
                  )}
                />
                <Typography className="text-danger-600 mt-1">
                  {errors.employee?.message}
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
                      options={[
                        ...departments.map(
                          ({ id, name }: { id: number; name: string }) => ({
                            value: id,
                            text: name,
                          })
                        ),
                        { value: 999, text: "Todos" },
                      ]}
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
              <div>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      multiline
                      variant={`${
                        errors.description?.message ? "error" : "primary"
                      }`}
                      {...field}
                      placeholder="Digite aqui"
                      label="Mensagem"
                    />
                  )}
                />
                <Typography className="text-danger-600 mt-1">
                  {errors.description?.message}
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
        )}
      </div>
    </form>
  );
}
