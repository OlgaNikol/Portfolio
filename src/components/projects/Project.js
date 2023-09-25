import "./Project.scss";
import {Link} from "react-router-dom";

const Project = (props) => {
    const {nameUrl, name, description, image} = props;

    return <div className="project__item">
        <div className="project__item_img">
            <Link to={nameUrl}><img src={image} alt="project"/></Link>
        </div>
        <div className="project__item_info">
            <h3 className="title title_fz14"><Link to={nameUrl}>{name}</Link></h3>
            <p>{description}</p>
        </div>
    </div>
}

export default Project;