import { MailOutline, MoreVert } from "@mui/icons-material";
import { Typography } from "@mui/material";
import ButtonForm from "../../Button";
import Header from "../../Header";
import Message from "@/components/Message";

interface Message {
  title: string;
  sender: string;
  department: string;
  type: string;
}

interface MessageProps {
  messages: Message[];
}

export default function Messages({ messages }: MessageProps) {
  const options = [
    { text: "Justificativa de falta", value: 0 },
    { text: "Atestado", value: 1 },
    { text: "Aviso", value: 2 },
    { text: "Demissão", value: 3 },
    { text: "Promoção", value: 4 },
    { text: "Outro", value: 5 },
  ];

  return (
    <div className="px-10 mt-10">
      <Header title="Mensagens" subtitle="Mensagem" options={options} />
      <div className="flex justify-start  flex-wrap mt-10 gap-x-10 gap-y-6">
        {messages.map(({ title, sender, department, type }, index) => (
          <Message key={index} title={title} department={department} sender={sender} type={type} />
        ))}
      </div>
    </div>
  );
}
