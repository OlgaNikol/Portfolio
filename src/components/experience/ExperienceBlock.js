import styles from './Experience.module.scss';

const ExperienceBlock = (props) => {
    const {position, period, company, projects, technologies} = props.data;

    return (
        <div className={styles.experience__item}>
            <div className={styles["experience__item-head"]}>
                <h4 className="main-color" dangerouslySetInnerHTML={{__html: position}}></h4>
                <div>{company}</div>
                <span className="title_fz14 color-grey">{period}</span>
            </div>

            <div className={styles["experience__item-desc"]}>
                <div className="color-grey">Projects: </div><div>{projects}</div>
                <div className="color-grey">Technologies: </div><div>{technologies}</div>
            </div>
        </div>
    )
}

export default ExperienceBlock;