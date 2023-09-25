import './contact.scss';
import {useSelector} from "react-redux";
import {languageSelector} from "../../store/selector";

const ContactMePage = () => {
    const lang = useSelector(languageSelector);

    return <div className="contacts">
        <div className="container">
            <div className="title title_fz36 title__section-subtitle">{lang === "ukrainian" ? "зв'яжіться зі мною" : "contact me"}</div>
            <div className="divider"></div>

            <div className="contacts__wrapper">
                <form action="#" className="contacts__form">
                    <div className="contacts__input">
                        <input required name="name" id="name" type="text"/>
                        <label htmlFor="name">{lang === "ukrainian" ? "Ім'я" : "Name"}</label>
                    </div>
                    <div className="contacts__input">
                        <input required name="email" id="email" type="email"/>
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className="contacts__textarea">
                        <textarea name="text" id="text"></textarea>
                        <label htmlFor="text">{lang === "ukrainian" ? "Повідомлення" : "Message"}</label>
                    </div>
                </form>
                <button className="contacts__btn">{lang === "ukrainian" ? "Відправити" : "Send message"}</button>
            </div>
        </div>
    </div>
}

export default ContactMePage;