import React from 'react';
import styles from '../../styles/features/every_contack.module.css'

const tabs = [
   
]
const Every_contack = () => {
    return (
        <div>
            <div className={`${styles.every_main} flex flex-wrap py-10 gap-7`}>
                <div className={`${styles.get_every} `}>
                <h1 className='text-5xl font-bold m-3'>Get every single answer here.</h1>
                <h4 className='py-3 mt-6 text-2xl m-3'>A business or organization established to provide a particular service, <br /> typically one that involves a organizing transactions.</h4>   
                <div className={`${styles.tab} pt-2`}>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-white rounded-box m-3">
                <div className="collapse-title text-xl font-medium">
                01 Cras turpis felis, elementum sed mi at arcu ?
                </div>
                <div  className="collapse-content">
                <p tabIndex={0}>Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.</p>
                </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-white rounded-box m-3">
                <div className="collapse-title text-xl font-medium">
                02 Vestibulum nibh risus, in neque eleifendulputate sem ?
                </div>
                <div  className="collapse-content">
                <p tabIndex={0}>Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.</p>
                </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-white rounded-box m-3">
                <div className="collapse-title text-xl font-medium">
                03 Donec maximus, sapien id auctor ornare ?
                </div>
                <div  className="collapse-content">
                <p tabIndex={0}>Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.</p>
                </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-white rounded-box m-3">
                <div className="collapse-title text-xl font-medium">
                04 Vestibulum nibh risus, in neque eleifendulputate sem ?
                </div>
                <div  className="collapse-content">
                <p tabIndex={0}>Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.</p>
                </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-white rounded-box m-3">
                <div className="collapse-title text-xl font-medium">
                05 Donec maximus, sapien id auctor ornare ?
                </div>
                <div  className="collapse-content">
                <p tabIndex={0}>Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.</p>
                </div>
                </div>             

                </div>
                           
                </div>
                <div className={`${styles.contact} text-center`}>
                    <h2 className='py-4'>Make An Contact</h2>
                    <form >
                        <input className='w-72 lg:w-96 bg-white p-3 m-3 rounded-sm' type="text" placeholder='Your Name' /> <br />
                        <input className='w-72 lg:w-96 bg-white p-3 m-3 rounded-sm' type="text" placeholder='Your Email' /> <br />
                        <input className=' w-72 lg:w-96 bg-white p-3 m-3 rounded-sm' type="number" placeholder='Your Phone' /> <br />                       
                        <textarea placeholder='Write Comments' className=' w-72 lg:w-96 bg-white p-3 m-3 rounded-sm' rows={5}></textarea>
                        <button className='btn btn-md'>Submit Now</button>
                    </form>                  
                </div>
            </div>
        </div>
    );
};

export default Every_contack;