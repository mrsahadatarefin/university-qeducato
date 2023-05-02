import React from 'react';

const AdmissionAid = () => {
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div className=' w-1/2'>
                    <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/about_img.png" className="w-12/12 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2 ml-4 text-black'>
                    <h1 className="lg:text-5xl md:text-5xl font-bold">Admission & Aid</h1>
                    <p className="py-6 text-xl">Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational.</p>
                    <button className="bg-[#ff7350] px-6 py-3 rounded-md text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default AdmissionAid;