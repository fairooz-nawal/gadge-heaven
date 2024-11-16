import { useLoaderData, useParams } from "react-router-dom";
import { Rate } from 'antd';
import { FaRegHeart } from "react-icons/fa";
import React, { useContext } from "react";
import { ContextApi } from "../ContextAPI/ContextApi";
const Product = () => {
    const { handleSelectedproduct,handleWishproduct} = useContext(ContextApi);
    const data = useLoaderData();
    const { productId } = useParams();
    const info = data.find(product => product.id == productId);

    return (
        <div className="relative h-[1200px] lg:h-[700px] px-5">
            <div className="h-[600px] lg:h-[300px] bg-[#9538E2] text-white text-center">
                <h1 className="text-3xl">Product Details</h1>
                <p>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className="lg:max-w-[1140px] mx-auto bg-white absolute top-[170px] lg:top-[100px] left-0 right-0">
                <div className="card lg:card-side shadow-xl p-5">
                    <figure className="lg:max-w-md">
                        <img
                            src={info.image}
                            alt={info.name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-black text-3xl">{info.name}</h2>
                        <p className=" text-gray-600 text-xl font-bold">Price: ${info.price} </p>
                        <div className="max-w-[110px] border-2 bg-lime-100 border-lime-600 text-lime-600 py-2 px-4 rounded-full">{info.availability == true ? "In Stock" : "Out of Stock"}</div>
                        <p className=" text-gray-400 text-base">{info.description} </p>
                        <p className=" text-gray-800 text-base font-bold">Specifications: </p>
                        {
                            info.specification.map((spec, id) => <p key={id} className=" text-gray-500 text-base">{id + 1}.{spec}</p>)
                        }
                        <p className="text-base text-black font-bold">Rating </p>
                        <div className="text-base text-black font-bold"><Rate className="ml-2" defaultValue={Math.floor(info.rating)} /> {info.rating}</div>
                        <div className="card-actions justify-start">
                            <button className="btn bg-purple-600 text-white" onClick={()=>handleSelectedproduct(info.id)}>Add to Card</button>
                            <button className="btn rounded-full bg-white text-black btn-outline" onClick={()=>handleWishproduct(info.id)}><FaRegHeart className="text-xl" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Product;