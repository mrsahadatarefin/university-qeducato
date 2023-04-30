import React, { useEffect } from 'react';
import styles from '../../styles/features/events.module.css'
import { GetServerSideProps } from 'next';
import {FaGraduationCap} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'

const Events = ({data}: any) => {
    //console.log(data);
    
    return (
        <div>
            
            <div className={`${styles.events_main} py-8`}>
                <h4 className={`${styles.our_event} flex text-center py-2 justify-center font-semibold`}> <span className='mt-2 mx-2'><FaGraduationCap /></span>  Our Events</h4>
                
                <h2 className={`${styles.upcoming} text-center py-2`}>Upcoming Events</h2>
           <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           {
            data.data.info.map(event => <div key={event.id} className="events mt-6 py-2 p-4 ">
                <div className={`${styles.event} card`}>
                    <img src={event.image} alt="" />
                    <div className={`${styles.date}`}>
                        <h5>{event.date.slice(0,2)} </h5>
                        <p>March 2023</p>
                    </div>
                    <div className={`${styles.card_info} p-4`}>
                    <h2>{event.name}</h2>
                    <p className=''>{event.info.slice(0,110)}..</p>
                    <div className={`flex py-2 mt-2`}>
                        <p className=''>{event.date} </p> <span className='mx-2 mt-1'><BsArrowRight /></span>
                        <p className={`${styles.address} lg:mx-0 mx-0 font-semibold`}>{event.address}</p>
                    </div>
                    </div>
                </div>
            </div>)
           }   
           </div>
             
            </div>
        </div>
    );
};

export default Events;
