"use client";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import ItemBar from "../ItemBar";
import { Message, AccessAlarm } from "@mui/icons-material";
import React, { useState, useEffect } from "react";

export default function Sidebar() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  return (
    <nav className="bg-white flex items-center justify-center pb-2 flex-1">
      <div>
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
        <div className="flex flex-col justify-center ml-5 mr-5 gap-2">
          <ItemBar
            text="Testando"
            active={currentPage == 0}
            onClick={() => setCurrentPage(0)}
            icon={
              <AccessAlarm
                sx={{ width: 24, height: 24 }}
                className={
                  currentPage == 0 ? "text-primary-500" : "text-text-500"
                }
              />
            }
          />
          <ItemBar
            text="Testando"
            active={currentPage == 1}
            onClick={() => setCurrentPage(1)}
            icon={
              <AccessAlarm
                className={
                  currentPage == 1 ? "text-primary-500" : "text-text-500"
                }
                sx={{ width: 24, height: 24 }}
              />
            }
          />
          <ItemBar
            text="Testando"
            active={currentPage == 2}
            onClick={() => setCurrentPage(2)}
            icon={
              <AccessAlarm
                sx={{ width: 24, height: 24 }}
                className={
                  currentPage == 2 ? "text-primary-500" : "text-text-500"
                }
              />
            }
          />
        </div>
      </div>
    </nav>
  );
}
