import {projectsSelector} from "../../store/selector";
import {useSelector} from "react-redux";
import styles from "./Project.module.scss";

import Project from "./Project";

const ProjectList = () => {
    const projects = useSelector(projectsSelector);

    return <div className={styles.project__items}>
        {
            projects.map(item => (
                <Project key={item.id} name={item.name} description={item.description} image={item.image}/>
            ))
        }
    </div>
}

export default ProjectList;