import "../../components/projects/Project.scss";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {languageSelector} from "../../store/selector";

const PortfolioPage = () => {
    const lang = useSelector(languageSelector);

    return <div className="project">
        <div className="container">
            <div className="title title_fz36 title__section-subtitle">{lang === "ukrainian" ? "портфоліо" : "portfolio"}</div>
            <div className="divider"></div>

            <Outlet/>
        </div>
    </div>
}

export default PortfolioPage;