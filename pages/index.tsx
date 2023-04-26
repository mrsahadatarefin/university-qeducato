import Image from "next/image";
import { Inter } from "next/font/google";
import Feautures from "@/components/features/Feautures";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      
      <Feautures />
    </main>
  );
}
