import React from 'react';
import styles from '../../styles/features/eventDetails.module.css'
import {IoMdCall} from 'react-icons/io'
import {CiMail} from 'react-icons/ci'
import {BiCalendar} from 'react-icons/bi'
import {BiTime} from 'react-icons/bi'
import {BsArrowRight} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import Link from 'next/link';


const EventDetails = () => {

    const time = new Date().toLocaleTimeString()

    return (
        <div className=''>
            <div className={`${styles.header} py-10`}>
                <h1 >Basic UI & UX Design for new <br /> development</h1>
                   </div>                   
            <div className={`${styles.menu} text-gray-100 text-center flex`}>
                <div className="flex ">                        
                        <p className='mx-6 font-semibold mt-2 lg:mt-5'>Home</p>                        
                        <span className='mt-2 lg:mt-5'>|</span> 
                        <p className='mx-4 font-semibold mt-2 lg:mt-5'>Basic UI & UX Design for new development</p>                           
                        </div>  
                </div>
                <div className={`${styles.content}`}>
                    <img className='mt-16 p-2 lg:p-0' src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-1.jpg" alt="" />
                    <div className={`${styles.context_info} flex flex-wrap gap-8 justify- py-6`}>
                        <div className={`${styles.text} p-2 lg:p-0`}>
                            <h1 className='text-5xl font-semibold py-4'>Art & 3D Model Contest 2023</h1>
                            <p className='py-4 text-gray-500'>The world of search engine optimization is complex and ever-changing, but you can easily understand the basics, and even a small amount of SEO knowledge can make a big difference. Free SEO education is also widely available on the web, including in guides like this! (Woohoo!) This guide is designed to describe all major aspects of SEO, from finding the terms and phrases (keywords) that can generate qualified traffic to your website, to making your site friendly to search engines, to building links and marketing the unique value of your site.Etiam pharetra erat sed fermentum feugiat velit mauris egestas quam ut erat justo.</p>
                            <div className={`${styles.timeset} text-white py-6 mt-5 flex flex-wrap`}>
                            {/* {time} */}
                            <h2>200 <br /> <span>Days</span> </h2>
                            <h2>8 <br /> <span>Hours</span> </h2>
                            <h2>30 <br /> <span>Minutes</span> </h2>
                            <h2>50 <br /> <span>Seconds</span> </h2>
                            </div>
                            <p className='py-5 text-gray-500'>
                            Fusce eleifend donec sapien sed phase lusa pellentesque lacus.Vivamus lorem arcu semper duiac. Cras ornare arcu avamus nda leo Etiam ind arcu. Morbi justo mauris tempus pharetra interdum at congue semper purus. Lorem ipsum dolor sit.The world of search engine optimization is complex and ever-changing, but you can easily understand the basics. <br />
                            </p>
                            <div className={`${styles.social} flex flex-wrap mt-4`}>
                                <Link href=''><BsFacebook /></Link>
                                <Link href=''><BsInstagram /></Link>
                                <Link href=''><FaTwitter /></Link>
                            </div>

                        </div>
                        <div className={`${styles.form} card  lg:-mt-36 m-2 lg:m-0 -mt-0`}>
                            <h2 className='text-2xl font-semibold py-3 bg-slate-700 text-white text-center rounded-sm'>Event Details</h2>
                             <p  className='py-2 flex'><span className='mx-3'><BiTime /></span>  4:00 pm - 6:00 pm</p>                       
                             <p className='py-2 flex'><span className='mx-3'><BiCalendar /></span>  20 March, 2023</p>
                             <p className='py-2 flex'><span className='mx-3'><HiOutlineLocationMarker /></span> 12/A, NewYork Sydney City </p>                       
                                                                              
                             <p className='py-2 flex'><span className='mx-3'><CiMail /> </span> yourmail@gmail.com</p>                                                    
                             <p className='py-2 flex'><span className='mx-3'> <IoMdCall /> </span> +91 705 2101 786</p>     
                           <button className='btn btn-md text-white w-52 lg:mx-12 mx-1 '>Buy Ticket <small className='text-2xl font-semibold mx-3'><BsArrowRight /></small> </button>
                          
                        </div>
                    </div>
                </div>
         
        </div>
    );
};

export default EventDetails;