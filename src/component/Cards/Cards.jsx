import { useEffect,useState } from "react";
import Card from "../Card/Card";
const Cards = () => {
    const[cards, setCards] = useState([]);
    useEffect(() => {
        fetch("./Fakedata.json")
        .then(res => res.json())
        .then(data =>setCards(data))
    }, [])
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
        </>
        
    );
};

export default Cards;