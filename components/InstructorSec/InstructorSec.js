import React from 'react';
import InstraCard from "./InstraCaed";

const InstructorSec = ({ data }) => {
    return (
        <div>
            <div className='text-center mt-10'>
                <h1 className='lg:text-7xl text-4xl my-4 font-bold text-slate-700'>Featured Instructors</h1>
                <p className='text-xl font-bold text-slate-700'>Meet the Team</p>
            </div>
            <div className='m-10 grid justify-items-center'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6'>
                    {
                        data.Instrac.map(item => <InstraCard
                            item={item}
                            key={item.id}
                        ></InstraCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default InstructorSec;