import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Shared/Navbar";
import Banner from "@/components/Home/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Banner />
    </main>
  );
}
