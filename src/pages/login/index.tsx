import ButtonForm from "@/components/Button";
import InputField from "@/components/Input";
import {
  EmailOutlined,
  LockOutlined,
  VisibilityOutlined,
  VisibilityOffOutlined,
} from "@mui/icons-material";
import { Alert, CircularProgress, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { getAuthToken } from "@/utils/authToken";
import ProtectedRoute from "@/components/ProtectedRoute";

interface IFormData {
  username: string;
  password: string;
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [alertError, setAlertError] = useState<boolean>(false);
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
      username: yup
        .string()
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
  const { loginMutation } = useAuth();

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onError: () => {
        setAlertError(true);
        setTimeout(() => {
          setAlertError(false);
        }, 5000);
      },
      onSuccess: () => {
        router.push("/");
      },
    });
  });
 

  return (
    <ProtectedRoute>
      <div className="grid grid-cols-1 h-screen lg:grid-cols-2">
        <div
          style={{ backgroundImage: "url('/assets/bgLogin.png')" }}
          className="hidden lg:flex lg:justify-center lg:grid-col-1 lg:items-center  "
        >
          <div className="flex flex-col items-center h-full justify-center">
            <Image
              src={"/assets/cardLoginusers.png"}
              width={550}
              height={550}
              alt="card login"
              className="mb-10 px-10"
            />
            <Typography className="text-white font-semibold text-2xl">
              Velocidade, Eficiência e Produtividade
            </Typography>
            <Typography className="text-white text-sm text-center px-10 mt-2">
              Experimente a revolução da gestão de funcionários com nossa
              plataforma! Automatize processos como folha de pagamento e
              controle de ponto, aumentando a eficiência operacional.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col h-full justify-center items-center bg-gray-200 px-10 lg:p-0  lg:bg-white">
          <div className="flex flex-col  border border-text-500 bg-white p-10 px-10 border-opacity-20 rounded-lg lg:px-4 w-full lg:w-auto lg:rounded-none lg:border-0 ">
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
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-6 min-w-[30vw]"
            >
              <div>
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      variant={`${
                        errors.username?.message ? "error" : "primary"
                      }`}
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
                  {errors.username?.message}
                </Typography>
              </div>
              <div>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      variant={`${
                        errors.password?.message ? "error" : "primary"
                      }`}
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
                disabled={loginMutation.isLoading}
                className={`bg-primary-500 hover:bg-primary-500 text-white py-3 rounded-sm `}
                text={
                  loginMutation.isLoading ? (
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
      </div>
    </ProtectedRoute>
  );
}
