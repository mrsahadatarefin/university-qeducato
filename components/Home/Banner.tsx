import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img src="/slider_bg_01.png" alt="banner images" />
        <div className="absolute top-14 xl:mx-[100px]">
          <div className="text-white text-2xl flex font-semibold">
            <h1 className="pt-3 pr-3">WELCOME TO QEDUCATO</h1>
            <p className="text-[#FF7350]">________</p>
          </div>
          <h2 className="text-6xl w-3/5 mt-7 font-bold text-white">
            Education is the best key success in life
          </h2>
          <p className=" text-white w-1/2 mt-7 font-semibold">
            Whether you're a student, a working professional, or someone looking
            to enhance your knowledge and skills, our online education programs
            can help you unlock your full potential and achieve your dreams.
          </p>
          <button className="btn btn-outline mt-5 text-[#FF7350] hover:bg-[#FF7350]">
            Contact Us
          </button>
        </div>
        <div className="absolute bottom-5 grid grid-cols-1 lg:grid-cols-3 gap-4 text-white mt-10 xl:mx-[100px]">
          <div className="flex bg-[#125875] hover:bg-[#FF7350] duration-300 p-5 gap-5 rounded-lg">
            <div>
              <img src="/sve-icon4.png" alt="book png" />
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4">Education services</h4>
              <p>
                Seamlessly visualize quality ellectual capital without superior
                collaboration and idea sharing listically
              </p>
            </div>
          </div>
          <div className="flex bg-[#FF7350] hover:bg-[#FF7350] duration-300 p-5 gap-5 rounded-lg">
            <div>
              <img src="/sve-icon5.png" alt="book png" />
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4">International Hubs</h4>
              <p>
                Seamlessly visualize quality ellectual capital without superior
                collaboration and idea sharing listically
              </p>
            </div>
          </div>
          <div className="flex bg-[#125875] hover:bg-[#FF7350] duration-300 p-5 gap-5 rounded-lg">
            <div>
              <img src="/sve-icon6.png" alt="book png" />
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4">
                Bachelor's and Master's
              </h4>
              <p>
                Seamlessly visualize quality ellectual capital without superior
                collaboration and idea sharing listically
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
