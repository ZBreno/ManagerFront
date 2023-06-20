import { MailOutline, MoreVert } from "@mui/icons-material";
import { Typography } from "@mui/material";
import ButtonForm from "../Button";
import Header from "../Header";

interface Message {
  title: string;
  remetente: string;
  department: string;
  type: string;
}

interface MessageProps {
  messages: Message[];
}

export default function Messages({ messages }: MessageProps) {
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
  const options = [
    { text: "Justificativa de falta", value: 0 },
    { text: "Atestado", value: 1 },
    { text: "Aviso", value: 2 },
    { text: "Demissão", value: 3 },
    { text: "Promoção", value: 4 },
    { text: "Outro", value: 5 },
  ];

  return (
    <div>
      <Header title="Mensagens" subtitle="Mensagem" options={options} />
      <div className="flex justify-start mx-10 flex-wrap mt-10 gap-x-10 gap-y-6">
        {messages.map(
          ({ title, remetente, department, type }, indexMessage) => {
            const index: any = typeMessages.findIndex(
              (item, index) => item.name === type
            );
            console.log(typeMessages[index].bgBtn);
            const bg = String(typeMessages[index].bg);
            const bgBtn = String(typeMessages[index].bgBtn);
            return (
              <div
                key={indexMessage}
                className={`${bg} px-3 py-4 rounded-lg flex flex-col min-w-[300px] gap-6`}
              >
                <div className="flex justify-between">
                  <div>
                    <MailOutline />
                  </div>

                  <MoreVert />
                </div>
                <div>
                  <Typography className={`font-semibold text-xs`}>
                    {remetente}
                  </Typography>
                  <Typography className="font-bold text-2xl">
                    {department}
                  </Typography>
                </div>
                <div key={indexMessage} className={`flex justify-end`}>
                  <ButtonForm
                    className={`px-4 text-white rounded-sm py-1`}
                    style={{ textTransform: "none", backgroundColor: bgBtn }}
                    text="Ler mais"
                  />
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
