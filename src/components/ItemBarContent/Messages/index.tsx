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
      <Header title="Mensagens" subtitle="Mensagem" options={options}  page={2}/>
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:grid-cols-2 gap-4 mt-10">
        {messages.map(({ title, sender, department, type }, index) => (
          <Message key={index} title={title} department={department} sender={sender} type={type} />
        ))}
      </div>
    </div>
  );
}
