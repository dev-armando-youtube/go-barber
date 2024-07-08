import Image from "next/image";
import { CalendarBlank, Clock } from "@phosphor-icons/react";
import Link from "next/link";

interface Props {
  id: number;
  name: string;
  image: string;

  barbers: {
    openDays: string;
    openHours: string;
  };
}
export function BarberItem({ id, name, barbers, image }: Props) {
  return (
    <Link
      href={`/barbers/${id}`}
      className="flex items-center justify-between gap-6 bg-shape p-3 rounded-lg"
    >
      <div className="rounded-full overflow-auto">
        <Image src={image} alt={name} height={72} width={72} />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <span className="font-medium">{name}</span>
        <div className="flex gap-2 items-center">
          <CalendarBlank size={14} className="text-orange" />
          <span className="text-gray text-sm">{barbers.openDays}</span>
        </div>
        <div className="flex gap-2 items-center">
          <Clock size={14} className="text-orange" />
          <span className="text-gray text-sm">{barbers.openHours}</span>
        </div>
      </div>
    </Link>
  );
}
