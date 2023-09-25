import './Experience.scss';
import {useSelector} from "react-redux";
import {languageSelector} from "../../store/selector";

const ExperienceBlock = (props) => {
    const {position, period, company, projects, technologies} = props.data;
    const lang = useSelector(languageSelector);

    return (
        <div className="experience__item">
            <div className="experience__item-head">
                <h4 className="main-color" dangerouslySetInnerHTML={{__html: position}}></h4>
                <div>{company}</div>
                <span className="title_fz14 color-grey">{period}</span>
            </div>

            <div className="experience__item-desc">
                <div className="color-grey">{lang === "ukrainian" ? "Проекти: " : "Projects: "}</div><div>{projects}</div>
                <div className="color-grey">{lang === "ukrainian" ? "Технології: " : "Technologies: "}</div><div>{technologies}</div>
            </div>
        </div>
    )
}

export default ExperienceBlock;