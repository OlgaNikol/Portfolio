import {skillsSelector} from "../../store/selector";
import {useSelector} from "react-redux";
import styles from "./Skill.module.scss";

import Skill from "./Skill";

const SkillsList = () => {
    const skills = useSelector(skillsSelector);

    return <div className={styles.skills__items}>
        {
            skills.map(item => (
                <Skill key={item.id} name={item.name} description={item.description} image={item.image}/>
            ))
        }
    </div>
}

export default SkillsList;