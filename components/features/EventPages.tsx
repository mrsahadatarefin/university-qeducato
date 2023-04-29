import React from 'react';
import styles from '../../styles/features/events.module.css'
import Link from 'next/link';

const EventPages = () => {
    return (
        <div>
            <div className={`${styles.header} text-center`}>
                <h1 className='text-6xl font-bold text-white  py-44'>Our Event</h1>
                <div className={`${styles.menu} text-white flex`}>                               
                        <div className="flex">                        
                        <p className='mx-6 font-bold'>Home</p>                        
                        <span className='mt-5'>|</span> 
                        <p className='mx-4 font-bold'>Our Event</p>                           
                        </div>                       
                </div>
            </div>
            
        </div>
    );
};

export default EventPages;