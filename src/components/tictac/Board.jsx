import React from "react";
import Square from "./Square";
import s from './tictac.module.css'



const Board = ({squares, onClick}) => {


    const renderSquare = (i) => {
        return (
            <Square value={squares[i]} onClick={() => onClick(i)}/>
        );
    };

    return (
        <div className={s.status}>
            <div className={s.boardRow}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className={s.boardRow}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className={s.boardRow}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board;