import React from 'react';
import UpCard from "./UpCard";

const UpComing = ({ data }) => {
    console.log(data.UpCorse)
    return (
        <div>
            <div className='text-center mt-10'>
                <h1 className='text-7xl my-4 font-bold text-slate-700'>Upcoming Courses</h1>
                <p className='text-xl font-bold text-slate-700'>Wait For a while</p>
            </div>
            <div className='m-10 p-10 grid justify-items-center'>
                <div className='grid lg:grid-cols-3 gap-6'>
                    {
                        data.UpCorse.map(item => <UpCard
                            item={item}
                            key={item.id}
                        ></UpCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UpComing;