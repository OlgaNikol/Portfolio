import styles from "./Skill.module.scss";

const Skill = (props) => {
    const { name, description, image } = props;

    return <div className={styles.skills__item}>
            <div className={styles.skills__item_img}>
                <img src={image} alt="icon_skill" />
            </div>
            <h3 className="title title_fz14">{name}</h3>
            <p>{description}</p>
        </div>
}

export default Skill;