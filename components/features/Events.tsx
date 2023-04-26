import React, { useEffect } from 'react';
import styles from '../../styles/features/events.module.css'
import { GetServerSideProps } from 'next';



const Events = ({data}: any) => {
    console.log(data);
    return (
        <div>
            <div className={`${styles.events_main} py-8`}>
                <h4 className={`${styles.our_event} text-center py-2`}>Our Events</h4>
                <h2 className={`${styles.upcoming} text-center py-2`}>Upcoming Events</h2>
           
            <div className="events mt-6 py-2 p-4 ">
                <div className={`${styles.event} card`}>
                    <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-1.jpg" alt="" />
                    <div className={`${styles.date}`}>
                        <h5>10 </h5>
                        <p>March 2023</p>
                    </div>
                    <div className={`${styles.card_info} p-4`}>
                    <h2>Basic UI & UX Design for new development</h2>
                    <p >The world of search engine optimization is complex and ever-changing</p>
                    <div className={`flex py-2 mt-2`}>
                        <p>20 March, 2023  </p>
                        <p className={`${styles.address} lg:mx-6 mx-0`}>12/A, NewYork Sydney City</p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Events;
