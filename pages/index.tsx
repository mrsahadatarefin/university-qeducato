import { Inter } from "next/font/google";
import Feautures from "@/components/features/Feautures";
import { GetServerSideProps, GetStaticProps } from "next";

import Scholarship from "@/components/features/Scholarship";
import Every_contack from "@/components/features/Every_contack";
  
import WereQeducato from "../components/WereQeducato/WereQeducato";
import SearchForCourse from "../components/SearchForCourse/SearchForCourse";
import AdmissionAid from "../components/Admission&Aid/AdmissionAid";

import Gallary from "../components/Gallary/Gallary";
import LanguageSec from "../components/LanguageSec/LanguageSec";
import UpComing from "../components/UpComing/UpComing";
import InstructorSec from "../components/InstructorSec/InstructorSec";
import VisitCenter from "../components/VisitCenter/VisitCenter";
import Navbar from "@/components/Shared/Navbar";
import Banner from "@/components/Home/Banner";
import Footer from "@/components/Shared/Footer";
import AboutOurUniversity from "@/components/aboutOurUniversity/AboutOurUniversity";
import CompanyLogo from "@/components/companyLogo/CompanyLogo";
import Subscribe from "./subscribe/Subscribe";
import CampusTour from "@/components/CampusTour/CampusTour";
import CampusFacilities from "@/components/campusFacilities/CampusFacilities";
import Testimonial from "@/components/Testimonial/Testimonial";
import AppStore from "@/components/AppStore/AppStore";




// const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: any) {
  console.log(data)
  return (
    <main className="bg-white">
      <Banner/>
     
      <AboutOurUniversity/>
      <Feautures/>
      
      <CampusFacilities/>
      
      <Testimonial/>
      <SearchForCourse></SearchForCourse>
      
      <AdmissionAid></AdmissionAid>
      <Gallary data={data}></Gallary>
      <LanguageSec></LanguageSec>
      <Scholarship/>
      <UpComing data={data}></UpComing>
      <CompanyLogo/>
      <Every_contack/>
      <InstructorSec data={data}></InstructorSec>
      <AppStore/>
      <VisitCenter/>
       
      {/* <Events data={data} /> */}
      <Scholarship />
      <Every_contack />
      <Subscribe/>
     


    </main>
  );

}

export async function getStaticProps() {
  const fs = require("fs/promises");
  const path = require("path");
  const filePath = path.join(process.cwd(), '/data', '/data.json');

  let data = await fs.readFile(filePath);
  data = JSON.parse(data);

  return {
    props: {
      data: data.data
    }
  }
}


//events fetch data
// export const getServerSideProps: GetStaticProps = async ()=>{
//   const res = await fetch('http://localhost:3000/api/data')
//   const data = await res.json()
//   return{
//       props:{
//          data
//       }
//   }
// }


// export const getServerSideProps: GetStaticProps = async ()=>{
//   const res = await fetch('http://localhost:3000/api/data')
//   const data = await res.json()
//   return{
//       props:{
//          data
//       }
//   }
// }
