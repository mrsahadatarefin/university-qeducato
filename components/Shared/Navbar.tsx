import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [closeNavbar, setCloseNavbar] = useState(false);
  return (
    <div>
      {/* navbar header */}
      <div className="bg-[#125875] text-black xl:flex justify-between lg:pr-[100px] hidden">
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
      {/* navbar */}
      <div className="bg-white text-black">
        <div className="xl:mx-[100px] mx-5 my-5 lg:my-0 flex justify-between items-center">
          <Link href={"/"}>
            <img src="/web-logo.png" alt="website logo" className="w-[260px]" />
          </Link>
          <div className="text-xl lg:flex hidden items-center">
            <div className="flex gap-4 mr-2">
              <Link
                className="nav my-4 hover:text-[#FF7350] duration-300"
                href={"/"}
              >
                Home
              </Link>
              <Link
                className="nav my-4 hover:text-[#FF7350] duration-300"
                href={"/about"}
              >
                About Us
              </Link>
              <Link
                className="nav my-4 hover:text-[#FF7350] duration-300"
                href={"/courses"}
              >
                Courses
              </Link>
              <Link
                className="nav my-4 hover:text-[#FF7350] duration-300"
                href={"/pages"}
              >
                Pages
              </Link>
              <Link
                className="nav my-4 hover:text-[#FF7350] duration-300"
                href={"/blog"}
              >
                Blog
              </Link>
              <Link
                className="nav my-4 hover:text-[#FF7350] duration-300"
                href={"/contact"}
              >
                Contact
              </Link>
            </div>
            <div className="xl:flex hidden items-center">
              <Link
                className="bg-[#FF7350] hover:bg-[#125875] duration-300 text-white py-5 px-6 font-semibold"
                href={"/admission-open"}
              >
                ADMISSION OPEN
              </Link>
            </div>
          </div>
          <div className="dropdown dropdown-bottom dropdown-end lg:hidden">
            <label
              onClick={() => setCloseNavbar(true)}
              tabIndex={0}
              className="btn m-1"
            >
              <i className="fa-solid fa-bars"></i>
            </label>
            {closeNavbar && (
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link
                    className="nav my-4 bg-transparent hover:text-[#FF7350] duration-300"
                    href={"/"}
                    onClick={() => setCloseNavbar(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav my-4 bg-transparent hover:text-[#FF7350] duration-300"
                    href={"/about"}
                    onClick={() => setCloseNavbar(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav my-4 bg-transparent hover:text-[#FF7350] duration-300"
                    href={"/courses"}
                    onClick={() => setCloseNavbar(false)}
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav my-4 bg-transparent hover:text-[#FF7350] duration-300"
                    href={"/pages"}
                    onClick={() => setCloseNavbar(false)}
                  >
                    Pages
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav my-4 bg-transparent hover:text-[#FF7350] duration-300"
                    href={"/blog"}
                    onClick={() => setCloseNavbar(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav my-4 bg-transparent hover:text-[#FF7350] duration-300"
                    href={"/contact"}
                    onClick={() => setCloseNavbar(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
