import styles from './NavBar.module.scss';
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__link}><NavLink className={({ isActive}) => isActive ? [styles.active] : ""}
                    to="/">Home</NavLink></li>
                <li className={styles.menu__link}><NavLink className={({ isActive}) => isActive ? [styles.active] : ""}
                    to="/experience">About me</NavLink></li>
                <li className={styles.menu__link}><NavLink className={({ isActive}) => isActive ? [styles.active] : ""}
                    to="/skills">My skills</NavLink></li>
                <li className={styles.menu__link}><NavLink className={({ isActive}) => isActive ? [styles.active] : ""}
                    to="/portfolio">Portfolio</NavLink></li>
                <li className={styles.menu__link}><NavLink className={({ isActive}) => isActive ? [styles.active] : ""}
                    to="/contact">Contacts</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;