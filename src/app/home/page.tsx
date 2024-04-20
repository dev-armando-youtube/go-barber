"use client";

import Image from "next/image";
import { api } from "@/api";
import { BarberItem } from "./_components/barber-item";
import { ReservationItem } from "./_components/reservation-item";

export default function Home() {
  const { barbers, reservations } = api;

  return (
    <main className="bg-background min-h-screen">
      <header className="h-32 bg-background-medium flex items-center justify-between p-6">
        <div className="flex flex-col text-xl">
          <span className="text-gray">Bem vindo,</span>
          <span className="text-orange">Armando Pereira</span>
        </div>
        <Image
          className="rounded-full"
          src="/perfil.png"
          alt="perfil"
          height={56}
          width={56}
          priority
        />
      </header>

      <section className="p-6 pb-0 flex flex-col gap-4">
        <h4 className="text-2xl py-2">Agendamentos</h4>
        <div className="flex flex-col gap-5">
          {reservations.map((reservation) => (
            <ReservationItem key={reservation.id} {...reservation} />
          ))}
        </div>
      </section>

      <section className="p-6 flex flex-col gap-4">
        <h4 className="text-2xl py-2">Barbearias</h4>
        <div className="flex flex-col gap-5">
          {barbers.map((barber) => (
            <BarberItem key={barber.id} {...barber} />
          ))}
        </div>
      </section>
    </main>
  );
}
