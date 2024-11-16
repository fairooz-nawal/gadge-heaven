import { useState,useContext } from "react";
import Card from "../Card/Card";
import { ContextApi } from "../ContextAPI/ContextApi";
const Cards = () => {
    const {fakedata} = useContext(ContextApi);
    
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              fakedata.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
        </>
        
    );
};

export default Cards;