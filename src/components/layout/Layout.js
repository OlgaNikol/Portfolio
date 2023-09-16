import Hamburger from "../hamburger/Hamburger";
import SideBar from "../sideBar/SideBar";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Hamburger/>
            <SideBar/>
            <Outlet/>
        </>
    );
}

export default Layout;