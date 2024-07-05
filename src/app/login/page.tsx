"use client";

import Image from "next/image";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [type, setType] = useState<"USER" | "BARBER">("USER");

  const navigate = useRouter();

  const handleLogin = () => signIn("google");

  const { data: session } = useSession();

  console.log(session);

  if (session?.user) navigate.push("/home");
  else {
    setTimeout(() => {
      navigate.push("/login");
    }, 3000);
  }

  return (
    <main className="bg-background min-h-screen flex flex-col items-center justify-center gap-8">
      <Image src="/logo.svg" alt="logo" width={200} height={123} priority />

      <h3 className="font-medium text-xl">Acesse sua conta</h3>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-8 text-gray">
          <button
            onClick={() => setType("USER")}
            className={`${
              type == "USER" && "text-white border-b"
            } hover:text-white border-orange hover:border-b transition-all duration-300 p-1`}
          >
            Sou cliente
          </button>
          <button
            onClick={() => setType("BARBER")}
            className={`${
              type == "BARBER" && "text-white border-b"
            } hover:text-white border-orange hover:border-b transition-all duration-300 p-1`}
          >
            Sou cabeleireiro
          </button>
        </div>

        <button
          onClick={handleLogin}
          className="relative bg-inputs h-12 rounded-lg text-gray text-sm flex items-center justify-center hover:opacity-80 transition-all duration-300"
        >
          <Image
            className="absolute left-4"
            src="/google.svg"
            alt="Google"
            height={24}
            width={24}
            priority
          />
          Entre com o Google
        </button>
      </div>
    </main>
  );
}
