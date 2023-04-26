import React from 'react';

const ScholarshipPrograms = () => {
    return (
        <div>
           <div className="bg-[#579bb2]  h-full lg:h-[250px] mt-20 flex flex-col lg:flex-row  items-center justify-center  ">
        <div className="w-[50%] px-4 lg:px-10">
          <h1 className="text-4xl text-white font-bold pb-5 pt-5 lg:pt-0">
            Scholarship Programs
          </h1>
          <p className="text-xl text-white ">
            At Estuidar University, we prepare you to launch your career by
            providing a supportive, creative, and professional environment from
            which to learn practical skills and build a network of industry
            contacts.
          </p>
        </div>
        <div>
          <div className="lg:px-10 mt-5 lg:mt-0 pb-10 lg:pb-0">
            <button className="text-white bg-[#ff7350] px-10 py-4 rounded-sm hover:bg-[#447382] ">
              Financial Aid
            </button>
          </div>
        </div>
      </div> 
        </div>
    );
};

export default ScholarshipPrograms;