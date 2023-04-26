import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="bg-[#125875] text-black flex justify-between lg:pr-[100px]">
        <div className="flex items-center bg-[#FF7350] text-white lg:px-[100px] py-7">
          <h2>Follow Us:- </h2>
          <div className="flex gap-4 px-2 text-2xl">
            <a href="#">
              <i className="fa-brands fa-facebook hover:text-blue-500 duration-300"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube hover:text-red-500 duration-300"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter hover:text-blue-400 duration-300"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram hover:text-yellow-500 duration-300"></i>
            </a>
          </div>
        </div>
        <div className="p-3 flex items-center gap-8">
          <div className="flex text-white">
            <img
              src="/phone-call.png"
              alt="phone number image"
              className="w-11 h-11 mr-2"
            />
            <div>
              <h2 className="text-sm">Call Now!</h2>
              <p className="font-bold">+8801987654321</p>
            </div>
          </div>
          <div className="flex text-white">
            <img
              src="/mailing.png"
              alt="email address image"
              className="w-11 h-11 mr-2"
            />
            <div>
              <h2 className="text-sm">Email Now!</h2>
              <p className="font-bold">info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
