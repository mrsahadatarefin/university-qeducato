import Image from "next/image";
import React from "react";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import img1 from "../../public/assates/img/team09.png";
import img2 from "../../public/assates/img/team10.png";
import img3 from "../../public/assates/img/team11.png";
import img4 from "../../public/assates/img/team12.png";
import CompanyLogo from "../companyLogo/CompanyLogo";

const OurExpert = () => {
  return (
    <div className="mt-20 ">
      <p className="text-xl text-[#ff7350] text-center font-bold pb-10">
        Our Teacher
      </p>
      <h2 className="text-5xl text-black text-center font-bold mb-10">
        Our Expert Teacher
      </h2>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1440px] mx-auto ">
        <div className="bg-[#F7F9FF]  rounded-lg mt-10 p-5 w-[300px] m-auto ">
          <div className="w-[200px] mx-auto mb-10  ">
            <Image src={img1} alt=""></Image>
          </div>
          <div className="mb-10">
            <h1 className="text-2xl font-bold text-center mb-5 ">
              Howard Holmes
            </h1>
            <p className="text-xl font-bold text-center text-[#ff7350]">
              CEO & Founder
            </p>
          </div>
          <div className="flex  justify-center ">
            <CiFacebook
              size={35}
              className="mx-3 hover:bg-gray-400 rounded-sm"
            />
            <CiInstagram
              size={35}
              className="mx-3 hover:bg-gray-400 rounded-sm"
            />
            <CiTwitter
              size={35}
              className="mx-3 hover:bg-gray-400 rounded-sm"
            />
          </div>
        </div>

        <div className="bg-[#F7F9FF]  rounded-lg mt-10 p-5 w-[300px] m-auto ">
          <div className="w-[200px] mx-auto mb-10  ">
            <Image src={img3} alt=""></Image>
          </div>
          <div className="mb-10">
            <h1 className="text-2xl font-bold text-center mb-5 ">
              Vincent Cooper
            </h1>
            <p className="text-xl font-bold text-center text-[#ff7350]">
              Biochemistry Teacher
            </p>
          </div>
          <div className="flex  justify-center ">
            <CiFacebook
              size={35}
              className="mx-3 hover:bg-gray-400 rounded-sm"
            />
            <CiInstagram
              size={35}
              className="mx-3 hover:bg-gray-400 rounded-sm"
            />
            <CiTwitter
              size={35}
              className="mx-3 hover:bg-gray-400 rounded-sm"
            />
          </div>
        </div>
        <div className="bg-[#F7F9FF]  rounded-lg mt-10 p-5 w-[300px]  m-auto">
          <div className="w-[200px] mx-auto mb-10  ">
            <Image src={img2} alt=""></Image>
          </div>
          <div className="mb-10">
            <h1 className="text-2xl font-bold text-center mb-5 ">
              Ella Thompson
            </h1>
            <p className="text-xl font-bold text-center text-[#ff7350]">
              Corporate Finance{" "}
            </p>
          </div>
          <div className="flex  justify-center ">
            <CiFacebook
              size={35}
              className="mx-3 hover:bg-gray-400 rounded-sm"
            />
            <CiInstagram
              size={35}
              className="mx-3 hover:bg-gray-400 rounded-sm"
            />
            <CiTwitter
              size={35}
              className="mx-3 hover:bg-gray-400 rounded-sm"
            />
          </div>
        </div>
        <div className="bg-[#F7F9FF]  rounded-lg mt-10 p-5 w-[300px] m-auto ">
          <div className="w-[200px] mx-auto mb-10  ">
            <Image src={img4} alt=""></Image>
          </div>
          <div className="mb-10">
            <h1 className="text-2xl font-bold text-center mb-5 ">
              Danielle Bryant
            </h1>
            <p className="text-xl font-bold text-center text-[#ff7350]">
              Danielle Bryant
            </p>
          </div>
          <div className="flex  justify-center ">
            <CiFacebook
              size={35}
              className="mx-3 hover:bg-gray-400 rounded-sm"
            />
            <CiInstagram
              size={35}
              className="mx-3 hover:bg-gray-400 rounded-sm"
            />
            <CiTwitter
              size={35}
              className="mx-3 hover:bg-gray-400 rounded-sm"
            />
          </div>
        </div>
      </div>
      <CompanyLogo />
    </div>
  );
};

export default OurExpert;
