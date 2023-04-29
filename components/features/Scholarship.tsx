import React from 'react';
import styles from '../../styles/features/events.module.css'
import {BsArrowRight} from 'react-icons/bs'

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
        </div>
    );
};

export default Scholarship;