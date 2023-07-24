import { Alert, CircularProgress, Typography } from "@mui/material";
import ButtonForm from "../Button";
import {
  Close,
  EmailOutlined,
  LockOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import InputField from "../Input";
import SelectField from "../Select";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGetDepartment } from "@/hooks/department";
import { useGetEmployee } from "@/hooks/employee";
import { useCreateMessage } from "@/hooks/message";
import { useState } from "react";
import { useMessage } from "@/hooks/useMessage";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

interface IMessageFormProps {
  handleModal: () => void;
}

interface IFormData {
  email: string;
  password: string;
}

export default function LoginForm({ handleModal }: IMessageFormProps) {
  const [alertError, setAlertError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const EyeIcon = (): React.ReactNode => {
    return (
      <ButtonForm
        className="hover:bg-opacity-0 hover:bg-white p-0 min-w-[24px]"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <VisibilityOutlined
            className="text-primary-500"
            sx={{ width: 24, height: 24 }}
          />
        ) : (
          <VisibilityOffOutlined
            className="text-primary-500"
            sx={{ width: 24, height: 24 }}
          />
        )}
      </ButtonForm>
    );
  };
  const schema = yup
    .object({
      email: yup
        .string()
        .email("E-mail inválido")
        .required("Este campo é obrigatório"),
      password: yup.string().required("Este campo é obrigatório"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();
  const { loginMutationDve } = useAuth();

  const onSubmit = handleSubmit((data) => {
    loginMutationDve.mutate(data, {
      onError: () => {
        setAlertError(true);
        setTimeout(() => {
          setAlertError(false);
        }, 5000);
      },
      onSuccess: () => {
        handleModal()
      },
    });
  });
  return (
    <div className="bg-white w-[35%] min-w-[450px] rounded-lg -translate-x-1/2 -translate-y-2/4 absolute top-[50%] left-[50%] p-8">
      <div>
        <div className="flex justify-end items-center mb-6">
          <ButtonForm
            onClick={handleModal}
            className="hover:bg-opacity-0 hover:bg-white p-0 min-w-[24px] "
          >
            <Close className="text-primary-500 " />
          </ButtonForm>
        </div>
        <div>
          <Typography className="text-text-500 font-bold text-3xl mb-5">
            Entrar
          </Typography>
          {alertError && (
            <Alert severity="error" className="mb-5">
              E-mail ou senha inválidos
            </Alert>
          )}
        </div>
        <form onSubmit={onSubmit}>
          <div className="mb-5 mt-5">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <InputField
                  variant={`${errors.email?.message ? "error" : "primary"}`}
                  placeholder="Insira seu e-mail"
                  label="E-mail"
                  {...field}
                  InputProps={{
                    startAdornment: (
                      <EmailOutlined
                        className="text-primary-500 "
                        sx={{ width: 24, height: 24 }}
                      />
                    ),
                  }}
                />
              )}
            />
            <Typography className="text-danger-600 mt-1">
              {errors.email?.message}
            </Typography>
          </div>
          <div className="mb-5">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <InputField
                  variant={`${errors.password?.message ? "error" : "primary"}`}
                  placeholder="Insira sua senha"
                  label="Senha"
                  {...field}
                  InputProps={{
                    startAdornment: (
                      <LockOutlined
                        className="text-primary-500 "
                        sx={{ width: 24, height: 24 }}
                      />
                    ),
                    endAdornment: <EyeIcon />,
                  }}
                  type={showPassword ? "text" : "password"}
                />
              )}
            />

            <Typography className="text-danger-600 mt-1">
              {errors.password?.message}
            </Typography>
          </div>
          <div className="flex justify-end ">
            <Link
              className="font-poppins font-regular text-primary-500"
              href={"/"}
            >
              Esqueceu a senha?
            </Link>
          </div>
          <ButtonForm
            style={{ textTransform: "none" }}
            disabled={loginMutationDve.isLoading}
            className={`bg-primary-500 hover:bg-primary-500 text-white py-3 rounded-sm w-full mt-5 mb-5`}
            text={
              loginMutationDve.isLoading ? (
                <CircularProgress className="text-white" size={25} />
              ) : (
                "Login"
              )
            }
            type="submit"
          />

          <div className="flex justify-center ">
            <Typography className="mr-1 text-gray-600">
              Não tem conta?
            </Typography>
            <Link
              className="font-poppins font-semibold text-primary-500"
              href={"#"}
            >
              Crie aqui
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
