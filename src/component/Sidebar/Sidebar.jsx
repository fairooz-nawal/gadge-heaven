import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { ContextApi } from '../ContextAPI/ContextApi';
import { useContext } from 'react';
<NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
></NavLink>
const Sidebar = () => {
  const {handleCategory} = useContext(ContextApi);
    return (
        <div className='lg:w-full '>
            <div className='w-11/12 border-2 border-gray-300 flex-row space-y-5  rounded-lg p-5 '>
                <button id="sidelink" onClick={()=>handleCategory("allproduct")} className="w-full bg-gray-200 rounded-full py-3 px-10"><NavLink className="text-gray-500 w-full text-xl" to="/allproduct">All Product</NavLink></button>
                <button id="sidelink" onClick={()=>handleCategory("Laptop")}className="w-full bg-gray-200 rounded-full py-3 px-10"><NavLink className="text-gray-500 w-full text-xl" to="/laptop">Laptop</NavLink></button>
                <button id="sidelink" onClick={()=>handleCategory("Smartphone")}className="w-full bg-gray-200 rounded-full py-3 px-10"><NavLink className="text-gray-500 w-full text-xl" to="/phone">Phone</NavLink></button>
                <button id="sidelink" onClick={()=>handleCategory("Smartwatch")}className="w-full bg-gray-200 rounded-full py-3 px-10"><NavLink className="text-gray-500 w-full text-xl" to="/smartwatch">Smart Watch</NavLink></button>
            </div>
        </div>
    );
};

export default Sidebar;