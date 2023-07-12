"use client";
import Header from "../../Header";
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import ButtonForm from "@/components/Button";
import HeaderTable from "@/components/HeaderTable";
import style from "./style.module.css";
import EmployeeStatus from "@/components/EmployeeStatus";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useGetPercent, useGetWeekCheckIn } from "@/hooks/dashboard";

export default function Dashboard() {
  const [value, setValue] = useState(0);

  const { isLoading: isLoadingCheckIns, data: CheckIns } = useGetWeekCheckIn();
  const { isLoading: isLoadingPercent, data: Percent } = useGetPercent();

  const employees = [
    {
      image: "/assets/Profile.jpg",
      name: "Fernando Pessoa",
      department: "Almoxarifado",
      checkin: "23/08/2023 - 12:00 pm",
    },

    {
      image: "/assets/Profile.jpg",
      name: "Breno Soares",
      department: "Sigma",
      checkin: "23/08/2023 - 12:00 pm",
    },
    {
      image: "/assets/Profile.jpg",
      name: "Ze neto",
      department: "Sapatona",
    },
    {
      image: "/assets/Profile.jpg",
      name: "Felipe",
      department: "Backend(django)",
      checkin: "23/08/2023 - 12:00 pm",
    },
    {
      image: "/assets/Profile.jpg",
      name: "Fernando Pessoa2",
      department: "Almoxarifado",
    },
  ];

  useEffect(() => {
    setValue(Percent?.percent);
  }, [Percent?.percent]);
  const columns = ["Nome", "Setor", "Status", "Horário"];
  return (
    <div className="px-10 pt-10 flex flex-col lg:w-10/12 lg:fixed  xl:overflow-hidden 2xl:overflow-hidden h-full">
      <div>
        <Header title="Dashboard" subtitle="Dashboard" />
      </div>

      <div className="grid 2xl:grid-cols-3 md:grid-cols-1  lg:grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 gap-6 mt-10 ">
        {isLoadingPercent ? (
          <CircularProgress />
        ) : (
          <div className="bg-white flex justify-center items-center flex-col py-4 gap-5 rounded-lg">
            <Typography
              color="text.secondary"
              className="text-xl text-text-500"
            >
              Atual porcentagem de check-in hoje
            </Typography>
            <div className="w-[150px] h-[150px]">
              <div className="flex relative">
                <CircularProgress
                  variant="determinate"
                  value={value}
                  size={150}
                  thickness={5}
                />
                <div className="absolute flex top-[60px] left-[55px]">
                  <Typography className="text-xl text-text-500 font-bold">
                    {value + "%"}
                  </Typography>
                </div>
              </div>
            </div>
            <ButtonForm
              text="Ver histórico"
              style={{ textTransform: "none" }}
              className="text-xl text-primary-500 font-medium hover:bg-white"
            />
          </div>
        )}

        <div className="grid gap-4">
          <div className="bg-white row-span-2 rounded-lg p-4  ">
            <div>
              <Typography className="text-text-500 text-xl">
                Novos inscritos nos anúncios
              </Typography>
              <div className="flex items-center pt-2">
                <Typography className="text-primary-500 font-semibold text-sm  mr-2">
                  32
                </Typography>
                <div className="flex items-end justify-end">
                  <Typography className="text-text-500 text-sm   text-end">
                    novos inscritos nos anúncios
                  </Typography>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <ButtonForm
                  text="Ver inscritos"
                  style={{ textTransform: "none" }}
                  className="text-base text-primary-500 font-medium hover:bg-white mt-2"
                />
              </div>
            </div>
          </div>
          <div className="bg-white row-span-2 rounded-lg p-4">
            <div>
              <Typography className="text-text-500 text-xl">
                Mensagens não-lidas
              </Typography>
              <div className="flex items-center pt-2">
                <Typography className="text-primary-500 font-semibold text-sm mr-2">
                  17
                </Typography>
                <div className="flex items-end justify-end">
                  <Typography className="text-text-500 text-sm text-end">
                    novas mensagens foram enviadas para você
                  </Typography>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <ButtonForm
                  text="Ver mensagens"
                  style={{ textTransform: "none" }}
                  className="text-base text-primary-500 font-medium hover:bg-white mt-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`bg-white rounded-xl bg-white w-full h-full px-4 pt-4 flex flex-col gap-8 rounded-xl  lg:col-span-2 xl:col-span-2 2xl:col-span-1 ${
            isLoadingCheckIns && "flex items-center justify-center"
          }`}
        >
          {isLoadingCheckIns ? (
            <CircularProgress />
          ) : (
            <div>
              <Typography
                color="text.secondary"
                className="text-base text-center text-text-500 font-bold"
              >
                Check-ins na semana
              </Typography>
              <ResponsiveContainer width={"100%"} height={250}>
                <LineChart data={CheckIns}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Line
                    type="monotone"
                    dataKey="checkIns"
                    stroke="#157AFE"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10">
        <HeaderTable columns={columns} />
      </div>
      <div className={`${style.container} ${"flex-1"}`}>
        <div>
          {employees.map(({ name, image, department, checkin }, index) => (
            <EmployeeStatus
              key={index}
              name={name}
              image={image}
              department={department}
              checkin={checkin}
              bg={index % 2 == 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
