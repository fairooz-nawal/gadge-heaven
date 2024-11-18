
import { Link } from 'react-router-dom';
const Category = ({card}) => {
   const {id,name,price,image} = card;
    return (
        <div>
            <div className="max-w-[350px] bg-gray-200 shadow-xl">
                <div className="h-[250px] px-10 pt-10">
                    <img
                        className="w-full h-full rounded-xl"
                        src={image}
                        alt={name} />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price:{price}k</p>
                    <div className="card-actions">
                        <Link className="btn border-2 border-[#9538E2] rounded-full text-[#9538E2] bg-white" to={`/product/${id}`}>View Detail</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;