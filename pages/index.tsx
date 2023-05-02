import { Inter } from "next/font/google";
import WereQeducato from "../components/WereQeducato/WereQeducato";
import SearchForCourse from "../components/SearchForCourse/SearchForCourse";
import AdmissionAid from "../components/Admission&Aid/AdmissionAid";
import Testimonial from "../components/Testimonial/testimonial";
import Gallary from "../components/Gallary/Gallary";
import LanguageSec from "../components/LanguageSec/LanguageSec";
import UpComing from "../components/UpComing/UpComing";
import InstructorSec from "../components/InstructorSec/InstructorSec";
import VisitCenter from "../components/VisitCenter/VisitCenter";
import Events from "../components/Events/Events";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: any) {
  console.log(data)
  return (
    <main className="bg-white">
      <WereQeducato></WereQeducato>
      <Testimonial></Testimonial>
      <SearchForCourse></SearchForCourse>
      <AdmissionAid></AdmissionAid>
      <Gallary data={data}></Gallary>
      <LanguageSec></LanguageSec>
      <UpComing data={data}></UpComing>
      <InstructorSec data={data}></InstructorSec>
      <VisitCenter></VisitCenter>
      <Events data={data}></Events>
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
