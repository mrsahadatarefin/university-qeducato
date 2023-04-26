import React from 'react';
import styles from '../../styles/features/feauters.module.css'

const Feautures = () => {
    return (
        <div>         
            <div className={`${styles.features_main} flex flex-wrap py-12`}>
                <div className={`${styles.features_text} p-1 lg:p-9`} >
                    <div className="p-4 mx-0 lg:mx-6">
                    <h1 className='text-5xl font-bold'>Our Best Features</h1>
                    <p className='mt-5'>Special wedding garments are often worn, and the ceremony is sometimes followed by a wedding reception. Music, poetry.</p>
                    </div>
                    <div className={`${styles.logo_text} flex flex-wrap gap-5 py-4 p-2 mx-0 lg:mx-6`}>
                        <div className={styles.bg}>
                         <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/fea-icon01.png" alt="" />    
                        </div>                          
                        <div className="">               
                        <h2>Skilled Teachers</h2>
                        <p className='py-2'>Special wedding garments are often worn, and the ceremony is sttimes <br /> followed by a wedding reception. Music, poetry, prayers, or readings from.</p>
                        </div> 
                    </div>
                    <div className={`${styles.logo_text} flex flex-wrap gap-5 py-4 p-2 lg:mx-6`}>
                    <div className={styles.bg}>
                        <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/fea-icon02.png" alt="" /> 
                        </div>
                        <div className="">                     
                        <h2>Affordable Courses</h2>
                        <p className='py-2'>Special wedding garments are often worn, and the ceremony is sttimes <br /> followed by a wedding reception. Music, poetry, prayers, or readings from.</p>
                        </div> 
                    </div>
                    <div className={`${styles.logo_text} flex flex-wrap gap-5 py-4 p-2 lg:mx-6`}>
                    <div className={styles.bg}>
                        <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/fea-icon03.png" alt="" />  
                        </div>
                        <div className="">               
                        <h2>Efficient & Flexible</h2>
                        <p className='py-2'>Special wedding garments are often worn, and the ceremony is sttimes <br /> followed by a wedding reception. Music, poetry, prayers, or readings from.</p>
                        </div>  
                    </div>
                </div>
                <div className={`${styles.features_img}`}>
                    <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/steps-img.png" alt="" />
                                   
                </div>
            </div>
        </div>
    );
};

export default Feautures;