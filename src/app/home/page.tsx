"use client";

import { api } from "@/api";
import { BarberItem } from "./_components/barber-item";
import { ReservationItem } from "./_components/reservation-item";
import { ReservationCancel } from "../_components/modal/reservation-cancel";
import { useState } from "react";
import { Header } from "./_components/header";
import { signOut, useSession } from "next-auth/react";
import { UserType } from "../_components/modal/user-type";

export default function Home() {
  const { data: session } = useSession();

  const [openReservationCancel, setOpenReservationCancel] = useState<boolean>(false);

  const [openUserType, setOpenUserType] = useState<boolean>(false);

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  const { barbers, reservations } = api;

  if (!session?.user?.type) return <UserType open={true} setOpen={setOpenUserType} />;

  return (
    <main className="bg-background min-h-screen">
      <Header />

      <button
        onClick={handleLogout}
        className="mt-4 ml-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Sair
      </button>

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
