import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Banner from '../banner/Banner'
const Home = () => {
    return (
        <div className="max-w-[1540px] mx-auto px-5">
            <Banner></Banner>
            <div className='grid grid-cols-1 lg:grid-cols-4 justify-around bg-white text-black'>
                <div className=""><Sidebar></Sidebar></div>
                <div className="col-span-3"><Outlet></Outlet></div>
            </div>
        </div>

    );
};

export default Home;