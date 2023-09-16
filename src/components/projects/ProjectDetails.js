import styles from "./ProjectDetails.module.scss";
import {useSelector} from "react-redux";
import {projectsSelector} from "../../store/selector";
import {useParams} from "react-router-dom";

const ProjectDetails = () => {
    const params = useParams();

    const projectsAll = useSelector(projectsSelector);
    const project = projectsAll.filter(project => project.name === params.name)[0];

    const {name, fullDescr, techs} = project;
    const image = project.image.substring(1);

    return <div className={styles.project}>
        <div className={styles.project__item_img}>
            <img src={image} alt="project"/>
        </div>
        <div className={styles.project__item_info}>
            <span className="title_fz14">Project: </span><h2 className="title title_fz20">{name}</h2>
            <span className="title_fz14">Description: </span><div dangerouslySetInnerHTML={{__html: fullDescr}} />
            <span className="title_fz14">Technologies: </span><p>{techs}</p>
        </div>
    </div>
}

export default ProjectDetails;