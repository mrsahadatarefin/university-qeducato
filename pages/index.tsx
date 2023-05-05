import { Inter } from "next/font/google";
import Feautures from "@/components/features/Feautures";
import { GetServerSideProps, GetStaticProps } from "next";

import Scholarship from "@/components/features/Scholarship";
import Every_contack from "@/components/features/Every_contack";
  

import SearchForCourse from "../components/SearchForCourse/SearchForCourse";
import AdmissionAid from "../components/Admission&Aid/AdmissionAid";

import Gallary from "../components/Gallary/Gallary";
import LanguageSec from "../components/LanguageSec/LanguageSec";
import UpComing from "../components/UpComing/UpComing";
import InstructorSec from "../components/InstructorSec/InstructorSec";
import VisitCenter from "../components/VisitCenter/VisitCenter";
import Events from "../components/Events/Events";
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
import Head from "next/head";


export default function Home({ data }: any) {
  console.log("data:: ", data);

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

      

      <VisitCenter></VisitCenter>
      <Events data={data}></Events>



      <AppStore/>
      
      <InstructorSec data={data}></InstructorSec>
     
    
    
      {/* <Events data={data} /> */}
      
      {/* <Every_contack /> */}
      <Subscribe/>
     


   </main>

  );

}

export async function getStaticProps() {
  const fs = require("fs/promises");
  const path = require("path");

  //Find the absolute path of the json directory
  const filePath = path.join(process.cwd(), "/data", "/data.json");

  //Read the json data file data.json
  let data = await fs.readFile(filePath, 'utf8');
  data = JSON.parse(data);

  return {
    props: {
      data: data.data
    }
  }
}

