import React, {useState} from 'react';
import s from './tictac.module.css'
import Board from "./Board";

function TicTac() {

    const [square, setSquares] = useState({
        history: [{
            squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true
    });

    const handleClick = (i) => {
        const history = square.history.slice(0, square.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = square.xIsNext ? 'X' : 'O';
        setSquares({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !square.xIsNext
        });
    }

    const jumpTo = (step) => {
        setSquares({
            history: square.history,
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }

    const history = square.history;
    const current = history[square.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
        const desc = move ? 'Go to move #' + move : 'Go to start';
        return (
            <li key={Math.floor(Math.random() * 10000)}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        )
    })

    let status;

    if (winner) {
        status = `Winner ${winner}`;
    } else {
        status = `Next player: ${square.xIsNext ? 'X' : 'O'}`;
    }

    return (
        <div className={s.game}>
            <div className={s.gameBoard}>
                <Board squares={current.squares} onClick={(i) => handleClick(i)}/>
            </div>

            <div className={s.gameInfo}>
                <div>
                    {status}
                </div>
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default TicTac;