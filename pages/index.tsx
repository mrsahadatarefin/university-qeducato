import Image from "next/image";
import { Inter } from "next/font/google";
import Feautures from "@/components/features/Feautures";
import { GetServerSideProps, GetStaticProps } from "next";
import Events from "@/components/features/Events";
import Scholarship from "@/components/features/Scholarship";
import Every_contack from "@/components/features/Every_contack";


const inter = Inter({ subsets: ["latin"] });

export default function Home({data}: any) {
  //console.log(data);
  
  return (
    <main className="">
      
      <Feautures />
      <Events data={data} />
      <Scholarship />
      <Every_contack />
      
    </main>
  );
}

//events fetch data

// export const getServerSideProps: GetStaticProps = async ()=>{
//   const res = await fetch('events.json')
//   const data = await res.json()
//   return{
//       props:{
//          data
//       }
//   }
// }
