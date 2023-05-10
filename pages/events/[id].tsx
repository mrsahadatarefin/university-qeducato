import React from 'react';
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
 
    return (
        <div className=''>
            <div className='hero h-96 text-center bg-no-repeat  bg-black ' style={{backgroundImage: `url("https://www.exeter.ac.uk/media/universityofexeter/studying/images/responsiveimages/16095.jpg")`}}>
                <h1 className='text-white text-5xl font-bold'>Basic UI & UX Design for new <br /> development</h1>
                   </div>
                   <div className="">
             <div className=' text-white  bg-[#ff7350] lg:w-2/6 md:w-2/6 w-52 mx-auto rounded-full  pb-4 -mt-3'>                              
                        <div className="flex flex-wrap">                        
                        <p className='mx-6 font-bold mt-2'>Home</p>                        
                        <span className='mt-2'>|</span>
                        <p className='mx-4 font-bold mt-2'>Basic UI & UX Design for new development</p>                          
                        </div>                      
                </div>
                </div>                  
                <div className='max-w-[1200px] mx-auto'>
                    <img className='mt-16 p-2 lg:p-0' src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-1.jpg" alt="" />
                    <div className='flex flex-wrap gap-8 justify- py-6'>
                        <div className='max-w-[820px] p-2 lg:p-0'>
                            <h1 className='text-5xl font-semibold py-4'>Art & 3D Model Contest 2023</h1>
                            <p className='py-4 text-gray-500'>The world of search engine optimization is complex and ever-changing, but you can easily understand the basics, and even a small amount of SEO knowledge can make a big difference. Free SEO education is also widely available on the web, including in guides like this! (Woohoo!) This guide is designed to describe all major aspects of SEO, from finding the terms and phrases (keywords) that can generate qualified traffic to your website, to making your site friendly to search engines, to building links and marketing the unique value of your site.Etiam pharetra erat sed fermentum feugiat velit mauris egestas quam ut erat justo.</p>
                            <div className='bg-gray-800 h-52 justify-evenly text-white py-6 mt-5 flex flex-wrap'>
                            <h2 className='text-4xl font-bold mt-10'>100 <br /> <span className='text-sm font-normal'>Days</span> </h2>
                            <h2 className='text-4xl font-bold mt-10'>8 <br /> <span className='text-sm font-normal'>Hours</span> </h2>
                            <h2 className='text-4xl font-bold mt-10'>30 <br /> <span className='text-sm font-normal'>Minutes</span> </h2>
                            <h2 className='text-4xl font-bold mt-10'>50 <br /> <span className='text-sm font-normal'>Seconds</span> </h2>
                            </div>
                            <p className='py-5 text-gray-500'>
                            Fusce eleifend donec sapien sed phase lusa pellentesque lacus.Vivamus lorem arcu semper duiac. Cras ornare arcu avamus nda leo Etiam ind arcu. Morbi justo mauris tempus pharetra interdum at congue semper purus. Lorem ipsum dolor sit.The world of search engine optimization is complex and ever-changing, but you can easily understand the basics. <br />
                            </p>
                            <div className='flex flex-wrap mt-4'>
                                <Link className='text-gray-800 rounded-full m-2 text-2xl hover:text-[#ff7350]' href=''><BsFacebook /></Link>
                                <Link className='text-gray-800 rounded-full m-2 text-2xl hover:text-[#ff7350]' href=''><BsInstagram /></Link>
                                <Link className='text-gray-800 rounded-full m-2 text-2xl hover:text-[#ff7350]' href=''><FaTwitter /></Link>
                            </div>
                        </div>
                        <div className='w-[330px] bg-white h-[480px] z-10 border-2 card  lg:-mt-36 m-2 lg:m-0 -mt-0'>
                            <h2 className='text-2xl font-semibold py-3 bg-slate-700 text-white text-center rounded-sm'>Event Details</h2>
                             <p  className='py-4 p-4 font-semibold flex border-2 '><span className='mx-3 text-[#ff7350] text-xl mt-1'><BiTime /></span>  4:00 pm - 6:00 pm</p>                      
                             <p className='py-4 p-4 font-semibold flex border-2'><span className=' mx-3 text-[#ff7350] text-xl mt-1 '><BiCalendar /></span>  20 March, 2023</p>
                             <p className='py-4 p-4 font-semibold flex border-2'><span className='mx-3 text-[#ff7350] text-xl mt-1'><HiOutlineLocationMarker /></span> 12/A, NewYork Sydney City </p>                      
                                                                             
                             <p className='py-4 p-4 font-semibold flex border-2'><span className='mx-3 text-[#ff7350] text-xl mt-1'><CiMail /> </span> yourmail@gmail.com</p>                                                    
                             <p className='py-4 p-4 font-semibold flex border-2'><span className='mx-3 text-[#ff7350] text-xl mt-1'> <IoMdCall /> </span> +91 705 2101 786</p>    
                             <label htmlFor="my-modal" className='btn btn-md text-white w-52 lg:mx-12 mx-1 border-none bg-[#ff7350] mt-10'>Buy Ticket <small className='text-2xl font-semibold mx-3'><BsArrowRight /></small> </label>                      
                        </div>
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal text-white ">
                        <div className="modal-box  bg-[#125875] max-w-[410px]">
                            <h3 className="font-bold text-lg">Congratulations!</h3>
                           <div className="form mt-7">
                            <input className='m-3 p-2 w-56 md:w-80 bg-white text-black' type="text" placeholder='Your Name' /> <br />
                            <input className='m-3 p-2 w-56 md:w-80 bg-white text-black' type="email" placeholder='Your Email' /> <br />
                            <input className='m-3 p-2 w-56 md:w-80 bg-white text-black' type="text" placeholder='Your Number' /> <br />
                           </div>
                            <div className="modal-action">
                             <label htmlFor="my-modal" className='btn btn-md text-white w-56 md:w-80 mx-12 md:mx-8 border-none bg-[#ff7350] mt-6'>Submit</label>
                            </div>
                        </div>
                        </div>


                    </div>
                </div>            
        </div>
    );
};


export default EventDetails;

