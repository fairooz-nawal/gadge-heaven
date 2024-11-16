import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import './Navbar.css';
<NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
></NavLink>
const Navbar = () => {
    const Link = <>
        <div className="lg:flex lg:gap-12">
            <div id="navlink" className="mb-3"><NavLink to="/" className="text-lg">Home</NavLink></div>
            <div id="navlink" className="mb-3"><NavLink to="/statistic" className="text-lg">Statistic</NavLink></div>
            <div id="navlink" className="mb-3"> <NavLink to="/dashBoard" className="text-lg">DashBoard</NavLink></div>
            <div id="navlink" className="mb-3"> <NavLink to="/brandname" className="text-lg">Brand Name</NavLink></div>
        </div>

    </>
    return (
        <div className="max-w-[1540px] mx-auto rounded-t-lg bg-[#9538E2] text-white lg:px-10">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-30 bg-white text-black p-5">
                            {Link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl  lg:text-3xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {Link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="rounded-full mr-4 bg-white text-black p-3"><AiOutlineShoppingCart /></a>
                    <a className="rounded-full  bg-white text-black p-3"><FaRegHeart /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;