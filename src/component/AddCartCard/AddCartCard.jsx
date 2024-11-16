
const AddCartCard = ({ info }) => {
    return (
        <div>
            <div className=""></div>
            <div className="max-w-md lg:max-w-[1140px] mx-auto bg-white">
                 <div className="card lg:card-side shadow-xl flex lg:flex p-5 items-center">
                    <div className="w-[300px]">
                        <img className="w-full h-full"
                                src={info.image}
                                alt={info.name}
                        />
                        </div>
                    <div className="card-body">
                            <h2 className="card-title text-black text-3xl">{info.name}</h2>
                            <p className=" text-gray-400 text-base">{info.description}</p>
                            <p className=" text-gray-600 text-xl font-bold">Price: ${info.price} </p>
                    </div>
                    <div className="card-actions justify-start">
                            <button className="btn bg-purple-600 text-white" >Delete</button>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default AddCartCard;