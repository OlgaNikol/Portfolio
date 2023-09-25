import './Experience.scss';

import ExperienceBlock from "./ExperienceBlock";
import {useSelector} from "react-redux";
import {experienceEngSelector, experienceUkrSelector, languageSelector} from "../../store/selector";

const ExperienceList = () => {
    const lang = useSelector(languageSelector);
    const experienceListEng = useSelector(experienceEngSelector);
    const experienceListUkr = useSelector(experienceUkrSelector);
    let experienceList;

    if (lang === "ukrainian") {
        experienceList = experienceListUkr.map(item => (
            <ExperienceBlock key={item.id} data={item}/>
        ))
    } else {
        experienceList = experienceListEng.map(item => (
            <ExperienceBlock key={item.id} data={item}/>
        ))
    }


    return <div className="experience__items">
        {experienceList}
    </div>
}

export default ExperienceList;