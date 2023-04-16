import styles from "../Styles.module.css";
import {useState} from "react";


export const PlayersNamesForm = (props) => {
    const [firstPlayer, setFirstPlayer] = useState('');
    const [secondPlayer, setSecondPlayer] = useState('');
    const setPlayers = props.setNames;

    function onFirstPlayerInput(event) {
        setFirstPlayer(event.target.value);
    }

    function onSecondPlayerInput(event) {
        setSecondPlayer(event.target.value);
    }

    function onFormSubmit(event) {
        event.preventDefault();
        const playersNames = [firstPlayer, secondPlayer];
        setPlayers(playersNames);
    }

    return (<form onSubmit={onFormSubmit}>
            <h2>Set players names</h2>
            <label htmlFor="player1"></label>
            <input
                onChange={onFirstPlayerInput}
                id="player1"
                placeholder="First player's name"
                required={true}
                maxLength={15}
            /> <br/>

            <label htmlFor="player2"></label>
            <input
                onChange={onSecondPlayerInput}
                id="player2"
                placeholder="Second player's name"
                required={true}
                maxLength={15}
            /> <br/>
            <button>Play</button>
        </form>);
}