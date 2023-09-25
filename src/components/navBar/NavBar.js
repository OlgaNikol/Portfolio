import './NavBar.scss';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {languageSelector} from "../../store/selector";

const NavBar = () => {
    const lang = useSelector(languageSelector);

    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__link"><NavLink className={({ isActive}) => isActive ? "active" : ""}
                    to="/">{lang === "english" ? "Home" : "Головна"}</NavLink></li>
                <li className="menu__link"><NavLink className={({ isActive}) => isActive ? "active" : ""}
                    to="/experience">{lang === "english" ? "About me" : "Про мене"}</NavLink></li>
                <li className="menu__link"><NavLink className={({ isActive}) => isActive ? "active" : ""}
                    to="/skills">{lang === "english" ? "My skills" : "Навички"}</NavLink></li>
                <li className="menu__link"><NavLink className={({ isActive}) => isActive ? "active" : ""}
                    to="/portfolio">{lang === "english" ? "Portfolio" : "Портфоліо"}</NavLink></li>
                <li className="menu__link"><NavLink className={({ isActive}) => isActive ? "active" : ""}
                    to="/contact">{lang === "english" ? "Contacts" : "Контакти"}</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;