import React from 'react';

import {BsArrowRight} from 'react-icons/bs'
// import {FaGraduationCap} from 'react-icons/fa'

const Scholarship = () => {
    return (
        <div className='py-12 '>
           <div className={`bg-[#125875]  py-10 p-2 flex flex-wrap items-center justify-around`}>
            <div className="">
                <h1 className='text-white text-5xl font-bold pb-4 '>Scholarship Programs</h1>
                <p className='text-gray-300 text-xl '>At Estuidar University, we prepare you to launch your career by providing a supportive, creative, and <br /> professional environment from which to learn practical skills and build a network of industry contacts.</p>
            </div>
           <div>
           <button className='btn bg-[#ff7350]  '>Financial Aid <span className='mx-2 font-semibold text-2xl'><BsArrowRight /></span>  </button>
           </div>
           </div>

           
        </div>
    );
};

export default Scholarship;