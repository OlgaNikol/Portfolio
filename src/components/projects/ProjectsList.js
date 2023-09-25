import {languageSelector, projectsEngSelector, projectsUkrSelector} from "../../store/selector";
import {useSelector} from "react-redux";
import "./Project.scss";

import Project from "./Project";

const ProjectList = () => {
    const lang = useSelector(languageSelector);
    const projectsEng = useSelector(projectsEngSelector);
    const projectsUkr = useSelector(projectsUkrSelector);
    let projects;

    if (lang === "ukrainian") {
        projects = projectsUkr.map(item => (
            <Project key={item.id} nameUrl={item.nameUrl} name={item.name} description={item.description} image={item.image}/>
        ))
    } else {
        projects = projectsEng.map(item => (
            <Project key={item.id} nameUrl={item.nameUrl} name={item.name} description={item.description} image={item.image}/>
        ))
    }

    return <div className="project__items">
        {projects}
    </div>
}

export default ProjectList;