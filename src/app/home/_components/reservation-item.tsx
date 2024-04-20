import Image from "next/image";
import {
  CalendarBlank,
  CurrencyDollar,
  Scissors,
  X,
} from "@phosphor-icons/react";
import { useState } from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/app/_components/ui/drawer";
import { Button } from "@/app/_components/ui/button";

interface Props {
  id: number;
  name: string;
  date: string;
  time: string;
  image: string;
  service: string;
  payment: string;
}
export function ReservationItem({
  name,
  date,
  time,
  image,
  service,
  payment,
}: Props) {
  return (
    <Drawer>
      <DrawerTrigger>
        <button className="flex items-center justify-between gap-6 bg-shape p-3 rounded-lg w-full">
          <Image src={image} alt="Barbearia" height={72} width={72} />
          <div className="flex-1 flex flex-col items-start gap-1">
            <span className="font-medium">{name}</span>
            <div className="flex gap-2 items-center">
              <Scissors size={14} className="text-orange" />
              <span className="text-gray text-sm">{service}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-2 items-center">
                <CalendarBlank size={14} className="text-orange" />
                <span className="text-gray text-sm">
                  {date} - {time}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <CurrencyDollar size={14} className="text-orange" />
                <span className="text-gray text-sm">{payment}</span>
              </div>
            </div>
          </div>
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <header className="p-5 flex items-center justify-between">
          <span className="font-bold text-lg">Informacões da Reserva</span>
          <DrawerClose className="bg-transparent shadow-none hover:bg-transparent p-2">
            <X size={20} />
          </DrawerClose>
        </header>

        <div className="w-full h-[1px] bg-black-medium" />

        <section className="p-5">
          <div className="p-5 bg-shape rounded-lg text-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-gray">Barbearia</span>
              <span>{name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray">Data</span>
              <span>
                {date} - {time}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray">Serviço</span>
              <span>{service}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray">Pagamento</span>
              <span>{payment}</span>
            </div>
          </div>

          <div className="pt-5">
            <Button className="bg-error hover:bg-error/80 w-full">
              Cancelar
            </Button>
          </div>
        </section>
      </DrawerContent>
    </Drawer>
  );
}
