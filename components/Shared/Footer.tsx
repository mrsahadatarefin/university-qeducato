import Link from "next/link";
import React from "react";


const Footer = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  return (
    <div>
      <div>
        <div className="bg-[#032E3F] xl:p-[100px] p-10 grid gird-cols-1 xl:grid-cols-12 gap-10 text-white">
          <div className="col-span-4">
            <div className="text-2xl font-bold mb-10">
              <h4>About Us</h4>
              <p className="text-[#FF7350] mt-[-20px]">________</p>
            </div>
            <p className="text-lg text-justify">
              Suspendisse non sem ante. Cras pretium gravida leo a convallis.
              Nam malesuada interdum metus, sit amet dictum ante congue eu.
              Maecenas ut maximus enim.
            </p>
            <div className="flex gap-5 mt-10">
              <div className="w-10 h-10 rounded-full bg-[#496874] hover:bg-[#FF7350] duration-300 flex justify-center items-center">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#496874] hover:bg-[#FF7350] duration-300 flex justify-center items-center">
                <i className="fa-brands fa-instagram "></i>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#496874] hover:bg-[#FF7350] duration-300 flex justify-center items-center">
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-10">
              <h4>Our Links</h4>
              <p className="text-[#FF7350] mt-[-20px]">________</p>
            </div>
            <Link
              className="block mb-3 text-lg hover:text-[#FF7350] duration-300 "
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="block mb-3 text-lg hover:text-[#FF7350] duration-300 "
              href={"/about"}
            >
              About
            </Link>
            <Link
              className="block mb-3 text-lg hover:text-[#FF7350] duration-300 "
              href={"/courses"}
            >
              Courses
            </Link>
            <Link
              className="block mb-3 text-lg hover:text-[#FF7350] duration-300 "
              href={"/blog"}
            >
              Blog
            </Link>
            <Link
              className="block mb-3 text-lg hover:text-[#FF7350] duration-300 "
              href={"/contact"}
            >
              Contact
            </Link>
          </div>
          <div className="col-span-3 text-lg">
            <div className="text-2xl font-bold mb-10">
              <h4>Latest Post</h4>
              <p className="text-[#FF7350] mt-[-20px]">________</p>
            </div>
            <div className="flex mb-10">
              <img src="/s-blogimg-01.png" alt="blog images" />
              <div className="ml-5">
                <p>Nothing impossible to need hard work</p>
                <p className="text-[#FF7350] ">7 March, 2023</p>
              </div>
            </div>
            <div className="flex">
              <img src="/s-blogimg-02.png" alt="blog images" />
              <div className="ml-5">
                <p>Nothing impossible to need hard work</p>
                <p className="text-[#FF7350] ">7 March, 2023</p>
              </div>
            </div>
          </div>
          <div className="col-span-3 text-lg">
            <div className="text-2xl font-bold mb-10">
              <h4>Contact Us</h4>
              <p className="text-[#FF7350] mt-[-20px]">________</p>
            </div>
            <div className="flex items-center mb-5">
              <div className="w-10 h-10 rounded-full bg-[#FF7350] duration-300 flex justify-center items-center mr-5">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <p>+1 (444) 000-8888</p>
                <p>+880 198 765 4321</p>
              </div>
            </div>
            <div className="flex items-center mb-5">
              <div className="w-10 h-10 rounded-full bg-[#FF7350] duration-300 flex justify-center items-center mr-5">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div>
                <p>info@example.com</p>
                <p>help@example.com</p>
              </div>
            </div>
            <div className="flex items-center mb-5">
              <div className="w-10 h-10 rounded-full bg-[#FF7350] duration-300 flex justify-center items-center mr-5">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <p>1247/Plot No. 39, 15th </p>
                <p>phase, LHB Colony, Kanpur</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FF7350] py-5 text-white font-semibold">
          <div className="xl:mx-[100px] mx-5 xl:flex justify-between">
            <img className="h-7" src="/web-logo-1.png" alt="" />
            <div>Copyright &#169; Northen Lights university {year}. All right reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;





