"use client";

import { api } from "@/api";
import { BarberItem } from "./_components/barber-item";
import { ReservationItem } from "./_components/reservation-item";
import { ReservationCancel } from "../_components/modal/reservation-cancel";
import { useState } from "react";
import { Header } from "./_components/header";

export default function Home() {
  const [openReservationCancel, setOpenReservationCancel] =
    useState<boolean>(false);

  const { barbers, reservations } = api;

  return (
    <main className="bg-background min-h-screen">
      <Header />

      <section className="p-6 pb-0 flex flex-col gap-4">
        <h4 className="text-2xl py-2">Agendamentos</h4>
        <div className="flex flex-col gap-5">
          {reservations.map((reservation) => (
            <ReservationItem
              key={reservation.id}
              {...reservation}
              setReservationCancel={setOpenReservationCancel}
            />
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

      <ReservationCancel
        open={openReservationCancel}
        setOpen={setOpenReservationCancel}
      />
    </main>
  );
}
