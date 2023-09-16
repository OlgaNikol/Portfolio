import styles from './SideBar.module.scss';

import {useDispatch, useSelector} from "react-redux";
import {selectMenuIsActive} from "../../store/selector";
import {Link} from "react-router-dom";

const SideBar = () => {
    const dispatch = useDispatch();
    const menuIsActive = useSelector(selectMenuIsActive);

    return (
        <div className={`${styles.menu} ${menuIsActive ? styles.active : ''}`}>
            <div className={styles.menu__block}>
                <div className={styles.menu__close} onClick={() => dispatch({type: 'TOGGLE_MENU'})}>
                    <svg width="29" height="18" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z"
                            fill="black"/>
                    </svg>
                </div>

                <nav>
                    <ul className={styles.menu__list} onClick={() => dispatch({type: 'TOGGLE_MENU'})}>
                        <li className={styles.menu__link}><Link to="/">Home</Link></li>
                        <li className={styles.menu__link}><Link to="/experience">About me</Link></li>
                        <li className={styles.menu__link}><Link to="/skills">My skills</Link></li>
                        <li className={styles.menu__link}><Link to="/portfolio">Portfolio</Link></li>
                        <li className={styles.menu__link}><Link to="/contact">Contacts</Link></li>
                    </ul>
                </nav>

                <div className={styles.menu__social}>
                    <button>
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 0C4.475 0 0 4.36167 0 9.74107C0 14.0457 2.865 17.6962 6.8375 18.9832C7.3375 19.0749 7.52083 18.7734 7.52083 18.5148C7.52083 18.2835 7.5125 17.6706 7.50833 16.8585C4.72667 17.4459 4.14 15.5517 4.14 15.5517C3.685 14.4274 3.0275 14.1267 3.0275 14.1267C2.12167 13.5228 3.0975 13.5352 3.0975 13.5352C4.10167 13.603 4.62917 14.5389 4.62917 14.5389C5.52083 16.0283 6.97 15.5979 7.54167 15.3493C7.63167 14.719 7.88917 14.2903 8.175 14.0466C5.95417 13.8029 3.62 12.9652 3.62 9.23304C3.62 8.16988 4.0075 7.30085 4.64917 6.61934C4.53667 6.37317 4.19917 5.3827 4.73667 4.04116C4.73667 4.04116 5.57417 3.78012 7.48667 5.03988C8.28667 4.82345 9.13667 4.71606 9.98667 4.7111C10.8367 4.71606 11.6867 4.82345 12.4867 5.03988C14.3867 3.78012 15.2242 4.04116 15.2242 4.04116C15.7617 5.3827 15.4242 6.37317 15.3242 6.61934C15.9617 7.30085 16.3492 8.16988 16.3492 9.23304C16.3492 12.9752 14.0117 13.7987 11.7867 14.0383C12.1367 14.3307 12.4617 14.928 12.4617 15.8408C12.4617 17.1444 12.4492 18.1918 12.4492 18.5082C12.4492 18.7635 12.6242 19.0683 13.1367 18.9708C17.1375 17.692 20 14.0391 20 9.74107C20 4.36167 15.5225 0 10 0Z"
                                fill="#212121"/>
                        </svg>
                    </button>
                    <button>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.0698 0L2.9292 0C1.3139 0 -0.000488281 1.31439 -0.000488281 2.92969L-0.000488281 17.0703C-0.000488281 18.6856 1.3139 20 2.9292 20L8.82764 20L8.82764 12.9297L6.48389 12.9297L6.48389 9.41406L8.82764 9.41406L8.82764 7.03125C8.82764 5.09262 10.4046 3.51563 12.3433 3.51563L15.8979 3.51563L15.8979 7.03125L12.3433 7.03125L12.3433 9.41406L15.8979 9.41406L15.312 12.9297L12.3433 12.9297L12.3433 20L17.0698 20C18.6851 20 19.9995 18.6856 19.9995 17.0703L19.9995 2.92969C19.9995 1.31439 18.6851 0 17.0698 0Z"
                                fill="black"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={styles.menu__overlay}></div>
        </div>
    )
}

export default SideBar;