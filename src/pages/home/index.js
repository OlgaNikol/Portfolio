import styles from './home.module.scss';
import {Link} from "react-router-dom";

const HomePage = () => {
    return <div className={styles.home}>
        <div className="container">
            <div className={`${styles.home__subtitle} title title_fz16`}>Filipovych Olga</div>
            <h1 className={`${styles.home__title} title title_fz48`}>I'm web-developer</h1>
            <h2>based in Ukraine</h2>
            <div className={styles.home__btns}>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contacts</Link>
            </div>
        </div>
    </div>
}

export default HomePage;