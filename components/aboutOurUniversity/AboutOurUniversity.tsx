import Image from 'next/image';
import React from 'react';
import img2 from "../../public/assates/about_img_05.png";

const AboutOurUniversity = () => {
    return (
        <div>
            <div className="mt-20  flex flex-col lg:flex-row   max-w-[1444px] mx-auto items-center justify-center  ">
        <div className=" px-0 lg:px-10 w-[50%] ">
          <Image src={img2} alt="about" className=" h-full"></Image>
        </div>
        <div className="px-5 lg:px-0">
          <p className="text-[#ff7350] text-xl font-bold mb-5 pt-10">
            About Our University
          </p>
          <h2 className="text-5xl font-bold mb-5">
            A Few Words About the <br /> University
          </h2>
          <p className="text-xl mb-5 text-[#245b73]">
            Our community is being called to reimagine the future. As the only
            university <br /> where a renowned design school comes together with
            premier colleges, we <br /> are making learning more relevant and
            transformational.
          </p>
          <p className="text-base mb-5 ">
            We are proud to offer top ranige in employment services such and
            asser payroll and benefits <br /> administrato managemen and
            asistance with global business range ployment employer readings{" "}
            <br /> from religious texts or literature are also commonly inc
            compliance.
          </p>
          <div className=" flex flex-col lg:flex-row   ">
            <div className="flex mb-10 lg:mb-0 ">
              <div className=" px-2 lg:px-5">
                <p className="text-3xl rounded-full bg-[#ff7350] p-2 text-white">
                  01
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold pb-2">Doctoral Degrees</p>
                <p>
                  consectetur adipiscing elit sed do <br /> eiusmod tem incid
                  idunt.
                </p>
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="px-2 lg:px-5">
                  <p className="text-3xl rounded-full bg-[#ff7350] p-2 text-white">
                    02
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold pb-2">Global Students</p>
                  <p>
                    consectetur adipiscing elit sed do <br /> eiusmod tem incid
                    idunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
        </div>
    );
};

export default AboutOurUniversity;