import styles from "../Styles.module.css";
import {PlayersNamesForm} from "../gameComponents/PlayersNamesForm";
import {useState} from "react";
import {Board} from "../gameComponents/Board";

export const Main = () => {
    const [players, setPlayers] = useState([]);


    return (
        <main>
            {
                players.length === 0
                    ? <PlayersNamesForm setNames={setPlayers}/>
                    : <Board players={players} setPlayers={setPlayers}/>
            }
        </main>
    );
}