import "./ProjectDetails.scss";
import {useSelector} from "react-redux";
import {languageSelector, projectsEngSelector, projectsUkrSelector} from "../../store/selector";
import {useParams} from "react-router-dom";

const ProjectDetails = () => {
    const params = useParams();
    const lang = useSelector(languageSelector);
    const projectsAllUkr = useSelector(projectsUkrSelector);
    const projectsAllEng = useSelector(projectsEngSelector);
    let project;


    if (lang === "ukrainian") {
        project = projectsAllUkr.filter(project => project.nameUrl === params.nameUrl)[0];
    } else {
        project = projectsAllEng.filter(project => project.nameUrl === params.nameUrl)[0];
    }

    const {name, fullDescr, techs} = project;
    const image = project.image.substring(1);

    return <div className="project-details">
        <div className="project-details__item_img">
            <img src={image} alt="project"/>
        </div>
        <div className="project-details__item_info">
            <span className="title_fz14">{lang === "ukrainian" ? "Проект: " : "Project: "}</span><h2 className="title title_fz20">{name}</h2>
            <span className="title_fz14">{lang === "ukrainian" ? "Опис: " : "Description: "}</span><div dangerouslySetInnerHTML={{__html: fullDescr}} />
            <span className="title_fz14">{lang === "ukrainian" ? "Технології: " : "Technologies: "}</span><p>{techs}</p>
        </div>
    </div>
}

export default ProjectDetails;