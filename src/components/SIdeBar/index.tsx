"use client";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import ItemBar from "../ItemBar";
import { Logout } from "@mui/icons-material";
import { useState } from "react";

interface Option {
  name: string;
  icon: React.ReactNode;
}

interface SideBarProps {
  options: Option[];
  currentPage: number;
  onPress: (value: number) => void;
}

export default function SideBar({ options, onPress, currentPage }: SideBarProps) {

  return (
    <nav className="bg-white flex items-start justify-center h-screen border-text-500 border-r border-opacity-20 ">
      <div className="flex flex-col h-full fixed">
        <div className="flex flex-row mt-10 mb-10 ml-5 mr-5">
          <Avatar
            alt="Remy Sharp"
            src={"./assets/Profile.jpg"}
            sx={{ width: 80, height: 80 }}
          />

          <div className="flex flex-col justify-center ml-4">
            <Typography color="neutral.main" className="font-bold text-2xl">
              Fernando Pessoa
            </Typography>

            <Typography className="font-bold text-base text-gray-600">
              Funcionário
            </Typography>
          </div>
        </div>
        <div className="flex flex-1 justify-between flex-col">
          <div className="flex flex-col justify-center ml-5 mr-5 gap-4">
            {options.map(({ name, icon }, index) => (
              <ItemBar
                key={name}
                onClick={() => onPress(index)}
                text={name}
                icon={icon}
                isSelected={currentPage === index}
              />
            ))}
          </div>
          <div className="ml-5 mr-5 mb-10 flex items-center cursor-pointer">
         
            <Logout className="text-danger-600" />
            <Typography className="text-danger-600 ml-10 text-2xl">Sair</Typography>
          </div>
        </div>
      </div>
    </nav>
  );
}
