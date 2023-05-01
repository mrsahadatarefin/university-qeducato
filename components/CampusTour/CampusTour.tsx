import React from "react";
import img1 from "../../public/assates/steps-img-2.png";
import img2 from "../../public/assates/steps-img-3.png";
import icon1 from "../../public/assates/fea-icon01-1.png";
import icon from "../../public/assates/fea-icon03.png";
import Image from "next/image";

const CampusTour = () => {
  return (
    <div>
      <div className=" mt-20 flex flex-col lg:flex-row">
        <div className="bg-[#125875] w-full lg:w-[50%] justify-center  flex flex-col">
          <div className="px-20 pt-10 mb-10  ">
            <Image
              className="bg-[#ff7350]  text-white h-[75px] w-[75px]  p-3  rounded-full "
              src={icon1}
              alt=""
            ></Image>
          </div>
          <h1 className="text-4xl text-white px-20 mb-10 ">Campus Tour</h1>
          <p className="text-gray-300 text-xl px-20 mb-10 ">
            Campus on a tour designed for prospective graduate and professional
            students. You will see how our university like, facilities, studenst
            and life in this university. Meet our graduate admissions
            representative to learn more about our graduate programs and decide
            what it the best for you.
          </p>
        </div>
        <div>
          <Image src={img1} alt="steps img"></Image>
        </div>
      </div>
      <div className="  flex flex-col-reverse lg:flex-row">
        <div>
          <Image src={img2} alt="steps img"></Image>
        </div>
        <div className="bg-[#032E3F] w-full lg:w-[50%] justify-center  flex flex-col">
          <div className="px-20 pt-10 mb-10  ">
            <Image
              className="bg-[#ff7350]  text-white h-[75px] w-[75px]  p-3  rounded-full "
              src={icon}
              alt=""
            ></Image>
          </div>
          <h1 className="text-4xl text-white px-20 mb-10 ">Powerful Alumni</h1>
          <p className="text-gray-300 text-xl px-20 mb-10 ">
            designed for prospective graduate and professional
            students. You will see how our university like, facilities, studenst
            and life in this university. Meet our graduate admissions
            representative to learn more about our graduate programs and decide
            what it the best for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampusTour;
