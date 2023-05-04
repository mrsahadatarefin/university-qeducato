import React from 'react';
import Link from 'next/link';
import {BsArrowRight} from 'react-icons/bs'







const EventPages = ({data} ) => {
    //console.log(data);
   
    return (
        <div>
            <div className='hero  text-center bg-no-repeat bg-black h-[600npx] ' style={{backgroundImage: `url("https://www.exeter.ac.uk/media/universityofexeter/studying/images/responsiveimages/16095.jpg")`}} >
                <h1 className='text-6xl font-bold text-white  py-44'>Our Event</h1>
               
            </div>
            <div className="">
             <div className=' text-white  bg-[#ff7350] w-56 mx-auto rounded-xl pb-2'>                              
                        <div className="flex">                        
                        <p className='mx-6 font-bold mt-2'>Home</p>                        
                        <span className='mt-2'>|</span>
                        <p className='mx-4 font-bold mt-2'>Our Event</p>                          
                        </div>                      
                </div>
                </div>
            <div className={`max-w-screen-xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-12 py-8`}>
           {
            data.events.map(event  => <div key={event.id} className="events mt-6 py-2 p-4 ">
               <Link href={`/events/${event.id}`}> <div className={` card`}>
                    <img src={event.image} alt="" />
                    <div className='w-28 p-2 -mt-12 bg-[#ff7350] text white text-center'>
                        <h5 className='font-bold text-2xl text-white'>{event.date.slice(0,2)} </h5>
                        <p className='text-white text-xs'>March 2023</p>
                    </div>
                    <div className='p-4  hover:bg-[#d1eefa] '>
                    <h2 className='text-3xl font-semibold py-2'>{event.name}</h2>
                    <p className=''>{event.info.slice(0,110)}..</p>
                    <div className={`flex py-2 mt-2`}>
                        <p className=''>{event.date} </p> <span className='mx-2 mt-1'><BsArrowRight /></span>
                        <p className={` lg:mx-0 mx-0 font-semibold`}>{event.address}</p>
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

export async function getStaticProps() {
    const fs = require("fs/promises");
    const path = require("path");
    const filePath = path.join(process.cwd(), "/data", "/data.json");
  
    let data = await fs.readFile(filePath);
    data = JSON.parse(data);
  
    return {
      props: {
        data: data.data,
      },
    };
  }
  