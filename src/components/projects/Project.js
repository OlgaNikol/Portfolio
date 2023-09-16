import styles from "./Project.module.scss";
import {Link} from "react-router-dom";

const Project = (props) => {
    const {name, description, image} = props;

    return <div className={styles.project__item}>
        <div className={styles.project__item_img}>
            <Link to={name}><img src={image} alt="project"/></Link>
        </div>
        <div className={styles.project__item_info}>
            <h3 className="title title_fz14"><Link to={name}>{name}</Link></h3>
            <p>{description}</p>
        </div>
    </div>
}

export default Project;