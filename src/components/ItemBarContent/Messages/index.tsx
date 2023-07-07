import { useGetMessage } from "@/hooks/message";
import Header from "../../Header";
import Message from "@/components/Message";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
interface Message {
  title: string;
  id: number;
  department: string;
  attachment: any;
  manager: string;
  read: boolean;
  message_type: string;
  description: string;
}

interface MessageProps {
  messages: Message[];
}

export default function Messages() {
  const { isLoading: isLoadingMessage, data: messages } = useGetMessage();
  console.log(messages);
  const options = [
    { text: "Justificativa de falta", value: 0 },
    { text: "Atestado", value: 1 },
    { text: "Aviso", value: 2 },
    { text: "Demissão", value: 3 },
    { text: "Promoção", value: 4 },
    { text: "OUTRO", value: 5 },
  ];

  return (
    <div className="px-10 mt-10">
      <Header
        title="Mensagens"
        subtitle="Mensagem"
        options={options}
        page={2}
      />
      {isLoadingMessage ? (
        <div className="flex justify-center items-center mt-10">
          <CircularProgress />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:grid-cols-2 gap-4 mt-10">
          {messages.map(({id,title,department,attachment, manager,read,message_type,description}, index) => (
            <div>
              <Message
                key={index}
                title={title}
                department={department.name}
                sender={manager.name}
                type={message_type}
                id={String(id)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
