import React from 'react';
import styles from '../../styles/features/feauters.module.css'

const Feautures = () => {
    return (
        <div  className='w-full mt-20' data-aos="fade-up">         
            <div className= "max-w-[1444px] m-auto flex flex-col lg:flex-row w-full"  >
                <div className={`${styles.features_text} p-1 lg:p-9`} >
                    <div className="p-4 mx-0 lg:mx-6">
                    <h1 className='text-5xl font-bold'>Our Best Features</h1>
                    <p className='mt-5'>Special wedding garments are often worn, and the ceremony is sometimes followed by a wedding reception. Music, poetry.</p>
                    </div>
                    <div className={`${styles.logo_text} flex flex-wrap gap-5 py-4 p-2 mx-0 lg:mx-6`}>
                        <div className={styles.bg}>
                         <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/fea-icon01.png" alt="" className='w-full' />    
                        </div>                          
                        <div className="">               
                        <h2>Skilled Teachers</h2>
                        <p className='py-2'>Skilled teachers are highly trained and experienced educators who possess <br /> a wide range of teaching skills and strategies to effectively engage. </p>                       
                        </div> 
                    </div>
                    <div className={`${styles.logo_text} flex flex-wrap gap-5 py-4 p-2 lg:mx-6`}>
                    <div className={styles.bg}>
                        <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/fea-icon02.png" alt="" /> 
                        </div>
                        <div className="">                     
                        <h2>Affordable Courses</h2>
                        <p className='py-2'>There are many affordable courses available for individuals  who want to <br />learn a new skill or further their education.  </p>
                        </div> 
                    </div>
                    <div className={`${styles.logo_text} flex flex-wrap gap-5 py-4 p-2 lg:mx-6`}>
                    <div className={styles.bg}>
                        <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/fea-icon03.png" alt="" />  
                        </div>
                        <div className="">               
                        <h2>Efficient & Flexible</h2>
                        <p className='py-2'>Efficient and flexible refer to the ability to accomplish tasks or  goals in<br /> a productive and adaptable manner. Here are some ways to be efficient.</p>
                        </div>  
                    </div>
                </div>
                <div className={`${styles.features_img}`}>
                    <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/steps-img.png" alt="" className='w-full' />
                                   
                </div>
            </div>
        </div>
    );
};

export default Feautures;