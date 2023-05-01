import React from 'react';
import GallaryCard from "./GallaryCard";

const Gallary = ({ data }) => {
    console.log(data);
    return (
        <div className=''>
            <div className="hero h-96 my-10" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZwy6jfgN9f6mDImJPIlr86iR6IKtjirIzg&usqp=CAU")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-white font-bold">Our Gallery</h1>
                    </div>
                </div>
            </div>
            <div className='grid justify-items-center my-20'>
                <div className='flex gap-5'>
                    <button className="btn btn-error text-white">View all</button>
                    <button className="btn btn-active btn-ghost  text-black">Business</button>
                    <button className="btn btn-active btn-ghost  text-black">Economics</button>
                    <button className="btn btn-active btn-ghost  text-black">Finance</button>
                </div>
            </div>
            <div className='m-20 p-10'>
                <div className=' grid grid-cols-3 gap-6'>
                    {/* {
                        data ? (<div> */}
                    {
                        data.Gimg.map(item => <GallaryCard
                            item={item}
                            key={item.id}
                        ></GallaryCard>)
                    }
                    {/* </div>) : (<div className='text-center'><h2 className='text-black text-center text-3xl'>Data not available</h2></div>) */}
                    {/* } */}
                </div>

            </div>

        </div>
    );
};

export default Gallary;