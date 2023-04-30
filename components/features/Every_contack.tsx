import React from 'react';
import styles from '../../styles/features/every_contack.module.css'
import {BsArrowRight} from 'react-icons/bs'


const Every_contack = () => {
    return (
        <div>
            <div className={`${styles.every_main} flex flex-wrap py-10 gap-7`}>
                <div className={`${styles.get_every} `}>
                <h1 className='text-5xl font-bold m-3'>Get every single answer here.</h1>
                <h4 className='py-3 mt-6 text-2xl m-3 text-gray-500'>A business or organization established to provide a particular service, <br /> typically one that involves a organizing transactions.</h4>   
                <div className={`${styles.tab} pt-2`}>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-white rounded-box m-3">
                <div className="collapse-title text-lg font-medium">
                01 How do you respond to negative feedback ? 
                </div>
                <div  className="collapse-content">
                <p tabIndex={0}>UX design is a highly collaborative process. Take this opportunity to talk about successful collaboration. This could be a group project or a team effort in a previous job. No matter the example you choose, remember to point out the role you played in the group, how you overcame any challenges.</p>
                </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-white rounded-box m-3">
                <div className="collapse-title text-lg font-medium">
                02What is the most significant learning from webinar ?
                </div>
                <div  className="collapse-content">
                <p tabIndex={0}>This helps students broaden their skills, as well as their understanding of their field of interest. This also allows students to attain new knowledge and skills that can supplement or complement their main field of study.</p>
                </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-white rounded-box m-3">
                <div className="collapse-title text-lg font-medium">
                03 What is 3D digital art used for ?
                </div>
                <div  className="collapse-content">
                <p tabIndex={0}>A three-dimensional (3D) graphics artist designs digital animation or footage that is used for characters, landscapes, backgrounds and other elements in film, television or video game production.</p>
                </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-white rounded-box m-3">
                <div className="collapse-title text-lg font-medium">
                04 What is e-learning market ?
                </div>
                <div  className="collapse-content">
                <p tabIndex={0}>E-learning refers to training and testing services conducted or shared through the Internet. Growing Internet, mobile, and smartphone penetration are one of the fundamental growth drivers of the e-learning market.</p>
                </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-white rounded-box m-3">
                <div className="collapse-title text-lg font-medium">
                05 What are media questions ?
                </div>
                <div  className="collapse-content">
                <p tabIndex={0}>The main purpose of a media questions list is to assist members of the media in preparing for any follow-up interviews that they may wish to conduct with the principals involved in the event covered in the press release.</p>
                </div>
              </div>             
             </div>                        
            </div>
                <div className={`${styles.contact} text-center p-2 lg:p-0`}>
                    <h2 className='py-4'>Make An Contact</h2>
                    <form >
                        <input className='w-72 lg:w-96 bg-white p-3 m-3 rounded-sm' type="text" placeholder='Your Name' /> <br />
                        <input className='w-72 lg:w-96 bg-white p-3 m-3 rounded-sm' type="text" placeholder='Your Email' /> <br />
                        <input className=' w-72 lg:w-96 bg-white p-3 m-3 rounded-sm' type="number" placeholder='Your Phone' /> <br />                       
                        <textarea placeholder='Write Comments' className=' w-72 lg:w-96 bg-white p-3 m-3 rounded-sm' rows={5}></textarea>
                        <button className='btn btn-md'>Submit Now <span className='font-semibold text-2xl mx-1'><BsArrowRight /></span> </button>
                    </form>                  
                </div>
            </div>
        </div>
    );
};

export default Every_contack;