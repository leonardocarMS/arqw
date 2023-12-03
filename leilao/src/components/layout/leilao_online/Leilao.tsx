"use client";

import { Button } from "flowbite-react";

export default function LeilaoOnline() {
  return (
    <div className="py-2 mx-auto max-w-screen-xl">
      <div className="py-2 px-60 mb-3 bg-yellow-300 text-black uppercase font-bold border-b-4 border-b-black">
        <h1>Leilões Online</h1>
      </div>
      <div className="flex justify-center items-center gap-8">
        <div className="box text-center border border-gray-500 rounded-lg p-4">
          <img
            src="/iphone.jpg"
            alt="Iphone"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-2 border-4 border-black"
          />
          <p className="font-semibold">Iphone</p>
          <div className="timer text-red-500 font-bold">00:00:30</div>
          <Button className="p-2 mt-2 mx-auto flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-yellow-300 border border-transparent hover:bg-black rounded-lg focus:ring-2 focus:ring-black">
          <p className="text-sm">Fazer Lance</p>
          </Button>
        </div>

        <div className="box text-center border border-gray-500 rounded-lg p-4">
          <img
            src="/controle.jpg"
            alt="controle - PS5"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-2 border-4 border-yellow-300"
          />
          <p className="font-semibold">Controle - PS5</p>
          <div className="timer text-red-500 font-bold">00:10:00</div>
          <Button className="p-2 mt-2 mx-auto flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-yellow-300 border border-transparent hover:bg-black rounded-lg focus:ring-2 focus:ring-black">
          <p className="text-sm">Fazer Lance</p>
          </Button>
        </div>
        

        <div className="box text-center border border-gray-500 rounded-lg p-4">
          <img
            src="/JBL.jpg"
            alt="JBL"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-2 border-4 border-black"
          />
          <p className="font-semibold">JBL</p>
          <div className="timer text-red-500 font-bold">00:00:10</div>
          <Button className="p-2 mt-2 mx-auto flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-yellow-300 border border-transparent hover:bg-black rounded-lg focus:ring-2 focus:ring-black">
          <p className="text-sm">Fazer Lance</p>
          </Button>
        </div>
      </div>
      <div className="flex justify-center py-2 mt-2">
        <Button className="p-2 mt-4 mb-3 mx-auto flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-black border border-transparent enabled:hover:bg-yellow-300 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg focus:ring-2">
          <p>Ver Todos</p>
        </Button>
      </div>
    </div>
  );
}

