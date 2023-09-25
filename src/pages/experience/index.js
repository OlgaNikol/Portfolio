import "../../components/experience/Experience.scss";

import ExperienceList from "../../components/experience/ExperienceList";
import {useSelector} from "react-redux";
import {languageSelector} from "../../store/selector";

const ExperiencePage = () => {
    const lang = useSelector(languageSelector);

    return <div className="experience">
        <div className="container">
            <div className="title title_fz36 title__section-subtitle">{lang === "english" ? "experience" : "Мій досвід"}</div>
            <div className="divider"></div>

            <ExperienceList />
        </div>
    </div>
}

export default ExperiencePage;