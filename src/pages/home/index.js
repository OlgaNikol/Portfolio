import './home.scss';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {languageSelector} from "../../store/selector";

const HomePage = () => {
    const lang = useSelector(languageSelector);

    return <div className="home">
        <div className="container">
            <div className="home__subtitle title title_fz16">{lang === "english" ? "Filipovych Olga" : "Філіпович Ольга"}</div>
            <h1 className="home__title title title_fz48">{lang === "english" ? "I'm web-developer" : "Я web-розробник"}</h1>
            <h2>{lang === "english" ? "based in Ukraine" : "з України"}</h2>
            <div className="home__btns">
                <Link to="/portfolio">{lang === "english" ? "Portfolio" : "Портфоліо"}</Link>
                <Link to="/contact">{lang === "english" ? "Contacts" : "Контакти"}</Link>
            </div>
        </div>
    </div>
}

export default HomePage;