import { CircularProgress, Modal, Typography } from "@mui/material";
import ButtonForm from "@/components/Button";
import { Close } from "@mui/icons-material";
import InputField from "@/components/Input";
import SelectField from "@/components/Select";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDeleteEmployee, usePatchEmployee } from "@/hooks/employee";
import { useState } from "react";
import { useDeleteMessage, useGetMessageId } from "@/hooks/message";
import Link from "next/link";

interface IMessageInfoProps {
  id: string;
  handleModal: () => void;
}

export default function MessageInfo({ handleModal, id }: IMessageInfoProps) {
  const deleteMessage = useDeleteMessage();

  const handleDeleteMessage = () => {
    deleteMessage.mutate(id, {
      onSuccess: () => {
        handleModal();
      },
    });
  };
  const optionsType : any = {
    JUSTIFICATIVA_DE_FALTA: "Justificativa de falta",
    AVISO: "Aviso",
    ATESTADO: "Atestado",
    DEMISSAO: "Demissão",
    PROMOCAO: "Promoção",
    OUTRO: "Outro",
  };

  const { isLoading: isLoadingMessage, data: message } = useGetMessageId(id);

  return (
    <div className="bg-white w-[40%] min-w-[450px] rounded-lg -translate-x-1/2 -translate-y-2/4 absolute top-[50%] left-[50%] p-6">
      {isLoadingMessage ? (
        <div className="flex justify-center items-center">
          <CircularProgress size={50} />
        </div>
      ) : (
        <div>
          <div className="flex justify-end items-center mb-6">
            <ButtonForm
              onClick={handleModal}
              className="hover:bg-opacity-0 hover:bg-white p-0 min-w-[24px] "
            >
              <Close className="text-primary-500 " />
            </ButtonForm>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography className="font-bold">Título</Typography>
                <Typography style={{ wordBreak: "break-all" }}>
                  {message.title}
                </Typography>
              </div>
              <div className="flex flex-col flex-wrap">
                <Typography className="font-bold">Anexo</Typography>
                <Link
                  href={message.attachment}
                  className="text-primary-500"
                  style={{ wordBreak: "break-all" }}
                  target="_blank"
                >
                  {message.attachment}
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography className="font-bold">Tipo da mensagem</Typography>
                <Typography>{optionsType[message.message_type]}</Typography>
              </div>
              <div>
                <Typography className="font-bold">Descrição</Typography>
                <Typography style={{ wordBreak: "break-all" }}>
                  {message.description}
                </Typography>
              </div>
            </div>
            <div className="flex justify-start mt-5">
              <ButtonForm
                text={
                  deleteMessage.isLoading ? (
                    <CircularProgress size={12} className="text-danger-600" />
                  ) : (
                    "Excluir"
                  )
                }
                style={{ textTransform: "none" }}
                className="text-danger-600 font-semibold hover:bg-danger-100 bg-danger-100 rounded-lg px-6 py-1"
                onClick={handleDeleteMessage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
