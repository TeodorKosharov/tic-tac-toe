import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGamepad} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return (
        <header>
            <h1>Tic-Tac-Toe <FontAwesomeIcon icon={faGamepad} /></h1>
        </header>
    );
}
