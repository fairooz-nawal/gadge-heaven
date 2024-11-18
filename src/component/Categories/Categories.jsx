import { useContext } from "react";
import Category from "../Category/Category";
import { ContextApi } from "../ContextAPI/ContextApi";
const Categories = () => {
    const {category} = useContext(ContextApi);
    
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              category.map(card => <Category key={card.id} card={card}></Category>)
            }
        </div>
        </>
        
    );
};

export default Categories;