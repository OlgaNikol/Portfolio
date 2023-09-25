import NavBar from "../navBar/NavBar";
import LanguageMenu from "../languageMenu/LanguageMenu";
import {Outlet} from "react-router-dom";
import "./Layout.scss";

const Layout = () => {
    return (
        <>
            <header className="header">
                <NavBar/>
                <LanguageMenu/>
            </header>
            <Outlet/>
        </>
    );
}

export default Layout;