import React from 'react';
import styles from '../../styles/features/events.module.css'
import Link from 'next/link';
import {BsArrowRight} from 'react-icons/bs'
import { GetStaticProps } from 'next';

export const getServerSideProps: GetStaticProps = async ()=>{
    const res = await fetch('http://localhost:3000/api/data')
    const data = await res.json()
    return{
        props:{
           data
        }
    }
  }

const EventPages = ({data}: any ) => {
    //console.log(data);
    
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
            <div className={`${styles.eventDetails} grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-12 py-8`}>
           {
            data.info.map(event  => <div key={event.id} className="events mt-6 py-2 p-4 ">
               <Link href={`/events/${event.id}`}> <div className={`${styles.event} card`}>
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
                 </Link>
            </div>)
           }
           </div>
            
        </div>
    );
};

export default EventPages;