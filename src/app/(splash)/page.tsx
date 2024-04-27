"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Splash() {
  const navigate = useRouter();

  const { data: session } = useSession();

  console.log(session);

  if (session?.user) navigate.push("/home");
  else {
    setTimeout(() => {
      navigate.push("/login");
    }, 3000);
  }

  return (
    <main className="bg-background min-h-screen flex items-center justify-center">
      <Image src="/logo.svg" alt="logo" width={200} height={123} priority />
    </main>
  );
}
