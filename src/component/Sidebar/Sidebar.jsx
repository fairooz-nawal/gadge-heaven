import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
<NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
></NavLink>
const Sidebar = () => {
    return (
        <div className='lg:w-full '>
            <div className='w-11/12 border-2 border-gray-300 flex-row space-y-5  rounded-lg p-5 '>
                <div id="sidelink" className="w-full bg-gray-200 rounded-full py-3 px-10"><NavLink className="text-gray-500 w-full text-xl" to="/allproduct">All Product</NavLink></div>
                <div id="sidelink" className="w-full bg-gray-200 rounded-full py-3 px-10"><NavLink className="text-gray-500 w-full text-xl" to="/laptop">Laptop</NavLink></div>
                <div id="sidelink" className="w-full bg-gray-200 rounded-full py-3 px-10"><NavLink className="text-gray-500 w-full text-xl" to="/phone">Phone</NavLink></div>
                <div id="sidelink" className="w-full bg-gray-200 rounded-full py-3 px-10"><NavLink className="text-gray-500 w-full text-xl" to="/smartwatch">Smart Watch</NavLink></div>
                <div id="sidelink" className="w-full bg-gray-200 rounded-full py-3 px-10 "><NavLink className="text-gray-500 w-full text-xl" to="/macbook">Mac Book</NavLink></div>
            </div>
        </div>
    );
};

export default Sidebar;