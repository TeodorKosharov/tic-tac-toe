import styles from "../Styles.module.css";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";


export const Cell = ({sign, setSign, board, setBoard, row, col}) => {
    const [cellSign, setCellSign] = useState('');
    let currentBoard = [...board];

    useEffect(() => {
        // This hook is used for resetting the board
        if (sign === '') {
            setCellSign('');
            const randomNum = Math.floor(Math.random() * 2) + 1;
            randomNum === 1 ? setSign('X') : setSign('O');
        }
    }, [sign]);

    function drawSign() {
        if (cellSign === '') {
            if (sign === 'X') setCellSign(<FontAwesomeIcon icon={faXmark}/>);
            else setCellSign(<FontAwesomeIcon icon={faCircle}/>);

            if (sign === 'X') setSign('O')
            else setSign('X');

            currentBoard[row][col] = sign;
            setBoard(currentBoard);
        }
    }

    return (<div className={styles.cell} onClick={drawSign}>{cellSign}</div>);
}