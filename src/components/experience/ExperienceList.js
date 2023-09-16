import styles from './Experience.module.scss';

import ExperienceBlock from "./ExperienceBlock";
import {useSelector} from "react-redux";
import {experienceSelector} from "../../store/selector";

const ExperienceList = () => {
    const experienceList = useSelector(experienceSelector);

    return <div className={styles.experience__items}>
        {
            experienceList.map(item => (
                <ExperienceBlock key={item.id} data={item}/>
            ))
        }
    </div>
}

export default ExperienceList;