import React from 'react';
import styles from '../../styles/features/events.module.css'
import {BsArrowRight} from 'react-icons/bs'
import {FaGraduationCap} from 'react-icons/fa'

const Scholarship = () => {
    return (
        <div className='py-12 '>
           <div className={`${styles.scholar} py-10 p-2 flex flex-wrap justify-around`}>
            <div className="">
                <h1>Scholarship Programs</h1>
                <p>At Estuidar University, we prepare you to launch your career by providing a supportive, creative, and <br /> professional environment from which to learn practical skills and build a network of industry contacts.</p>
            </div>
            <button className='btn btn-md'>Financial Aid <span className='mx-2 font-semibold text-2xl'><BsArrowRight /></span>  </button>
           </div>

           <div className={`${styles.school} flex flex-wrap gap-5 justify-evenly py-16`}>
            <div className="school_img lg:p-0 p-2">
                <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/about_img_04.png" alt="" />
            </div>
            <div className={`${styles.school_text} mt-12 lg:p-0 p-2`}>
                <h4 className='text-2xl font-semibold flex'> <span className='mx-2 text-1xl mt-1'><FaGraduationCap /></span> About Our High School</h4>
                <h1 className='text-4xl font-bold py-4'>We Are High School Since <br /> 10 Years Experience</h1>
                <p className='text-gray-500 text-lg py-1'>Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational.</p> 
                <p className='py-5'>We are proud to offer top ranige in employment services such and asser payroll and benefits administrato managemen and asistance with global business range ployment employer readings from religious texts or literature are also commonly inc compliance.</p>
                <button className='btn btn-md border-none'>Read more <span className='mx-2 text-2xl ' ><BsArrowRight /></span></button>
            </div>
           </div>
        </div>
    );
};

export default Scholarship;