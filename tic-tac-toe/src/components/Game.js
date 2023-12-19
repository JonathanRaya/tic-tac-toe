import React, { useState } from 'react'
import Board from './Board'

    const Game = () => {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }])
    const [stepNumber, setStepNumber] = useState(0)
    const xIsNext = stepNumber % 2 === 0

    const current = history[stepNumber]
    const winner = calculateWinner(current.squares)

    const handleClick = (i) => {
        const newHistory = history.slice(0, stepNumber + 1)
        const currentBoard = newHistory[newHistory.length - 1]
        const squares = [...currentBoard.squares]

        if (winner || squares[i]) {
        return;
        }

        squares[i] = xIsNext ? 'X' : 'O'

        setHistory([...newHistory, { squares }])
        setStepNumber(newHistory.length)
    };

    const handleReset = () => {
        setHistory([{ squares: Array(9).fill(null) }])
        setStepNumber(0)
    };

    const status = winner
        ? `Winner: ${winner}`
        : `Next person: ${xIsNext ? 'X' : 'O'}`

    return (
        <div className="game">
        <div className="game-board">
            <Board squares={current.squares} onClick={handleClick} />
            <div className="game-info">
            <h3>{status}</h3>
            {<button onClick={handleReset} className="reset-button">
                Play Again
                </button>}
            </div>
        </div>
        </div>
    )
    }

    const calculateWinner = (squares) => {
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
        return squares[a]
        }
    }

    return null
};

export default Game