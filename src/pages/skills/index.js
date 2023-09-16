import styles from "../../components/skills/Skill.module.scss";
import SkillsList from "../../components/skills/SkillsList";

const SkillsPage = () => {
    return <div className={styles.skills}>
        <div className="container">
            {/*<h2 className="title title_fz16 title__section-title">Skills</h2>*/}
            <div className="title title_fz36 title__section-subtitle">What I use</div>
            <div className="divider"></div>

            <SkillsList />
        </div>
    </div>
}

export default SkillsPage;