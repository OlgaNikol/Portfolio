import "../../components/skills/Skill.scss";
import SkillsList from "../../components/skills/SkillsList";
import {useSelector} from "react-redux";
import {languageSelector} from "../../store/selector";

const SkillsPage = () => {
    const lang = useSelector(languageSelector);

    return <div className="skills">
        <div className="container">
            <div className="title title_fz36 title__section-subtitle">{lang === "english" ? "What I use" : "Що я використовую в роботі"}</div>
            <div className="divider"></div>

            <SkillsList />
        </div>
    </div>
}

export default SkillsPage;