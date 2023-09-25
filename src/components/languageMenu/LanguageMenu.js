import './LanguageMenu.scss';
import {useDispatch} from "react-redux";

const LanguageMenu = () => {
    const dispatch = useDispatch();

    return <div className="menuLang">
        <ul className="menuLang__list">
            <li>
                <button className="menuLang__btn" onClick={() => dispatch({type: "TOGGLE_LANG", payload: "english"})}>
                    <img src="./icons/lang/united-states.png" alt="english"/>
                </button>
            </li>
            <li>
                <button className="menuLang__btn" onClick={() => dispatch({type: "TOGGLE_LANG", payload: "ukrainian"})}>
                    <img src="./icons/lang/ukraine.png" alt="ukraine"/>
                </button>
            </li>
        </ul>
    </div>
}

export default LanguageMenu;