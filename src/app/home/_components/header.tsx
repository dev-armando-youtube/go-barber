import { useSession } from "next-auth/react";
import Image from "next/image";

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="h-32 bg-background-medium flex items-center justify-between p-6">
      <div className="flex flex-col text-xl">
        <span className="text-gray">Bem vindo,</span>
        <span className="text-orange">{session?.user?.name}</span>
      </div>
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
