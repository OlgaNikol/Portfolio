import styles from "../../components/experience/Experience.module.scss";

import ExperienceList from "../../components/experience/ExperienceList";

const ExperiencePage = () => {
    return <div className={styles.experience}>
        <div className="container">
            <div className="title title_fz36 title__section-subtitle">experience</div>
            <div className="divider"></div>

            <ExperienceList />
        </div>
    </div>
}

export default ExperiencePage;