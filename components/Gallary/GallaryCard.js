import React from 'react';

const GallaryCard = ({ item }) => {
    const { img } = item;
    return (
        <div className=" w-96  shadow-xl">
            <figure><img src={img} alt="img" /></figure>
        </div>
    );
};

export default GallaryCard;