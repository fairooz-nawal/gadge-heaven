import React from 'react';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='max-w-60'>
            <div className='flex-row space-y-5 border-2 border-gray-200 rounded-lg p-5'>
                <div className="w-[200px] bg-gray-100 rounded-full py-3 px-10"><NavLink className="text-gray-500">All Product</NavLink></div>
                <div className="w-[200px] bg-gray-100 rounded-full py-3 px-10"><NavLink className="text-gray-500">Laptop</NavLink></div>
                <div className="w-[200px] bg-gray-100 rounded-full py-3 px-10"><NavLink className="text-gray-500">Phone</NavLink></div>
                <div className="w-[200px] bg-gray-100 rounded-full py-3 px-10"><NavLink className="text-gray-500">Accesories</NavLink></div>
                <div className="w-[200px] bg-gray-100 rounded-full py-3 px-10"><NavLink className="text-gray-500">Smart Watch</NavLink></div>
                <div className="w-[200px] bg-gray-100 rounded-full py-3 px-10"><NavLink className="text-gray-500">Mac Book</NavLink></div>
                <div className="w-[200px] bg-gray-100 rounded-full py-3 px-10"><NavLink className="text-gray-500">Iphone</NavLink></div>
            </div>
        </div>
    );
};

export default Sidebar;