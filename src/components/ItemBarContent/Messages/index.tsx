import { useGetMessage } from "@/hooks/message";
import Header from "../../Header";
import Message from "@/components/Message";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert, Typography } from "@mui/material";
import { useMessage } from "@/hooks/useMessage";
interface Message {
  title: string;
  id: number;
  department: {
    id: number;
    contact: string;
    name: string;
    location: string;
    assignment: string;
  } | null;
  attachment: any;
  manager: { id: number; email: string; username: string; name: string } | null;
  read: boolean;
  employee: number | null;
  message_type: string;
  description: string;
}

interface MessageProps {
  messages: Message[];
}

export default function Messages() {
  const {
    isLoading: isLoadingMessage,
    data: messages,
  }: { isLoading: boolean; data: Message[] | undefined } = useGetMessage();
  const options = [
    { text: "Justificativa de falta", value: "JUSTIFICATIVA_DE_FALTA" },
    { text: "Atestado", value: "ATESTADO" },
    { text: "Aviso", value: "AVISO" },
    { text: "Demissão", value: "DEMISSAO" },
    { text: "Promoção", value: "PROMOCAO" },
    { text: "Outro", value: "OUTRO" },
  ];
  const {message} = useMessage()
  return (
    <div className="px-10 mt-10">
      <Header
        title="Mensagens"
        subtitle="Mensagem"
        options={options}
        page={2}
      />
      {message && message?.screen == "Message" && (
          <Alert className="mb-5 mt-5" severity={message?.type}>
            {message?.message}
          </Alert>
        )}
      {isLoadingMessage ? (
        <div className="flex justify-center items-center mt-10">
          <CircularProgress />
        </div>
      ) : (
        
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:grid-cols-2 gap-4 mt-10">
          
          {messages &&
            messages.map((message: Message) => (
              <div>
                <Message
                  key={message.id}
                  title={message.title}
                  department={
                    message.department?.name
                      ? message.department?.name
                      : "Todos"
                  }
                  sender={message?.manager?.name && message?.manager?.name}
                  type={message.message_type}
                  id={String(message.id)}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
