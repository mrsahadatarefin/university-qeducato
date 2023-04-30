import React from 'react';

const InstraCaed = ({ item }) => {
    const { img, name, spacial } = item;
    return (
        <div className="card w-80 bg-white shadow-xl">
            <figure className="">

                <div className="avatar">
                    <div className="w-48 rounded-full">
                        <img src={img} />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center ">
                <h2 className="card-title text-slate-900">${name}</h2>
                <p className='text-slate-700'>{spacial}</p>
            </div>
        </div>
    );
};

export default InstraCaed;