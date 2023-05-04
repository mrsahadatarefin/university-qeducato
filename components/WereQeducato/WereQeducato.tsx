import React from 'react';
import ReactPlayer from "react-player";

const WereQeducato = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/cta_bg.png")` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}

                    <div className='w-1/2 flex items-center justify-center'>

                        <label htmlFor="my-modal-5" className="btn btn-ghost btn-active">Watch Video</label>
                    </div>


                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-7/12 max-w-5xl">
                            <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <ReactPlayer className='w-full' controls url='https://www.youtube.com/watch?v=-jV1c1cm0sQ' />

                        </div>
                    </div>


                    {/* <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                    <label htmlFor="my-modal-4" className="modal cursor-pointer w-full">
                        <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <label className="modal-box w-11/12 relative" htmlFor="">
                           
                        </label>
                    </label> */}

                    <div className='w-1/2 mt-10'>
                        <h1 className="lg:text-7xl md:text-5xl sm:text-3xl font-bold">We're <span className='text-red-500 underline underline-offset-8'>Qeducato</span> <br />& We're Diffrent</h1>
                        <p className="py-8 lg:text-xl bold">Our community is being called to reimagine the future. As the only university where a renowned design school colleges.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WereQeducato;