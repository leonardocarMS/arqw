"use client";

import React from "react";
import Image from "next/image";
import { Avatar, Card } from "flowbite-react";

const Depoimentos = () => {
  return (
    <>
      <section className="mt-8 pt-24 pb-24 relative grid grid-cols-3 gap-4 pl-32 pr-32">
        {Array(3)
          .fill(1)
          .map((item, index) => (
            <Card key={item + index} className="bg-white z-10 shadow-sm">
              <div className="flex flex-col pb-10">
                <div className="mb-2 flex justify-center">
                  <Image
                    src="/avatar.jpg"
                    alt="Avatar"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">
                  Leonardo Carvalho
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Boa Vista - RR
                </span>
                <p className="text-center mt-4">
                  Ja conseguir comprar bastante coisas, atravez do Leilão Legal!!!
                </p>
              </div>
            </Card>
          ))}
        <Image
          src={"/background.jpg"}
          fill
          alt="background"
          style={{ objectPosition: "0 100%" }}
          className="object-cover"
        />
        <div className="col-span-3 flex justify-center">
          <button className="p-2 flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none text-white bg-yellow-300 border border-transparent hover:bg-yellow-600 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 rounded-lg focus:ring-2">
            Ver Todos
          </button>
        </div>
      </section>
    </>
  );
};

export default Depoimentos;
