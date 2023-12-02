"use client";

import { useGlobalContext } from "@/context/main";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

export default function Home() {
  // const [newName, setNewName] = useState("");
  // const [newEmail, setNewEmail] = useState("");

  const { newName, setNewName, newEmail, setNewEmail } = useGlobalContext();

  const router = useRouter();

  const handleSubmitIniciar: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    //Ir para pagina quiz
    router.push("/quiz");
  };

  return (
    <main className="flex flex-col items-center gap-3">
      <p className="text-lg text-center">
        Teste seus conhecimentos sobre ciência da computação !
      </p>

      <div>
        <form
          onSubmit={handleSubmitIniciar}
          className="flex flex-col items-center gap-2"
        >
          <div>
            <label htmlFor="newName">Nome: </label>
            <input
              type="text"
              name="newName"
              id="newName"
              className="text-black p-2"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="newEmail"
              id="newEmail"
              className="text-black p-2"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Start Quiz
          </button>
          <button
            type="button"
            onClick={() => router.push("/questions")}
            style={{ backgroundColor: "#0097a7" }}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Adicionar Pergunta
          </button>

        </form>
      </div>
    </main>
  );
}
