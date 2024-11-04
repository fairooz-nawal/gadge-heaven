import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Cards from '../Cards/Cards';
const Home = () => {
    return (
        <div className='flex justify-around bg-white text-black'>
            <div className=""><Sidebar></Sidebar></div>
            <div className=""><Cards></Cards></div>
        </div>
    );
};

export default Home;