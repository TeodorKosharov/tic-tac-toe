import styles from "../Styles.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import {useEffect, useState} from "react";
import {Cell} from "./Cell";
import Swal from "sweetalert2";


export const Board = (props) => {
    const [sign, setSign] = useState('');
    const [board, setBoard] = useState([[], [], []]);
    const [firstPlayer, secondPlayer] = props.players;
    const randomNum = Math.floor(Math.random() * 2) + 1;

    function checkForWinner(sign, player) {
        if (
            (board[0][0] === sign && board[0][1] === sign && board[0][2] === sign) ||
            (board[1][0] === sign && board[1][1] === sign && board[1][2] === sign) ||
            (board[2][0] === sign && board[2][1] === sign && board[2][2] === sign) ||
            (board[0][0] === sign && board[1][0] === sign && board[2][0] === sign) ||
            (board[0][1] === sign && board[1][1] === sign && board[2][1] === sign) ||
            (board[0][2] === sign && board[1][2] === sign && board[2][2] === sign) ||
            (board[0][0] === sign && board[1][1] === sign && board[2][2] === sign) ||
            (board[0][2] === sign && board[1][1] === sign && board[2][0] === sign)
        ) {
            Swal.fire({
                icon: 'success',
                title: `${player} is the winner!`,
                showConfirmButton: true
            }).then(() => {
                setSign('');
                setBoard([[], [], []]);
            })
        }
    }

    useEffect(() => {
        randomNum === 1 ? setSign('X') : setSign('O');
    }, []);

    useEffect(() => {
        checkForWinner('X', firstPlayer);
        checkForWinner('O', secondPlayer);
    }, [board]);

    function resetGame() {
        Swal.fire({
            icon: 'question',
            title: 'Do you want to reset the game?',
            showConfirmButton: true,
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) props.setPlayers([]);
        });
    }

    function resetBoard() {
        Swal.fire({
            icon: 'question',
            title: 'Do you want to reset the board?',
            showConfirmButton: true,
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) setSign('');
        });
    }

    return (
        <div className={styles.board}>
            <div className={styles.playersInfoBox}>
                <div className={sign !== 'X' ? styles.lighterPlayerBox : styles.playerBox}>
                    <p>
                        {firstPlayer} <FontAwesomeIcon icon={faXmark}/>
                    </p>
                </div>

                <div className={sign !== 'O' ? styles.lighterPlayerBox : styles.playerBox}>
                    <p>
                        {secondPlayer} <FontAwesomeIcon icon={faCircle}/>
                    </p>
                </div>
            </div>
            <div className={styles.gameboardBox}>
                <div className={styles.gameboard}>
                    <Cell sign={sign} setSign={setSign} board={board} setBoard={setBoard} row={0} col={0}/>
                    <Cell sign={sign} setSign={setSign} board={board} setBoard={setBoard} row={0} col={1}/>
                    <Cell sign={sign} setSign={setSign} board={board} setBoard={setBoard} row={0} col={2}/>
                    <Cell sign={sign} setSign={setSign} board={board} setBoard={setBoard} row={1} col={0}/>
                    <Cell sign={sign} setSign={setSign} board={board} setBoard={setBoard} row={1} col={1}/>
                    <Cell sign={sign} setSign={setSign} board={board} setBoard={setBoard} row={1} col={2}/>
                    <Cell sign={sign} setSign={setSign} board={board} setBoard={setBoard} row={2} col={0}/>
                    <Cell sign={sign} setSign={setSign} board={board} setBoard={setBoard} row={2} col={1}/>
                    <Cell sign={sign} setSign={setSign} board={board} setBoard={setBoard} row={2} col={2}/>
                </div>
            </div>
            <div className={styles.buttonsBox}>
                <button onClick={resetGame}>Reset game</button>
                <button onClick={resetBoard}>Reset board</button>
            </div>
        </div>
    );
}