"use client";

import { ReservationConfirm } from "@/app/_components/modal/reservation-confirm";
import { Button } from "@/app/_components/ui/button";
import { ArrowLeft } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CreateReservation() {
  const [service, setService] = useState<"barba" | "cabelo">("cabelo");
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <main className="bg-background min-h-screen">
        <header className="h-32 bg-background-medium flex items-center justify-between p-6">
          <Link
            href="/home"
            className="hover:opacity-80 transition-all duration-300"
          >
            <ArrowLeft size={32} className="text-gray" />
          </Link>
          <span className="text-xl">Agendamento</span>
          <Image
            className="rounded-full"
            src="/perfil.png"
            alt="perfil"
            height={56}
            width={56}
            priority
          />
        </header>

        <section className="p-6 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-white text-2xl">Escolha o serviço</span>
            <div className="flex gap-4 text-gray font-medium">
              <button
                onClick={(e: any) => setService(e.target.value)}
                value="cabelo"
                className={`${
                  service == "cabelo" &&
                  "bg-orange border-orange text-background"
                } border border-gray   rounded-lg p-2 hover:opacity-80 transition-all duration-300`}
              >
                Corte de cabelo
              </button>
              <button
                onClick={(e: any) => setService(e.target.value)}
                value="barba"
                className={`${
                  service == "barba" &&
                  "bg-orange border-orange text-background"
                } border border-gray rounded-lg p-2 hover:opacity-80 transition-all duration-300`}
              >
                Corte de barba
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white text-2xl">Escolha a data</span>
            <input
              className="bg-inputs h-14 px-4 text-gray rounded-lg"
              type="datetime-local"
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white text-2xl">Forma de pagamento</span>
            <select className="bg-inputs h-14 px-4 text-gray rounded-lg">
              <option value="">Pix</option>
              <option value="">Cartão</option>
              <option value="">Dinheiro</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white text-2xl">Descrição</span>
            <textarea
              rows={6}
              className="bg-inputs p-2 px-4 text-gray rounded-lg"
              placeholder="Mais algum detalhe?"
            />
          </div>

          <Button
            onClick={() => setOpen(true)}
            className="bg-done hover:bg-done/80 h-9 rounded-lg hover:opacity-80 transition-all duration-300"
          >
            Confirmar
          </Button>
        </section>
      </main>

      <ReservationConfirm open={open} setOpen={setOpen} />
    </>
  );
}
