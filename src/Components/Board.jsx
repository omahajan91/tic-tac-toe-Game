import React, { useState } from 'react'
import Square from './Square';

export default function Board() {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    }
    const checkDraw = () =>{
        for(let status of state){
            if(status === null){
                return false;
            }
        }
        return true;

    }

    const isWinner = checkWinner();

    const handleClick = (index) => {
        // console.log(index);
        if (state[index] !== null) {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? 'X' : 'O';
        setState(copyState);
        setIsXTurn(!isXTurn);
    }
    const handleReset = () => {
        setState(Array(9).fill(null))
    }
    return (
        < >
            {
                checkWinner() ? (
                    <div className='winner-container'>
                        <h3>🥳Congratulations🥳</h3>
                        <h1>{isWinner} won</h1>
                        
                        <button onClick={handleReset}>Play again</button>
                    </div>
                ) :
                checkDraw() ? (
                    <div className='draw-container'>
                        <h1>Match is draw</h1>
                        <h3>Best luck for next time👍</h3>
                        <button onClick={handleReset}>Play again</button>
                    </div>
                ) :
                    (
                        <>
                            <h3>{isXTurn ? 'X' : 'O'}'s move</h3>
                            <div className='board-container' >
                                <div className='board-row'>
                                    <Square value={state[0]} onClick={() => handleClick(0)} />
                                    <Square value={state[1]} onClick={() => handleClick(1)} />
                                    <Square value={state[2]} onClick={() => handleClick(2)} />
                                </div>
                                <div className='board-row'>
                                    <Square value={state[3]} onClick={() => handleClick(3)} />
                                    <Square value={state[4]} onClick={() => handleClick(4)} />
                                    <Square value={state[5]} onClick={() => handleClick(5)} />
                                </div>
                                <div className='board-row'>
                                    <Square value={state[6]} onClick={() => handleClick(6)} />
                                    <Square value={state[7]} onClick={() => handleClick(7)} />
                                    <Square value={state[8]} onClick={() => handleClick(8)} />
                                </div>
                            </div>
                        </>
                    )
            }
        </>
    )
}