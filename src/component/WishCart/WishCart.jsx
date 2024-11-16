import React, { useContext } from "react";
import { ContextApi } from "../ContextAPI/ContextApi";
import WishCartCard from "../WishCartCard/WishCartCard";
const WishCart = () => {
    const { wishproduct } = useContext(ContextApi);
    return (
        <div >   
        {
            wishproduct.length !== 0 ? <><h1 className="text-2xl text-center text-gray-900 mt-5">Total Price: ${wishproduct.reduce((acc,curr)=>acc+curr.price,0)}</h1>{wishproduct.map(info=> <WishCartCard key={info.id} info={info}></WishCartCard>) }</>:  <div className="h-[100px] lg:h-[100px] max-w-md lg:max-w-[1140px] mx-auto p-5 my-[100px] rounded-xl bg-gray-200"> <h1 className="text-3xl text-center">No Product Selected</h1></div>
        }
        </div>
    );
};

export default WishCart;