import React from "react";
import img from "../../public/assates/Testimonial/qt-icon.png";
import img1 from "../../public/assates/Testimonial/testi_avatar.png";
import img2 from "../../public/assates/Testimonial/testi_avatar_02.png";
import img3 from "../../public/assates/Testimonial/testi_avatar_03.png";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="mt-20 max-w-[1444px]  m-auto">
      <p className="text-xl text-[#ff7350] text-center font-bold pb-10">
        Testimonial
      </p>
      <h2 className="text-5xl text-black text-center font-bold mb-10">
        What Our Clients Says
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <div className="px-10 bg-[#F0F7FF]  mx-5 hover:bg-gray-200 rounded-md" >
      
       <Image className=" h-[50px] m-auto mb-10 mt-5 " src={img} alt=""></Image>
      
        <p className="text-center text-xl mb-10  ">
          stumbled upon the online MESA certificate because I needed a program
          that was fully asynchronous due to my full-time job. Since this was my
          first foray into online instruction, I was a bit hesitant. I’m happy
          to report that I couldn’t 
        </p>
       <div> <Image src={img1} alt="" className=" h-[75px] m-auto mb-10 "></Image></div>
        </div>
        <div className="px-10 bg-[#F0F7FF] mx-5 hover:bg-gray-200 rounded-md " >
      
       <Image className=" h-[50px] m-auto mb-10 mt-5 " src={img} alt=""></Image>
      
        <p className="text-center text-xl mb-10 ">
           I needed a program
          that was fully asynchronous due to my full-time job. Since this was my
          first foray into online instruction, I was a bit hesitant. I’m happy
          to report that I couldn’t have made a better choice! In fact, the
          courses were so thorough
        </p>
       <div> <Image src={img2} alt="" className=" h-[75px] m-auto mb-10 "></Image></div>
        </div>
        <div className="px-10 bg-[#F0F7FF] mx-5  hover:bg-gray-200 rounded-md " >
      
       <Image className=" h-[50px] m-auto mb-10 mt-5  " src={img} alt=""></Image>
      
        <p className="text-center text-xl mb-10 ">
         MESA certificate because I needed a program
          that was fully asynchronous due to my full-time job. Since this was my
          first foray into online instruction, I was a bit hesitant. I’m happy
          to report that I couldn’t have made a better choice! In fact, the
          
        </p>
       <div> <Image src={img3} alt="" className=" h-[75px] m-auto mb-10 "></Image></div>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonial;
