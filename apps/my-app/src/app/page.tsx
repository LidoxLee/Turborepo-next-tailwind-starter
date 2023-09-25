import Image from "next/image";
import { Counter } from "@/components/Counter/Counter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Counter />
    </main>
  );
}
