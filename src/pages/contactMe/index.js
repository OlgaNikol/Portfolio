import styles from './contact.module.scss';

const ContactMePage = () => {
    return <div className={styles.contacts}>
        <div className="container">
            <div className="title title_fz36 title__section-subtitle">contact me</div>
            <div className="divider"></div>

            <div className={styles.contacts__wrapper}>
                <form action="#" className={styles.contacts__form}>
                    <div className={styles.contacts__input}>
                        <input required name="name" id="name" type="text"/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className={styles.contacts__input}>
                        <input required name="email" id="email" type="email"/>
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className={styles.contacts__textarea}>
                        <textarea name="text" id="text"></textarea>
                        <label htmlFor="text">Message</label>
                    </div>
                </form>
                <button className={styles.contacts__btn}>Send message</button>
            </div>
        </div>
    </div>
}

export default ContactMePage;