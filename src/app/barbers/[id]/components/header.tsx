import { ArrowLeft } from "@phosphor-icons/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const { data: session } = useSession();

  return (
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
        src={session?.user?.image ?? ""}
        alt="perfil"
        height={56}
        width={56}
        priority
      />
    </header>
  );
}
