import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './DashBoard.css';
import Modal from './Modal';
<NavLink
    to="/messages"
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
    }
></NavLink>
const DashBoard = () => {
    return (
        <div className="px-5">
            <div className="max-w-[1540px] mx-auto h-[300px] lg:h-[200px] bg-[#9538E2] text-white text-center p-5">
                <h1 className="text-3xl">Dashboard</h1>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div id='dashlink' className="w-[200px] mx-auto rounded-full bg-white text-[#9538E2] px-5 py-2"><button to="/dashBoard/cart" onClick={()=>document.getElementById('my_modal_5').showModal()} >Purchase</button></div><br />
                <Modal></Modal>
                <div className="w-[200px] flex justify-between mx-auto my-3">
                    <div id='dashlink' className=""><NavLink to="/dashBoard/cart" >Cart</NavLink></div>
                    <div id='dashlink' className=""><NavLink to="/dashBoard/wishlist">Wishlist</NavLink></div>
                </div>
            </div>
            <Outlet></Outlet>

        </div>
    );
};

export default DashBoard;