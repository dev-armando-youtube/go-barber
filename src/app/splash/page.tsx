import Image from "next/image";

export default function splash() {
  return (
    <main className="bg-background min-h-screen flex items-center justify-center">
      <Image src="/logo.svg" alt="logo" width={200} height={123} priority />
    </main>
  );
}
