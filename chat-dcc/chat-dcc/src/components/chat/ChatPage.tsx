// client component - ChatPage

import { useConnection } from "@/context/connect";
import Image from "next/image";
import { useState, useEffect } from "react";

interface IMsgDatTypes {
  user: string;
  msg: string;
  time: string;
}

export default function ChatPage({ userName }: any) {
  const [currentMsg, setCurrentMsg] = useState("");
  const [chatMessages, setChatMessages] = useState<IMsgDatTypes[]>([]);

  const { connection } = useConnection();

  useEffect(() => {
    if (connection) {
      connection.on("receive-message", (msg: IMsgDatTypes) => {
        setChatMessages((prevMessages) => [...prevMessages, msg]);
      });
    }

    return () => {
      if (connection) {
        connection.off("receive-message");
      }
    };
  }, [connection]);

  async function sendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Enviando mensagem...", currentMsg);
    if (currentMsg !== "" && connection) {
      console.log("Connection está definido.");
      const newMsg: IMsgDatTypes = {
        user: userName,
        msg: currentMsg,
        time: `${new Date(Date.now()).getHours()}:${new Date(
          Date.now()
        ).getMinutes()}`,
      };

      connection.emit("send-message", newMsg);
      setCurrentMsg("");
    }
  }

  return (
    <div className="flex">
      {/* Barra Lateral */}
      <div className="flex flex-col w-96 h-screen bg-green-300 p-3 gap-6 border-gray-600">
        <div className="w-2/3">
          <Image
            src="/images/logo-chat.png"
            alt="Logo chat"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full"
            priority
          />
        </div>
        <div className="flex flex-col gap-2">
          <span>Usuários Online</span>
          <span>{userName}</span>
        </div>
      </div>
      {/* Main chat */}
      <div className="flex flex-col w-full h-screen px-10 py-5 bg-yellow-100 justify-between">
        <div>
          {chatMessages.map(({ user, msg, time }, key) => (
            <div key={key} className="p-5">
              <div>{user}:</div>
              <div>{msg}:</div>
              <div>{time}:</div>
            </div>
          ))}
        </div>
        <div>
          <form
            onSubmit={sendMessage}
            className="flex gap-2 w-full justify-center"
          >
            <input
              type="text"
              className="rounded px-2 py-3 text-gray-700 border border-gray-400 w-2/3"
              value={currentMsg}
              placeholder="Digite uma mensagem"
              onChange={(e) => setCurrentMsg(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
