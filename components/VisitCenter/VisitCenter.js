import React from 'react';

const VisitCenter = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/8197534/pexels-photo-8197534.jpeg?auto=compress&cs=tinysrgb&w=600")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-7xl font-bold">Visit Our Language Resources Centre</h1>
                    <p className="mb-5 text-xl">State-of-the-art language learning facilities and online
                        resources.</p>
                    <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">Visit Now</button>
                </div>
            </div>
        </div>
    );
};

export default VisitCenter;