import { MailOutline, MoreVert, Delete } from "@mui/icons-material";
import { Menu, MenuItem, Typography } from "@mui/material";
import ButtonForm from "../Button";
import { useState } from "react";
import { useDeleteMessage } from "@/hooks/message";

interface MessageProps {
  title: string;
  sender: string;
  department: string;
  type: string;
  id: string;
}

export default function Message({
  title,
  sender,
  department,
  type,
  id,
}: MessageProps) {
  const typeMessages = [
    {
      name: "ATESTADO",
      bg: "bg-warning-200 text-warning-800",
      bgBtn: "#9F9126",
    },
    {
      name: "AVISO",
      bg: "bg-primary-500 bg-opacity-20 text-primary-500",
      bgBtn: "#157AFE",
    },
    {
      name: "JUSTIFICATIVA_DE_FALTA",
      bg: "bg-gray-200 text-gray-800",
      bgBtn: "#353A3D",
    },
    {
      name: "DEMISSAO",
      bg: "bg-danger-200 text-danger-800",
      bgBtn: "#9F2F26",
    },
    {
      name: "PROMOCAO",
      bg: "bg-success-200 text-success-800",
      bgBtn: "#1B7B4F",
    },
    {
      name: "OUTRO",
      bg: "bg-purple-500 text-purple-500 bg-opacity-20 ",
      bgBtn: "#4F1091",
    },
  ];

  const index = (): number => {
    const index = typeMessages.findIndex((item) => item.name === type);

    return index;
  };

  const bg = String(typeMessages[index()].bg);
  const bgBtn = String(typeMessages[index()].bgBtn);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteMessage = useDeleteMessage();

  const handleDeleteMessage = () => {
    deleteMessage.mutate(
      id,
      {
        onSuccess: () => {
          console.log("apagou");
        },
        onError: (err) => {
          alert(err);
        },
      }
    );
    setAnchorEl(null);
  };
  return (
    <div className={`${bg} px-3 py-4 rounded-lg`}>
      <div className=" grid gap-6">
        <div className="flex justify-between">
          <MailOutline />
          <div>
            <ButtonForm
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className={`text-${bg} hover:bg-opacity-0 hover:bg-white p-0 min-w-[24px] `}
            >
              <MoreVert />
            </ButtonForm>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              className="p-0"
            >
              <MenuItem
                className=" hover:bg-white text-text-500 text-sm"
                onClick={handleClose}
              >
                Ler mais
              </MenuItem>
              <MenuItem
                className="text-danger-600 text-sm"
                onClick={handleDeleteMessage}
              >
                Excluir
              </MenuItem>
            </Menu>
          </div>
        </div>

        <div>
          <Typography className={`font-semibold text-xs`}>{sender}</Typography>
          <Typography className="font-bold text-xl">{department}</Typography>
        </div>
        <div className={`flex justify-end`}>
          <ButtonForm
            className={`px-4 text-white rounded-sm py-1`}
            style={{ textTransform: "none", backgroundColor: bgBtn }}
            text="Ler mais"
          />
        </div>
      </div>
    </div>
  );
}
