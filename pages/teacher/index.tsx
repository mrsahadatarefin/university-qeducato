import React from 'react';
import banner from '../../public/assates/teachers/teacher.jpg'
import Image from 'next/image';
import OurExpert from '@/components/ourExpart/OurExpert';


const index = () => {
    return (
        <div className=''>
             <div className=" relative  saturate-50 " style={{}}>
        <Image src={banner} alt=" " className="  w-full "></Image>
      </div>
      <div className="  absolute left-[12%] lg:left-[50%] top-[50%]    ">
        <h2 className="text-6xl font-bold text-white "> Teacher</h2>
      </div>
 <OurExpert/>
      
        </div>
    );
};

export default index;