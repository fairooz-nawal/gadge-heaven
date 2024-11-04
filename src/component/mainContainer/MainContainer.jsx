import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
const MainContainer = () => {
    return (
        <div className="">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainContainer;