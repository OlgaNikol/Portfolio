import styles from "../../components/projects/Project.module.scss";
import {Outlet} from "react-router-dom";

const PortfolioPage = () => {
    return <div className={styles.project}>
        <div className="container">
            <div className="title title_fz36 title__section-subtitle">my portfolio</div>
            <div className="divider"></div>

            <Outlet/>
        </div>
    </div>
}

export default PortfolioPage;