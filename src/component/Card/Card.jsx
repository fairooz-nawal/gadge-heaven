import React from 'react';

const Card = ({card}) => {
   const {name,price,image} = card;
    return (
        <div>
            <div className="card bg-gray-100 w-96 shadow-xl">
                <div className="h-[300px] px-10 pt-10">
                    <img
                        className="w-full h-full rounded-xl"
                        src={image}
                        alt={name} />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price:{price}k</p>
                    <div className="card-actions">
                        <button className="btn border-2 border-[#9538E2] rounded-full text-[#9538E2] bg-white">View Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;