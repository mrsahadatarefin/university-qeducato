import React from 'react';

const UpCard = ({ item }) => {
    const { name, img, price } = item;
    return (
        <div className="card w-96 bg-white shadow-xl">
            <figure className="">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center ">
                <h2 className="card-title text-slate-900">${price}</h2>
                <p className='text-slate-700'>{name}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default UpCard;