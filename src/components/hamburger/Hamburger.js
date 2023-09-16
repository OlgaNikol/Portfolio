import styles from './Hamburger.module.scss';
import {useDispatch} from "react-redux";

const Hamburger = () => {
    const dispatch = useDispatch();

    return (
        <div onClick={() => {dispatch({type: 'TOGGLE_MENU'})}} className={styles.hamburger}>
            <span></span>
            <span className={styles.long}></span>
            <span></span>
        </div>
    )
}

export default Hamburger;