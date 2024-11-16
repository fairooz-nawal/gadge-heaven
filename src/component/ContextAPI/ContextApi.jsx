import React, { createContext, useEffect,useState } from 'react';

export const ContextApi = createContext();
  
export const ApiProvider = ({children}) => {
    const [fakedata, setFakeData] = useState([]);
    const [selectedproduct, setSelectedproduct] = useState([]);
    const [wishproduct, setWishproduct] = useState([]);
    useEffect(()=>{
        fetch("../public/Fakedata.json")
        .then(res => res.json())
        .then(data => setFakeData(data))
    },[])
   
    const handleSelectedproduct = (id) =>{
       const found = fakedata.filter(product => product.id === id);
       const found2 = [...selectedproduct,...found];
       setSelectedproduct(found2);
    }
    const handleWishproduct = (id) =>{
       const foundwish = fakedata.filter(product => product.id === id);
       const foundwish2 = [...wishproduct,...foundwish];
       setWishproduct(foundwish2);
    }
  
    
 return(
      <ContextApi.Provider value={{fakedata,handleSelectedproduct,selectedproduct,handleWishproduct,wishproduct}}>{children}</ContextApi.Provider>
 )

    
};

