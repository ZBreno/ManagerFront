import { Typography } from "@mui/material";
import ButtonForm from "../Button";
import { Close } from "@mui/icons-material";
import InputField from "../Input";
import SelectField from "../Select";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IMessageFormProps {
  handleModal: () => void;
}

interface IFormData {
  title: string;
  typeMessage: number;
  department: number;
  message: string;
}

export default function MessageForm({ handleModal }: IMessageFormProps) {
  const optionsTypeMessage = [
    { text: "Justificativa de falta", value: 0 },
    { text: "Atestado", value: 1 },
    { text: "Aviso", value: 2 },
    { text: "Demissão", value: 3 },
    { text: "Promoção", value: 4 },
    { text: "Outro", value: 5 },
  ];
  const optionsDepartment = [
    { text: "Almoxarifado", value: 0 },
    { text: "Recursos Humanos", value: 1 },
    { text: "Todos", value: 2 },
  ];

  const schema = yup
    .object({
      title: yup.string().required("Este campo é obrigatório"),
      typeMessage: yup.number().required("Este campo é obrigatório"),
      department: yup
        .number()
        .transform((value) => (value === 2 ? void 0 : value)),
      message: yup.string().required("Este campo é obrigatório"),
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
  return (
    <form onSubmit={onSubmit}>
      <div className="bg-white w-[35%] min-w-[450px] rounded-lg -translate-x-1/2 -translate-y-2/4 absolute top-[50%] left-[50%] p-6">
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
              name="typeMessage"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <SelectField
                  variant={`${
                    errors.typeMessage?.message ? "error" : "primary"
                  }`}
                  options={optionsTypeMessage}
                  label="Tipo da mensagem"
                  {...field}
                  onChange={(event) =>
                    field.onChange(Number(event.target.value))
                  }
                />
              )}
            />
            <Typography className="text-danger-600 mt-1">
              {errors.typeMessage?.message}
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
          {/* 
          <SelectField
            variant="primary"
            options={optionsDepartment}
            label="Departamento"
          /> */}
          <div>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <InputField
                  multiline
                  variant={`${errors.message?.message ? "error" : "primary"}`}
                  {...field}
                  placeholder="Digite aqui"
                  label="Mensagem"
                />
              )}
            />
            <Typography className="text-danger-600 mt-1">
              {errors.message?.message}
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
