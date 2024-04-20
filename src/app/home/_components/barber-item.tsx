import Image from "next/image";
import { CalendarBlank, Clock } from "@phosphor-icons/react";
import Link from "next/link";

interface Props {
  id: number;
  name: string;
  date: string;
  time: string;
  image: string;
}
export function BarberItem({ id, name, date, time, image }: Props) {
  return (
    <Link
      href={`/barbers/${id}`}
      className="flex items-center justify-between gap-6 bg-shape p-3 rounded-lg"
    >
      <Image src={image} alt="" height={72} width={72} />
      <div className="flex-1 flex flex-col gap-1">
        <span className="font-medium">{name}</span>
        <div className="flex gap-2 items-center">
          <CalendarBlank size={14} className="text-orange" />
          <span className="text-gray text-sm">{date}</span>
        </div>
        <div className="flex gap-2 items-center">
          <Clock size={14} className="text-orange" />
          <span className="text-gray text-sm">{time}</span>
        </div>
      </div>
    </Link>
  );
}
