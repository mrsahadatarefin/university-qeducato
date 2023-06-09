import React from 'react';

const monialCard = ({ data }) => {
    const { person } = data;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/qt-icon.png" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{person}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default monialCard;