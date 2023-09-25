import {languageSelector, skillsEngSelector, skillsUkrSelector} from "../../store/selector";
import {useSelector} from "react-redux";
import "./Skill.scss";

import Skill from "./Skill";

const SkillsList = () => {
    const lang = useSelector(languageSelector);
    const skillsEng = useSelector(skillsEngSelector);
    const skillsUkr = useSelector(skillsUkrSelector);
    let skillsList;

    if (lang === "ukrainian") {
        skillsList = skillsUkr.map(item => (
            <Skill key={item.id} name={item.name} description={item.description} image={item.image}/>
        ))
    } else {
        skillsList = skillsEng.map(item => (
            <Skill key={item.id} name={item.name} description={item.description} image={item.image}/>
        ))
    }

    return <div className="skills__items">
        {skillsList}
    </div>
}

export default SkillsList;