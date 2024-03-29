"use client";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import ItemBar from "../ItemBar";
import { Logout } from "@mui/icons-material";
import Link from "next/link";
import EmployeeForm from "../EmployeeForm";
import MessageForm from "../MessageForm";
import DepartmentForm from "../DepartmentForm";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import ButtonForm from "../Button";
import { getAuthToken } from "@/utils/authToken";
import { useEffect } from "react";
import { logout } from "@/services/auth";
import LoadingContainer from "../LoadingContainer";
import { useEmployee } from "@/hooks/useEmployee";

interface Option {
  name: string;
  icon: React.ReactNode;
}

interface SideBarProps {
  options: Option[];
  currentPage?: number;
  onPress?: (value: number) => void;
  employees?: boolean;
}

export default function SideBar({
  options,
  onPress,
  currentPage,
  employees,
}: SideBarProps) {
  const { logoutMutation, user } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        router.push("/login");
      },
    });
  };
  const { employee } = useEmployee();
  useEffect(() => {
    console.log(user,'dssadas')
  }, [])
  return (
    <div
      className={`${
        currentPage != 0 && "border-text-500 border-r border-opacity-20"
      } h-full `}
    >
      <nav className=" bg-white flex items-start justify-center h-screen  ">
        <div className="flex flex-col h-screen fixed ">
          <div className="flex flex-row mt-10 mb-10 ml-5 mr-5">
            <Avatar
              alt="Remy Sharp"
              src={"./assets/Profile.jpg"}
              sx={{ width: 80, height: 80 }}
            />

            <div className="flex flex-col justify-center ml-4">
              <Typography
                color="neutral.main"
                className="font-bold text-lg text-text-500"
              >
                {employees
                  ? employee?.name
                  : typeof user === "object" && user?.name
                  ? user.name
                  : "Usuário Desconhecido"}
              </Typography>

              <Typography className="font-regular text-sm text-gray-600">
                {!employees ? " Empresa" : "Funcionário"}
              </Typography>
            </div>
          </div>
          <div className="flex flex-1 justify-between flex-col">
            <div className="flex flex-col justify-center ml-5 mr-5 gap-4">
              {options.map(({ name, icon }, index) => (
                <ItemBar
                  key={name}
                  onClick={() => {
                    onPress && onPress(index);
                  }}
                  text={name}
                  icon={icon}
                  isSelected={currentPage === index}
                />
              ))}
            </div>
            {options[0].name != "Terminal de ponto" && (
              <div className="ml-5 mr-5 mb-10 flex items-center cursor-pointer">
                <Logout className="text-danger-600" />
                <ButtonForm
                  disableRipple={true}
                  onClick={handleLogout}
                  className="text-danger-600 font-poppins ml-10 text-2xl hover:bg-white"
                  style={{ textTransform: "none" }}
                  text="Sair"
                />
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
