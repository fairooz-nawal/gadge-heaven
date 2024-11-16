import React, { useContext } from "react";
import { ContextApi } from "../ContextAPI/ContextApi";
import AddCartCard from "../AddCartCard/AddCartCard";
const AddCart = () => {
    const { selectedproduct } = useContext(ContextApi);
    return (
        <div >   
        {
            selectedproduct.length !== 0 ? <><h1 className="text-2xl text-center text-gray-900 mt-5">Total Price: ${selectedproduct.reduce((acc, curr) => acc + curr.price, 0)}</h1>{selectedproduct.map(info=> <AddCartCard key={info.id} info={info}></AddCartCard>)}</> :  <div className="h-[100px] lg:h-[100px] max-w-md lg:max-w-[1140px] mx-auto p-5 my-[100px] rounded-xl bg-gray-200"> <h1 className="text-3xl text-center">No Product Selected</h1></div>
        }
        </div>
    );
};

export default AddCart;